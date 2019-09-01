import { StockChart, StockChartModel } from "@syncfusion/ej2-charts";

import { ComponentBase } from "../_base";

export const SfStockChart = (props: StockChartModel & ComponentBase<StockChart>) => {
  const _view = <div>{props.children}</div>;

  let _component: StockChart = new StockChart(props);
    props._component = _component;
    props._view = _view;
    props && props.onInit && props.onInit(props);
    _component.appendTo(_view);

  return _view;
};
