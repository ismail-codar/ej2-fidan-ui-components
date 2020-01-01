import { ComponentBase, setupComponentView } from "../_base";
import { Chart, ChartModel } from "@syncfusion/ej2-charts/dist/es6/ej2-charts.es5.js";
import {
  AreaSeries,
  DateTime,
  Legend
} from "@syncfusion/ej2-charts/dist/es6/ej2-charts.es2015.js";
Chart.Inject(AreaSeries, DateTime, Legend);
import { setupComponentView } from '../_base';
    
export const SfChart = (props: ChartModel & ComponentBase<Chart>) => {
  const _view = <div>{props.children}</div>;
  setupComponentView(_view, props, Chart);
  return _view;
};
