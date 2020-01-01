import { ComponentBase, setupComponentView } from "../_base";
import { Sparkline, SparklineModel } from "@syncfusion/ej2-charts";

export const SfSparkline = (props: SparklineModel & ComponentBase<Sparkline>) => {
  const _view = <div>{props.children}</div>;
  setupComponentView(_view, props, Sparkline);
  return _view;
};
