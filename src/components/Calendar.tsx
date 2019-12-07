import { ComponentBase } from "../_base";
import { Calendar, CalendarModel } from "@syncfusion/ej2-calendars";

export const SfCalendar = (props: CalendarModel & ComponentBase<Calendar>) => {
  const _view = <div>{props.children}</div>;

  window.requestAnimationFrame(() => {
    let _component: Calendar = new Calendar(props);
    _component.appendTo(_view);
    props && props.onInit && props.onInit(props);
  });

  return _view;
};
