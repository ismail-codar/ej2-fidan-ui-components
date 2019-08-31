import { HeatMap, HeatMapModel } from "@syncfusion/ej2-heatmap";

import { ComponentBase } from "../_base";

export const SfHeatMap = (props: HeatMapModel & ComponentBase<HeatMap>) => {
  const _view = <div>{props.children}</div>;

  let _component: HeatMap = new HeatMap(props);
    _component.appendTo(_view);
    props.component = _component;
    props && props.onInit && props.onInit(props);

  return _view;
};
