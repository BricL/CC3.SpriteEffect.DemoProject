import { _decorator, Component, director, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('AllEffectDemo')
export class AllEffectDemo extends Component {
    public onClikcBlureButton() {
        console.log("onClikcBlureButton");
        director.loadScene("gaussian_blur");
    }

    public onClikcColorButton() {
        director.loadScene("batching_compare");
    }

    public onClickTransitionButton() {
        director.loadScene("transition");
    }
}

