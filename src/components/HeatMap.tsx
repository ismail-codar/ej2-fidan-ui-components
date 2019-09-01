import { HeatMap, HeatMapModel } from "@syncfusion/ej2-heatmap";

import { ComponentBase } from "../_base";

export const SfHeatMap = (props: HeatMapModel & ComponentBase<HeatMap>) => {
  const _view = <div>{props.children}</div>;

  let _component: HeatMap = new HeatMap(props);
    props._component = _component;
    props._view = _view;
    props && props.onInit && props.onInit(props);
    _component.appendTo(_view);

  return _view;
};
