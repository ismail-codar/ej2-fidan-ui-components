import { ComponentBase, setupComponentView } from "../_base";
import { PivotView, PivotViewModel } from "@syncfusion/ej2-pivotview";

export const SfPivotView = (props: PivotViewModel & ComponentBase<PivotView>) => {
  const _view = <div>{props.children}</div>;
  setupComponentView(_view, props, PivotView);
  return _view;
};
