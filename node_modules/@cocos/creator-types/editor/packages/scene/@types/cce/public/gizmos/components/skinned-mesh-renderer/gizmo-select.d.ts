import { SkinningModelComponent } from 'cc';
import LightProbeEditModeListener from '../../utils/light-probe-edit-mode-listener';
import { SelectGizmo } from '../base';
import LightProbeTetrahedronController from '../light-probe-group/controller-light-probe-tetrahedron';
declare class SkinningModelComponentGizmo extends SelectGizmo<SkinningModelComponent> implements LightProbeEditModeListener {
    private _controller;
    tetrahedronController: LightProbeTetrahedronController;
    init(): void;
    lightProbeInfoChanged(): void;
    onShow(): void;
    onHide(): void;
    createController(): void;
    updateControllerTransform(): void;
    updateControllerData(): void;
    onTargetUpdate(): void;
    onNodeChanged(): void;
    onUpdate(): void;
}
export default SkinningModelComponentGizmo;
//# sourceMappingURL=gizmo-select.d.ts.map