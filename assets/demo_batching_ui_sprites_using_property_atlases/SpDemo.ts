import { _decorator, Component, Input, input, KeyCode, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('SpDemo')
export class SpDemo extends Component {
    @property({ type: Node, tooltip: '指定Sprite节点' })
    public sp000: Node | null = null;
    @property({ type: Node, tooltip: '指定Sprite节点' })
    public sp001: Node | null = null;
    @property({ type: Node, tooltip: '指定Sprite节点' })
    public sp002: Node | null = null;

    private _idx = 2;

    start() {
        input.on(Input.EventType.KEY_DOWN, (event) => {
            if (event.keyCode === KeyCode.KEY_A) {
                this._idx = (this._idx + 1) % 3;

                if (this._idx === 0) {
                    this.sp000!.active = true;
                    this.sp001!.active = false;
                    this.sp002!.active = false;
                } else if (this._idx === 1) {
                    this.sp000!.active = true;
                    this.sp001!.active = true;
                    this.sp002!.active = false;
                } else {
                    this.sp000!.active = true;
                    this.sp001!.active = true;
                    this.sp002!.active = true;
                }
            }
        });
    }

    update(deltaTime: number) {

    }
}


