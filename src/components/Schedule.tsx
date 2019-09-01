import { Schedule, ScheduleModel } from "@syncfusion/ej2-schedule";

import { ComponentBase } from "../_base";

export const SfSchedule = (props: ScheduleModel & ComponentBase<Schedule>) => {
  const _view = <div>{props.children}</div>;

  let _component: Schedule = new Schedule(props);
    props._component = _component;
    props._view = _view;
    props && props.onInit && props.onInit(props);
    _component.appendTo(_view);

  return _view;
};
