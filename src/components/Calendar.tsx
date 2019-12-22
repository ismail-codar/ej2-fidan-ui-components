import { ComponentBase } from "../_base";
import { Calendar, CalendarModel } from "@syncfusion/ej2-calendars";

export const SfCalendar = (props: CalendarModel & ComponentBase<Calendar>) => {
  const _view = <div>{props.children}</div>;

  window.requestAnimationFrame(() => {
    let _component: Calendar = new Calendar(props);
    props._component = _component;
    _component.appendTo(_view);
    props && props.didMount && props.didMount(props);
  });

  return _view;
};
