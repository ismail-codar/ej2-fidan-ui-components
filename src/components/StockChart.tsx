import { StockChart, StockChartModel } from "@syncfusion/ej2-charts";

import { ComponentBase } from "../_base";

export const SfStockChart = (props: StockChartModel & ComponentBase) => {
  const _view = <div>{props.children}</div>;

  let _component: StockChart = new StockChart(props);
    _component.appendTo(_view);
    props && props.onInit && props.onInit(props);

  return _view;
};
