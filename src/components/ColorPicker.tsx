import { ColorPicker, ColorPickerModel } from "@syncfusion/ej2-inputs";

import { ComponentBase } from "../_base";

export const SfColorPicker = (props: ColorPickerModel & ComponentBase) => {
  const _view = <div />;

  window.requestAnimationFrame(() => {
    let _component: ColorPicker = new ColorPicker(props);
    _component.appendTo(_view);
    props && props.onInit && props.onInit(props);
  });

  return _view;
};
