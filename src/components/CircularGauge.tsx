import { ComponentBase, setupComponentView } from "../_base";
import { CircularGauge, CircularGaugeModel } from "@syncfusion/ej2-circulargauge";

export const SfCircularGauge = (props: CircularGaugeModel & ComponentBase<CircularGauge>) => {
  const _view = <div>{props.children}</div>;
  setupComponentView(_view, props, CircularGauge);
  return _view;
};
