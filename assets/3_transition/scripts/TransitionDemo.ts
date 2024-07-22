import { _decorator, Component, director, Node, Slider } from 'cc';
import { SpriteEffectTransition } from '../../../extensions/sprite_effect/source/static/comp/SpriteEffectTransition';
const { ccclass, property } = _decorator;

@ccclass('TransitionDemo')
export class TransitionDemo extends Component {
    @property(SpriteEffectTransition)
    public spH: SpriteEffectTransition = null!;

    @property(SpriteEffectTransition)
    public spV: SpriteEffectTransition = null!;

    public onBackButton() {
        director.loadScene("all_effect");
    }

    public onSliderOffsetCallback(slider: Slider, customEventData: string) {
        this.spH.offset = this.spV.offset = slider.progress;
    }

    public onSliderSoftCallback(slider: Slider, customEventData: string) {
        this.spH.soft = this.spV.soft = slider.progress;
    }
}

