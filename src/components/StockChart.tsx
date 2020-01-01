import { ComponentBase, setupComponentView } from "../_base";
import { StockChart, StockChartModel } from "@syncfusion/ej2-charts";

export const SfStockChart = (props: StockChartModel & ComponentBase<StockChart>) => {
  const _view = <div>{props.children}</div>;
  setupComponentView(_view, props, StockChart);
  return _view;
};
