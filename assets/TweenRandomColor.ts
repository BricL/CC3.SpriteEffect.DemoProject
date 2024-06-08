import { _decorator, Color, Component, lerp, math, Node, random, tween } from 'cc';
import { SpriteEffectBase } from '../extensions/sprite_effect/source/assets/comp/SpriteEffectBase';
import { SpriteEffectColor } from '../extensions/sprite_effect/source/assets/comp/SpriteEffectColor';
const { ccclass, property } = _decorator;

@ccclass('TweenRandomColor')
export class TweenRandomColor extends Component {
    @property
    public color1: Color = new Color(255, 0, 0, 255);

    @property
    public color2: Color = new Color(0, 255, 0, 255);

    private _spEffectBase: SpriteEffectBase = null;

    start() {
        this._spEffectBase = this.node.getComponent(SpriteEffectColor);
        this.color1 = new Color(math.randomRangeInt(0, 256), math.randomRangeInt(0, 256), math.randomRangeInt(0, 256), 255);
        this.color2 = new Color(math.randomRangeInt(0, 256), math.randomRangeInt(0, 256), math.randomRangeInt(0, 256), 255);
        this.tweenColor();
    }

    private tweenColor() {
        let t = { dt: 0.0 };
        tween(t).to(1.0, { dt: 1.0 }, {
            easing: 'linear',
            progress: (start, end, current, ratio) => {
                current = lerp(start, end, ratio);

                let color = new Color();
                Color.lerp(color, this.color1, this.color2, current);
                this._spEffectBase.effectColor = color;
                return current;
            }
        }).to(1.0, { dt: 0.0 }, {
            easing: 'linear',
            progress: (start, end, current, ratio) => {
                current = lerp(start, end, ratio);

                let color = new Color();
                Color.lerp(color, this.color1, this.color2, current);
                this._spEffectBase.effectColor = color;
                return current;
            },
            onComplete: () => {
                this.tweenColor();
            }
        }).start();
    }

    update(deltaTime: number) {

    }
}

