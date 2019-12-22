import { ComponentBase } from "../_base";
import { StockChart, StockChartModel } from "@syncfusion/ej2-charts";

export const SfStockChart = (props: StockChartModel & ComponentBase<StockChart>) => {
  const _view = <div>{props.children}</div>;

  let _component: StockChart = new StockChart(props);
    props._component = _component;
    props._view = _view;
    _component.appendTo(_view);
    props && props.didMount && props.didMount(props);

  return _view;
};
