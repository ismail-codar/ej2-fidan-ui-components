import { ComponentBase } from "../_base";
import { DashboardLayout, DashboardLayoutModel } from "@syncfusion/ej2-layouts";

export const SfDashboardLayout = (props: DashboardLayoutModel & ComponentBase<DashboardLayout>) => {
  const _view = <div>{props.children}</div>;

  window.requestAnimationFrame(() => {
    let _component: DashboardLayout = new DashboardLayout(props);
    _component.appendTo(_view);
    props && props.onInit && props.onInit(props);
  });

  return _view;
};
