import { ComponentBase, setupComponentView } from "../_base";
import { DateRangePicker, DateRangePickerModel } from "@syncfusion/ej2-calendars";

export const SfDateRangePicker = (props: DateRangePickerModel & ComponentBase<DateRangePicker>) => {
  const _view = <input type="text" />;
  setupComponentView(_view, props, DateRangePicker);
  return _view;
};
