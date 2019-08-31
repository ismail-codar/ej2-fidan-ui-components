import { Gantt, GanttModel } from "@syncfusion/ej2-gantt";

import { ComponentBase } from "../_base";

export const SfGantt = (props: GanttModel & ComponentBase<Gantt>) => {
  const _view = <div>{props.children}</div>;

  let _component: Gantt = new Gantt(props);
    _component.appendTo(_view);
    props.component = _component;
    props && props.onInit && props.onInit(props);

  return _view;
};
