import { ComponentBase, setupComponentView } from "../_base";
import { LinearGauge, LinearGaugeModel } from "@syncfusion/ej2-lineargauge";

export const SfLinearGauge = (props: LinearGaugeModel & ComponentBase<LinearGauge>) => {
  const _view = <div>{props.children}</div>;
  setupComponentView(_view, props, LinearGauge);
  return _view;
};
