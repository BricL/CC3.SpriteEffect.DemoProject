import { _decorator, Component, error, instantiate, lerp, log, Node, Prefab, Slider, Toggle } from 'cc';
import { SpriteEffectColor } from '../../../extensions/sprite_effect/source/static/comp/SpriteEffectColor';
import { EffectColor } from './non_batching_effect/EffectColor';
const { ccclass, property } = _decorator;

const MAX_INSTANCES_COUNT = 768;

@ccclass('BatchingDemo')
export class BatchingDemo extends Component {
    @property(Prefab)
    public spEffectColor: Prefab | null = null;

    @property(Prefab)
    public spEffectColorNonBatch: Prefab | null = null;

    @property(Node)
    public refNode: Node | null = null;

    @property(Node)
    public refNodeBatching: Node | null = null;

    @property(Slider)
    public slider: Slider | null = null;

    private _sliderProgress: number = 0.0;
    private _mode: number = 0;

    public onSliderCallback(slider: Slider, customEventData: string) {
        this._sliderProgress = slider.progress;
    }

    public onToggleCallback(event: Event, customEventData: string) {
        const node = event.target as unknown as Node;
        const toggle = node.getComponent(Toggle);

        if (toggle.name.includes(`Non`)) {
            if (this._mode !== 1) {
                this.refNode!.active = false;
                this.refNodeBatching!.active = true;
            }

            this._mode = 1;
        } else {
            if (this._mode !== 0) {
                this.refNode!.active = true;
                this.refNodeBatching!.active = false;
            }

            this._mode = 0;
        }

        this.slider.progress = this._sliderProgress = 0.0;

        let nodesSpEC = this.refNode!.getComponentsInChildren(SpriteEffectColor);
        for (let i = 0; i < nodesSpEC.length; i++) {
            nodesSpEC[i].node.destroy();
        }

        let nodesEC = this.refNodeBatching!.getComponentsInChildren(EffectColor);
        for (let i = 0; i < nodesEC.length; i++) {
            nodesEC[i].node.destroy();
        }
    }

    start() {

    }

    update(deltaTime: number) {
        let refNode = null;
        let curChild = null;
        if (this._mode === 0) {
            refNode = this.refNode;
            curChild = refNode.getComponentsInChildren(SpriteEffectColor);
        } else {
            refNode = this.refNodeBatching;
            curChild = refNode.getComponentsInChildren(EffectColor);
        }

        const count = Math.floor(lerp(0.0, MAX_INSTANCES_COUNT, this._sliderProgress));

        let addCount = curChild.length - count;
        if (addCount > 0) {
            for (let i = 0; i < addCount; i++) {
                curChild[curChild.length - 1].node.destroy();
            }
        } else if (addCount < 0) {
            for (let i = 0; i < -addCount; i++) {
                if (this._mode === 0) {
                    let node = instantiate(this.spEffectColor);
                    node.parent = refNode;
                    node.name = `spColorEffect_${refNode.children.length}`;
                } else {
                    let node = instantiate(this.spEffectColorNonBatch);
                    node.parent = refNode;
                    node.name = `spColorEffect_${refNode.children.length}`;
                }
            }
        }
    }
}

