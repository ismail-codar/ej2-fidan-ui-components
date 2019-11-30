import { DatePicker, DatePickerModel } from "@syncfusion/ej2-calendars";

import { ComponentBase } from "../_base";

export const SfDatePicker = (props: DatePickerModel & ComponentBase<DatePicker>) => {
  const _view = <input type="text" />;

  window.requestAnimationFrame(() => {
    let _component: DatePicker = new DatePicker(props);
    _component.appendTo(_view);
    props && props.onInit && props.onInit(props);
  });

  return _view;
};
