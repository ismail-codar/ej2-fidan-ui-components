import { Chart, ChartModel } from "@syncfusion/ej2-charts/dist/es6/ej2-charts.es5.js"
import {
  AreaSeries,
  DateTime,
  Legend
} from "@syncfusion/ej2-charts/dist/es6/ej2-charts.es2015.js";
Chart.Inject(AreaSeries, DateTime, Legend);;

import { ComponentBase } from "../_base";

export const SfChart = (props: ChartModel & ComponentBase<Chart>) => {
  const _view = <div>{props.children}</div>;

  let _component: Chart = new Chart(props);
    props._component = _component;
    props._view = _view;
    _component.appendTo(_view);
    props && props.onInit && props.onInit(props);

  return _view;
};
