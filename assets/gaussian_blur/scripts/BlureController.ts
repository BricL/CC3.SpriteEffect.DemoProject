import { _decorator, Component, find, log, Node, Slider } from 'cc';
import { SpriteEffectGaussianBlur } from '../../../extensions/sprite_effect/source/static/comp/SpriteEffectGaussianBlur';
const { ccclass, property } = _decorator;

@ccclass('BlureController')
export class BlureController extends Component {
    public callback(slider: Slider, customEventData: string) {
        this.apply(this.node, slider.progress);
    }

    public apply(node: Node, val: number) {
        node.children.forEach((child) => {
            const comp = child.getComponent(SpriteEffectGaussianBlur);
            if (comp) {
                comp.blurFactor = val;
            } else {
                this.apply(child, val);
            }
        });
    }
}
