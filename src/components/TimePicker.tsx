import { TimePicker, TimePickerModel } from "@syncfusion/ej2-calendars";

import { ComponentBase } from "../_base";

export const SfTimePicker = (props: TimePickerModel & ComponentBase<TimePicker>) => {
  const _view = <input type="text" />;

  window.requestAnimationFrame(() => {
    let _component: TimePicker = new TimePicker(props);
    _component.appendTo(_view);
    props && props.onInit && props.onInit(props);
  });

  return _view;
};
