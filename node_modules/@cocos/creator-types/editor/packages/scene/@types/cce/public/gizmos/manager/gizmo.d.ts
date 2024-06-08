import { Camera, Component, Node } from 'cc';
import { EventEmitter } from '@itharbors/structures';
import { IChangeNodeOptions } from '../../../../../@types/private';
import { TransformToolData, SnapConfigs, ISnapConfigData } from './transform-tool';
import GizmoBase from '../components/base/gizmo-select';
import { ISceneEvents } from '../../../3d/manager/scene-events-interface';
import { IRectSnapConfigData } from '../utils/rect-transform-snapping';
import LightProbeEditModeListener from '../utils/light-probe-edit-mode-listener';
import LightProbeGizmo from '../components/light-probe-group/gizmo-select';
import { NodeProbe } from '../components/light-probe-group/controller-light-probe';
import { TGizmoType } from './pool';
type IGizmoEventTable = {
    'init': {
        params: [];
        result: void;
    };
    'info-update': {
        params: [];
        result: void;
    };
    'node-selected': {
        params: [string[]];
        result: void;
    };
    'node-unselected': {
        params: [string[]];
        result: void;
    };
};
/**
 * gizmo 对象管理器
 * 负责创建、销毁、管理 Gizmo 实例
 */
declare class GizmoPoolManager extends EventEmitter<IGizmoEventTable> {
    private _gizmoPool;
    private _iconVisible;
    protected get iconVisible(): boolean;
    protected set iconVisible(bool: boolean);
    /**
     * 循环遍历 Gizmo 实例列表
     * @param type
     * @param name
     * @param handle
     * @returns
     */
    protected forEachInstanceList(type: TGizmoType, name: string, handle: (gizmo: GizmoBase) => void): void;
    /**
     * 清空所有 Gizmo
     */
    clearAllGizmos(): void;
    /**
     * 从一个类型创建出一个 Gizmo
     * @param type
     * @param name
     * @param target
     * @returns
     */
    createGizmoFromType(type: TGizmoType, name: string, target?: Component): GizmoBase | null;
    /**
     * 创建一个 Component Gizmo
     * @param name
     * @param target
     * @returns
     */
    createGizmo(name: string, target?: Component): GizmoBase | null;
    /**
     * 销毁 Gizmo，可能有一些东西需要彻底清除
     * @param gizmo
     */
    destroyGizmo(gizmo: GizmoBase): void;
    /**
     * 显示 Gizmo
     * @param component
     * @param focusCreateGizmo
     */
    showGizmo(type: TGizmoType, component: Component, focusCreateGizmo?: boolean): void;
    /**
     * 隐藏 Gizmo
     * @param gizmo
     */
    hideGizmo(gizmo: GizmoBase | null | undefined): void;
    /**
     * 删除 Gizmo
     * @param type
     * @param component
     */
    removeGizmo(type: TGizmoType, component: Component): void;
    /**
     * 显示 Component / Node 上的 Gizmo
     * @param node
     */
    showGizmoOfNode(type: TGizmoType, node: Node): void;
    /**
     * 删除 Component / Node 上的 Gizmo
     * @param type
     * @param node
     */
    removeGizmoOfNode(type: TGizmoType, node: Node): void;
    /**
     * 显示 Component / Node 上的 Gizmo
     * @param type
     * @param node
     */
    showAllGizmoOfNode(node: Node, recursive?: boolean): void;
    /**
     * 删除 Component / Node 上的 Gizmo
     * @param type
     * @param node
     */
    removeAllGizmoOfNode(node: Node, recursive?: boolean): void;
    on<A extends keyof IGizmoEventTable>(action: A, handle: (...args: IGizmoEventTable[A]['params']) => IGizmoEventTable[A]['result']): void;
    off<A extends keyof IGizmoEventTable>(action: A, handle: (...args: IGizmoEventTable[A]['params']) => IGizmoEventTable[A]['result']): void;
    once<A extends keyof IGizmoEventTable>(action: A, handle: (...args: IGizmoEventTable[A]['params']) => IGizmoEventTable[A]['result']): void;
}
/**
 * 管理 Transform Gizmo
 */
declare class TransformGizmoManager extends GizmoPoolManager {
    transformToolData: TransformToolData;
    get transformToolName(): import("./transform-tool").TransformToolDataToolNameType;
    set transformToolName(toolName: import("./transform-tool").TransformToolDataToolNameType);
    get coordinate(): import("./transform-tool").TransformToolDataCoordinateType;
    set coordinate(value: import("./transform-tool").TransformToolDataCoordinateType);
    get pivot(): import("./transform-tool").TransformToolDataPivotType;
    set pivot(value: import("./transform-tool").TransformToolDataPivotType);
    constructor();
    private onCameraControlModeChanged;
    protected init(): void;
    protected __listenEvents(): void;
    queryTransformSnapConfigs(): ISnapConfigData;
    setTransformSnapConfigs<K extends keyof SnapConfigs>(name: K, value: SnapConfigs[K]): void;
    onUpdate(deltaTime: number): void;
}
declare class SelectionGizmoManager extends TransformGizmoManager {
    private _selection;
    protected select(ids: string[]): void;
    protected unselect(ids: string[]): void;
    /**
     * 查询当前选中的节点列表
     */
    querySelectNodes(): Node[];
    protected getSelectionUUIDs(): string[];
    protected hasSelected(id: string): boolean;
    protected onNodeSelectionChanged(node: Node, selected: boolean): void;
}
export declare class GizmoManager extends SelectionGizmoManager implements ISceneEvents, LightProbeEditModeListener {
    sceneGizmoCamera: Camera;
    gizmoRootNode: Node;
    private _worldAxisController;
    get is2D(): boolean;
    set is2D(value: boolean);
    private saveRectSnapConfigs;
    private createSceneGizmo;
    private setSceneGizmoCameraRect;
    protected onNodeSelectionChanged(node: Node, selected: boolean): void;
    isIconGizmo3D(): boolean;
    setIconGizmo3D(value: boolean): void;
    queryIconGizmoSize(): number;
    setIconGizmoSize(size: number): void;
    queryToolsVisibility3d(): boolean;
    setToolsVisibility3d(value: boolean): void;
    queryRectSnappingConfigs(name?: keyof (IRectSnapConfigData)): number | boolean | IRectSnapConfigData;
    setRectSnappingConfigs(name: keyof (IRectSnapConfigData), value: any): void;
    init(): void;
    initFromConfig(): Promise<void>;
    saveConfig(): Promise<void>;
    lockGizmoTool(value: boolean): void;
    isGizmoToolLocked(): boolean;
    showSelectionRegion(left: number, right: number, top: number, bottom: number): void;
    hideSelectionRegion(): void;
    /**
     * 执行一个节点上所挂的 Gizmo 上的指定函数
     * 函数如果返回 false，这个函数的返回值则为 false
     * return false 代表希望阻止后续操作的流程
     *
     * @param node
     * @param funcName
     * @param params
     * @returns
     */
    callAllGizmoFuncOfNode<T extends keyof GizmoBase>(node: Node, funcName: T, ...params: Parameters<any>): boolean;
    onDimensionChanged(is2D: boolean): void;
    onMouseLeave(): void;
    onResize(): void;
    onSceneOpened(): void;
    onSceneClosed(): void;
    onNodeChanged(node: Node, opts: IChangeNodeOptions): void;
    onNodeAdded(node: Node): void;
    onNodeRemoved(node: Node): void;
    onComponentAdded(comp: Component): void;
    onComponentRemoved(comp: Component): void;
    /**
     * 存放探针编辑模式变化的监听器
     * 需要监听的 Gizmo 需要自身实现下面接口
     * 其它监听器需要从数组头部插入
     * @see LightProbeEditModeListener
     * 注册方式位于
     * @see registerLightProbeEditModeListener
     */
    _lightProbeEditModeListener: LightProbeEditModeListener[];
    private _lightProbeEditMode;
    private _lightProbeBoundingBoxEditMode;
    set lightProbeEditMode(value: boolean);
    get lightProbeEditMode(): boolean;
    set lightProbeBoundingBoxEditMode(value: boolean);
    get lightProbeBoundingBoxEditMode(): boolean;
    /**
     * 光照探针编辑模式改变，需要通知到GizmoOperation和LightProbeGizmo
     * 调用方在GeneralSceneManager的changeLightProbeEditMode方法中调用
     * @param mode
     */
    lightProbeEditModeChanged(mode: boolean): void;
    /**
     * 引擎更新了光照探针的数据，需要通知到 LightProbeGizmo
     * 探针插件里用到了这个接口
     */
    updateLightProbeInfo(): void;
    /**
     * 引擎更新了光照探针的数据，需要通知到 LightProbeGizmo
     * 探针插件里用到了这个接口
     */
    lightProbeInfoChanged(): void;
    /**
     * 包围盒编辑模式改变，需要通知到GizmoOperation和LightProbeGizmo
     * @param mode
     */
    boundingBoxEditModeChanged(mode: boolean): void;
    get globalSelectProbes(): NodeProbe[];
    registerLightProbeEditModeListener(listener: LightProbeEditModeListener): void;
    /**
     * 遍历所有正常显示的光照探针
     */
    walkAllLightProbeGizmoListener(callback: (e: LightProbeGizmo) => void): void;
    /**
     * 更新光照探针的四面体，需要通知到 MeshRenderer Gizmo
     * @returns
     */
    updateLightProbeInnerTetrahedron(): void;
    duplicateCurrentSelectedProbes(): void;
    removeCurrentSelectedProbes(): void;
    selectAllLightProbes(): void;
}
export declare const gizmoManager: GizmoManager;
export {};
//# sourceMappingURL=gizmo.d.ts.map