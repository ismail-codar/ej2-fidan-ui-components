import { ComponentBase, setupComponentView } from "../_base";
import { Schedule, ScheduleModel } from "@syncfusion/ej2-schedule";

export const SfSchedule = (props: ScheduleModel & ComponentBase<Schedule>) => {
  const _view = <div>{props.children}</div>;
  setupComponentView(_view, props, Schedule);
  return _view;
};
