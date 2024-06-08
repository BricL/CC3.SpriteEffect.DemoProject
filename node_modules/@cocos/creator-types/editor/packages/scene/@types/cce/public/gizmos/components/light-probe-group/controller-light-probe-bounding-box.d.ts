import { Node, Vec3 } from 'cc';
import type { IControlMouseEvent } from '../../utils/defines';
import LightProbeEditModeListener from '../../utils/light-probe-edit-mode-listener';
import BoxController from '../../controller/box';
import type LightProbeGizmo from './gizmo-select';
import type { LightProbePositionGizmo } from './gizmo-select';
export default class LightProbeBoundingBoxController extends BoxController implements LightProbeEditModeListener {
    gizmo: LightProbeGizmo;
    _editable: boolean;
    private _boundingBoxScale;
    private _minPos;
    private _maxPos;
    private _startPos;
    private _editMode;
    get editMode(): boolean;
    private _gizmoEventListenerIndex;
    private _positionGizmo;
    set positionGizmo(positionGizmo: LightProbePositionGizmo | null);
    get positionGizmo(): LightProbePositionGizmo | null;
    constructor(rootNode: Node, gizmo: LightProbeGizmo);
    show(): void;
    recordStartPosition(): void;
    updateDataFromBBController(event: IControlMouseEvent): void;
    onShow(): void;
    onHide(): void;
    getBoundingBoxCenter(): Vec3;
    setBoundingBoxCenter(center: Vec3): void;
    lightProbeEditModeChanged(mode: boolean): void;
    boundingBoxEditModeChanged(mode: boolean): void;
}
//# sourceMappingURL=controller-light-probe-bounding-box.d.ts.map