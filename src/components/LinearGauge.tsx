import { ComponentBase } from "../_base";
import { LinearGauge, LinearGaugeModel } from "@syncfusion/ej2-lineargauge";

export const SfLinearGauge = (props: LinearGaugeModel & ComponentBase<LinearGauge>) => {
  const _view = <div>{props.children}</div>;

  let _component: LinearGauge = new LinearGauge(props);
    props._component = _component;
    props._view = _view;
    _component.appendTo(_view);
    props && props.didMount && props.didMount(props);

  return _view;
};
