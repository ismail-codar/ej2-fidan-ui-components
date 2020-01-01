import { ComponentBase, setupComponentView } from "../_base";
import { Smithchart, SmithchartModel } from "@syncfusion/ej2-charts";

export const SfSmithchart = (props: SmithchartModel & ComponentBase<Smithchart>) => {
  const _view = <div>{props.children}</div>;
  setupComponentView(_view, props, Smithchart);
  return _view;
};
