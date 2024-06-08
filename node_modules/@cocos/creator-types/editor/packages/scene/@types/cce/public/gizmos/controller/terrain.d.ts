import { Node } from 'cc';
import ControllerBase from './base';
import type { IControlMouseEvent } from '../utils/defines';
declare class TerrainController extends ControllerBase {
    private _quadNode;
    private _quadMR;
    private _size;
    shape: Node;
    constructor(rootNode: Node, opts?: any);
    initShape(opts: any): void;
    onMouseDown(event: IControlMouseEvent): void;
    onMouseMove(event: IControlMouseEvent): void;
    onMouseUp(event: IControlMouseEvent): void;
    onHoverIn(event: IControlMouseEvent): void;
    onHoverOut(event: IControlMouseEvent): void;
    onShow(): void;
    onHide(): void;
    updateSize(width: number, height: number): void;
}
export default TerrainController;
//# sourceMappingURL=terrain.d.ts.map