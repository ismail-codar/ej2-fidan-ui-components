import { ComponentBase } from "../_base";
import { Gantt, GanttModel } from "@syncfusion/ej2-gantt";

export const SfGantt = (props: GanttModel & ComponentBase<Gantt>) => {
  const _view = <div>{props.children}</div>;

  let _component: Gantt = new Gantt(props);
    props._component = _component;
    props._view = _view;
    _component.appendTo(_view);
    props && props.onInit && props.onInit(props);

  return _view;
};
