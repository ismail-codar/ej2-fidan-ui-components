import { ComponentBase, setupComponentView } from "../_base";
import { Gantt, GanttModel } from "@syncfusion/ej2-gantt";

export const SfGantt = (props: GanttModel & ComponentBase<Gantt>) => {
  const _view = <div>{props.children}</div>;
  setupComponentView(_view, props, Gantt);
  return _view;
};
