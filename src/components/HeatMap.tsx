import { ComponentBase } from "../_base";
import { HeatMap, HeatMapModel } from "@syncfusion/ej2-heatmap";

export const SfHeatMap = (props: HeatMapModel & ComponentBase<HeatMap>) => {
  const _view = <div>{props.children}</div>;

  let _component: HeatMap = new HeatMap(props);
    props._component = _component;
    props._view = _view;
    _component.appendTo(_view);
    props && props.didMount && props.didMount(props);

  return _view;
};
