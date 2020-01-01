import { ComponentBase, setupComponentView } from "../_base";
import { Calendar, CalendarModel } from "@syncfusion/ej2-calendars";

export const SfCalendar = (props: CalendarModel & ComponentBase<Calendar>) => {
  const _view = <div>{props.children}</div>;
  setupComponentView(_view, props, Calendar);
  return _view;
};
