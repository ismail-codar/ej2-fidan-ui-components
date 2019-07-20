import { Schedule, ScheduleModel } from "@syncfusion/ej2-schedule";

import { ComponentBase } from "../_base";

export const SfSchedule = (props: ScheduleModel & ComponentBase) => {
  const _view = <div>{props.children}</div>;

  let _component: Schedule = new Schedule(props);
    _component.appendTo(_view);
    props && props.onInit && props.onInit(props);

  return _view;
};
