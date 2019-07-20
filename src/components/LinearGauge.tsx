import { LinearGauge, LinearGaugeModel } from "@syncfusion/ej2-lineargauge";

import { ComponentBase } from "../_base";

export const SfLinearGauge = (props: LinearGaugeModel & ComponentBase) => {
  const _view = <div>{props.children}</div>;

  let _component: LinearGauge = new LinearGauge(props);
    _component.appendTo(_view);
    props && props.onInit && props.onInit(props);

  return _view;
};
