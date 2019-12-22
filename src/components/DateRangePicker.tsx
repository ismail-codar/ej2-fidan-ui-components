import { ComponentBase } from "../_base";
import { DateRangePicker, DateRangePickerModel } from "@syncfusion/ej2-calendars";

export const SfDateRangePicker = (props: DateRangePickerModel & ComponentBase<DateRangePicker>) => {
  const _view = <input type="text" />;

  window.requestAnimationFrame(() => {
    let _component: DateRangePicker = new DateRangePicker(props);
    props._component = _component;
    _component.appendTo(_view);
    props && props.didMount && props.didMount(props);
  });

  return _view;
};
