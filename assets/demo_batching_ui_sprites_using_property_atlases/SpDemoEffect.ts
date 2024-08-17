import { _decorator, Color, Component, EffectAsset, log, Material, Node, Sprite, Texture2D } from 'cc';
import { EDITOR_NOT_IN_PREVIEW } from 'cc/env';
const { ccclass, property } = _decorator;

const PROP_TEXTURE_SIZE = 128;

@ccclass('SpDemoEffect')
export class SpDemoEffect extends Sprite {
    @property({ type: EffectAsset, tooltip: '指定效果EffectAsset' })
    public effectAsset: EffectAsset | null = null;

    //#region effectColor
    @property({ group: { name: "Setter/Getter", id: "1" }, type: Color, tooltip: "Effect Color" })
    public set effectColor(val: Color) {
        this._effectColor = val;
        this.reflashParams();
    }

    public get effectColor(): Color {
        return this._effectColor;
    }

    @property
    protected _effectColor: Color = new Color(255, 255, 255, 255);
    //#endregion

    //#region Member Variables
    private static propsTexture: Texture2D | null = null;
    private static propBuffer: Float32Array | null = null;
    private static effectUUID: string[] = [];
    private static mat: Material | null = null;
    private static isDirty: boolean = false;
    private instanceID: number = -1;

    private get pixelsUsage(): number {
        const floatUsage = 4;
        const res = Math.pow(2, Math.ceil(Math.log(floatUsage) / Math.log(2))) / 4;
        return res;
    }

    private calBufferIndex(x: number, y: number, w: number): number {
        return (x + (y * w)) * 4;
    }

    private reflashParams(): void {
        this.updateParams(this.instanceID % PROP_TEXTURE_SIZE,
            PROP_TEXTURE_SIZE - 1,
            SpDemoEffect.propBuffer!);

        if (EDITOR_NOT_IN_PREVIEW) {
            SpDemoEffect.propsTexture!.uploadData(SpDemoEffect.propBuffer!);
            SpDemoEffect.isDirty = false;
        }
        else {
            SpDemoEffect.isDirty = true;
        }
    }

    private updateParams(idx: number, textureWidth: number, propBuffer: Float32Array): void {
        let index = this.calBufferIndex(idx, 0, textureWidth);
        propBuffer[index + 0] = this._effectColor.r / 255;
        propBuffer[index + 1] = this._effectColor.g / 255;
        propBuffer[index + 2] = this._effectColor.b / 255;
        propBuffer[index + 3] = this._effectColor.a / 255;
    }

    //#region Lifecycle Methods
    start() {
        if (!this.effectAsset) {
            log("Please specify the effect asset in the editor");
            return;
        }

        this.instanceID = SpDemoEffect.effectUUID.findIndex((uuid) => uuid === this.node.uuid);
        if (this.instanceID === -1) {
            this.instanceID = SpDemoEffect.effectUUID.push(this.node.uuid) - 1;
        }

        this.color = new Color(this.instanceID % PROP_TEXTURE_SIZE,
            this.pixelsUsage,
            PROP_TEXTURE_SIZE,
            255);

        if (SpDemoEffect.mat === null) {
            const w = PROP_TEXTURE_SIZE;
            const h = this.pixelsUsage;

            SpDemoEffect.propBuffer = new Float32Array(w * h * 4);
            for (let y = 0; y < h; y++) {
                for (let x = 0; x < w; x++) {
                    const index = (x + (y * w)) * 4;
                    SpDemoEffect.propBuffer[index] = 1;
                    SpDemoEffect.propBuffer[index + 1] = 0;
                    SpDemoEffect.propBuffer[index + 2] = 1;
                    SpDemoEffect.propBuffer[index + 3] = 1;
                }
            }

            SpDemoEffect.propsTexture = new Texture2D();
            SpDemoEffect.propsTexture.setFilters(Texture2D.Filter.NEAREST, Texture2D.Filter.NEAREST);
            SpDemoEffect.propsTexture.reset({
                width: w,
                height: h,
                format: Texture2D.PixelFormat.RGBA32F,
                mipmapLevel: 0
            });
            SpDemoEffect.propsTexture.uploadData(SpDemoEffect.propBuffer);

            SpDemoEffect.mat = new Material();
            SpDemoEffect.mat.initialize(
                {
                    effectAsset: this.effectAsset,
                    defines: {},
                    technique: 0
                }
            );
            SpDemoEffect.mat.setProperty('propsTexture', SpDemoEffect.propsTexture);
        }

        this.customMaterial = SpDemoEffect.mat;

        this.reflashParams();
    }

    lateUpdate(deltaTime: number) {
        if (SpDemoEffect.isDirty) {
            SpDemoEffect.propsTexture!.uploadData(SpDemoEffect.propBuffer!);
            SpDemoEffect.isDirty = false;
        }
    }
}

