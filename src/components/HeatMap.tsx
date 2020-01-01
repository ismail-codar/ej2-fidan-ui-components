import { ComponentBase, setupComponentView } from "../_base";
import { HeatMap, HeatMapModel } from "@syncfusion/ej2-heatmap";

export const SfHeatMap = (props: HeatMapModel & ComponentBase<HeatMap>) => {
  const _view = <div>{props.children}</div>;
  setupComponentView(_view, props, HeatMap);
  return _view;
};
