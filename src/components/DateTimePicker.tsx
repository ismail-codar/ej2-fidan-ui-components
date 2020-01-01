import { ComponentBase, setupComponentView } from "../_base";
import { DateTimePicker, DateTimePickerModel } from "@syncfusion/ej2-calendars";

export const SfDateTimePicker = (props: DateTimePickerModel & ComponentBase<DateTimePicker>) => {
  const _view = <input type="text" />;
  setupComponentView(_view, props, DateTimePicker);
  return _view;
};
