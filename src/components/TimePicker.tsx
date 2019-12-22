import { ComponentBase } from "../_base";
import { TimePicker, TimePickerModel } from "@syncfusion/ej2-calendars";

export const SfTimePicker = (props: TimePickerModel & ComponentBase<TimePicker>) => {
  const _view = <input type="text" />;

  window.requestAnimationFrame(() => {
    let _component: TimePicker = new TimePicker(props);
    props._component = _component;
    _component.appendTo(_view);
    props && props.didMount && props.didMount(props);
  });

  return _view;
};
