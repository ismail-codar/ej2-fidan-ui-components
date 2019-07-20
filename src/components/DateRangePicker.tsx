import { DateRangePicker, DateRangePickerModel } from "@syncfusion/ej2-calendars";

import { ComponentBase } from "../_base";

export const SfDateRangePicker = (props: DateRangePickerModel & ComponentBase) => {
  const _view = <input type="text" />;

  window.requestAnimationFrame(() => {
    let _component: DateRangePicker = new DateRangePicker(props);
    _component.appendTo(_view);
    props && props.onInit && props.onInit(props);
  });

  return _view;
};
