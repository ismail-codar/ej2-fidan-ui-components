import { CircularGauge, CircularGaugeModel } from "@syncfusion/ej2-circulargauge";

import { ComponentBase } from "../_base";

export const SfCircularGauge = (props: CircularGaugeModel & ComponentBase<CircularGauge>) => {
  const _view = <div>{props.children}</div>;

  let _component: CircularGauge = new CircularGauge(props);
    props._component = _component;
    props._view = _view;
    props && props.onInit && props.onInit(props);
    _component.appendTo(_view);

  return _view;
};
