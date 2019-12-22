import { ComponentBase } from "../_base";
import { DateTimePicker, DateTimePickerModel } from "@syncfusion/ej2-calendars";

export const SfDateTimePicker = (props: DateTimePickerModel & ComponentBase<DateTimePicker>) => {
  const _view = <input type="text" />;

  window.requestAnimationFrame(() => {
    let _component: DateTimePicker = new DateTimePicker(props);
    props._component = _component;
    _component.appendTo(_view);
    props && props.didMount && props.didMount(props);
  });

  return _view;
};
