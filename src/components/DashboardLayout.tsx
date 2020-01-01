import { ComponentBase, setupComponentView } from "../_base";
import { DashboardLayout, DashboardLayoutModel } from "@syncfusion/ej2-layouts";

export const SfDashboardLayout = (props: DashboardLayoutModel & ComponentBase<DashboardLayout>) => {
  const _view = <div>{props.children}</div>;
  setupComponentView(_view, props, DashboardLayout);
  return _view;
};
