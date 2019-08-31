import { LinearGauge, LinearGaugeModel } from "@syncfusion/ej2-lineargauge";

import { ComponentBase } from "../_base";

export const SfLinearGauge = (props: LinearGaugeModel & ComponentBase<LinearGauge>) => {
  const _view = <div>{props.children}</div>;

  let _component: LinearGauge = new LinearGauge(props);
    _component.appendTo(_view);
    props.component = _component;
    props && props.onInit && props.onInit(props);

  return _view;
};
