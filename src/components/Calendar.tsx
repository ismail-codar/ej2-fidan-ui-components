import { Calendar, CalendarModel } from "@syncfusion/ej2-calendars";

import { ComponentBase } from "../_base";

export const SfCalendar = (props: CalendarModel & ComponentBase) => {
  const _view = <div>{props.children}</div>;

  window.requestAnimationFrame(() => {
    let _component: Calendar = new Calendar(props);
    _component.appendTo(_view);
    props && props.onInit && props.onInit(props);
  });

  return _view;
};
