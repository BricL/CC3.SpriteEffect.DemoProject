/// <reference types="node" />
import { LightProbeGroup, Node } from 'cc';
import GizmoOperationEventListener from '../../utils/gizmo-operation-event-listener';
import LightProbeEditModeListener from '../../utils/light-probe-edit-mode-listener';
import { IChangeNodeOptions, ISceneMouseEvent } from '../../../../../../@types/private';
import type { IControlMouseEvent } from '../../utils/defines';
import SimpleSet from '../../utils/set-util';
import PositionGizmo from '../../node/position';
import { SelectGizmo } from '../base';
import LightProbeController from './controller-light-probe';
import LightProbeBoundingBoxController from './controller-light-probe-bounding-box';
export default class LightProbeGizmo extends SelectGizmo<LightProbeGroup> implements LightProbeEditModeListener, GizmoOperationEventListener {
    shouldRegisterGizmoOperationEvent: boolean;
    _controller: LightProbeController;
    _originTarget: LightProbeGroup | null;
    _boundingBoxController: LightProbeBoundingBoxController;
    _minPosPath: string | null;
    _maxPosPath: string | null;
    _lightProbeRoot?: Node;
    _boundingBoxRoot?: Node;
    _isInitialized: boolean;
    private _positionGizmo;
    get boundingBoxController(): LightProbeBoundingBoxController;
    protected init(): void;
    createController(gizmoRoot: Node): void;
    protected onShow(): void;
    protected onHide(): void;
    onNodeChanged(event: IChangeNodeOptions): void;
    private updateBoundingBoxController;
    debounceUpdateController: NodeJS.Timeout | null;
    debounceUpdateLines: NodeJS.Timeout | null;
    private afterPositionGizmoSetPositions;
    _checkShouldSkipUpdateLightProbeController(event?: IChangeNodeOptions): boolean;
    protected onTargetUpdate(): void;
    onBBControllerMouseDown(event: IControlMouseEvent): void;
    onBBControllerMouseMove(event: IControlMouseEvent): void;
    onBBControllerMouseUp(event: IControlMouseEvent): void;
    updateNodeTransformInfo(node: Node): void;
    lightProbeEditModeChanged(mode: boolean): void;
    boundingBoxEditModeChanged(mode: boolean): void;
    lightProbeInfoChanged(): void;
    checkCurrentTargetPointingSelf(): boolean;
    duplicateCurrentSelectedProbes(): SimpleSet<Node>;
    deleteCurrentSelectedProbes(): SimpleSet<Node>;
    select(nodes: SimpleSet<Node>): void;
    selectAll(): void;
    unselect(nodes: SimpleSet<Node>): void;
    unselectAll(): void;
    onNotGizmoMouseDown(event: ISceneMouseEvent): void;
    onNotGizmoMouseMove(event: ISceneMouseEvent): void;
    onNotGizmoMouseUp(event: ISceneMouseEvent): void;
    shouldEmitNodes(): SimpleSet<string>;
    currentSelectedNodes(): SimpleSet<Node>;
}
/**
 *
 */
export declare class LightProbePositionGizmo extends PositionGizmo {
    private __nodes;
    disableUndo: boolean;
    set nodes(nodes: Node[]);
    get nodes(): Node[];
}
//# sourceMappingURL=gizmo-select.d.ts.map