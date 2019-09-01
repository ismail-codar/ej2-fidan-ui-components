import { LinearGauge, LinearGaugeModel } from "@syncfusion/ej2-lineargauge";

import { ComponentBase } from "../_base";

export const SfLinearGauge = (props: LinearGaugeModel & ComponentBase<LinearGauge>) => {
  const _view = <div>{props.children}</div>;

  let _component: LinearGauge = new LinearGauge(props);
    props._component = _component;
    props._view = _view;
    props && props.onInit && props.onInit(props);
    _component.appendTo(_view);

  return _view;
};
