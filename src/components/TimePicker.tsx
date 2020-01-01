import { ComponentBase, setupComponentView } from "../_base";
import { TimePicker, TimePickerModel } from "@syncfusion/ej2-calendars";

export const SfTimePicker = (props: TimePickerModel & ComponentBase<TimePicker>) => {
  const _view = <input type="text" />;
  setupComponentView(_view, props, TimePicker);
  return _view;
};
