import { ComponentBase, setupComponentView } from "../_base";
import { DatePicker, DatePickerModel } from "@syncfusion/ej2-calendars";

export const SfDatePicker = (props: DatePickerModel & ComponentBase<DatePicker>) => {
  const _view = <input type="text" />;
  setupComponentView(_view, props, DatePicker);
  return _view;
};
