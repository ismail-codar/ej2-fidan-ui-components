import { ComponentBase } from "../_base";
import { DashboardLayout, DashboardLayoutModel } from "@syncfusion/ej2-layouts";

export const SfDashboardLayout = (props: DashboardLayoutModel & ComponentBase<DashboardLayout>) => {
  const _view = <div>{props.children}</div>;

  window.requestAnimationFrame(() => {
    let _component: DashboardLayout = new DashboardLayout(props);
    props._component = _component;
    _component.appendTo(_view);
    props && props.didMount && props.didMount(props);
  });

  return _view;
};
