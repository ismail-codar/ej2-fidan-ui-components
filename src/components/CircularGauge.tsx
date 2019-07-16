import { CircularGauge, CircularGaugeModel } from "@syncfusion/ej2-circulargauge";

import { ComponentBase } from "../_base";

export const SfCircularGauge = (props: CircularGaugeModel & ComponentBase) => {
  const _view = <div>{props.children}</div>;

  let _component: CircularGauge = new CircularGauge(props);
    _component.appendTo(_view);
    props && props.onInit && props.onInit(props);

  return _view;
};
