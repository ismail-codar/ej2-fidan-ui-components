import { ComponentBase } from "../_base";
import { DateRangePicker, DateRangePickerModel } from "@syncfusion/ej2-calendars";

export const SfDateRangePicker = (props: DateRangePickerModel & ComponentBase<DateRangePicker>) => {
  const _view = <input type="text" />;

  window.requestAnimationFrame(() => {
    let _component: DateRangePicker = new DateRangePicker(props);
    _component.appendTo(_view);
    props && props.onInit && props.onInit(props);
  });

  return _view;
};
