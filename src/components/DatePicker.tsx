import { ComponentBase } from "../_base";
import { DatePicker, DatePickerModel } from "@syncfusion/ej2-calendars";

export const SfDatePicker = (props: DatePickerModel & ComponentBase<DatePicker>) => {
  const _view = <input type="text" />;

  window.requestAnimationFrame(() => {
    let _component: DatePicker = new DatePicker(props);
    props._component = _component;
    _component.appendTo(_view);
    props && props.didMount && props.didMount(props);
  });

  return _view;
};
