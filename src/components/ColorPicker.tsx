import { ComponentBase } from "../_base";
import { ColorPicker, ColorPickerModel } from "@syncfusion/ej2-inputs";

export const SfColorPicker = (props: ColorPickerModel & ComponentBase<ColorPicker>) => {
  const _view = <div>{props.children}</div>;

  window.requestAnimationFrame(() => {
    let _component: ColorPicker = new ColorPicker(props);
    props._component = _component;
    _component.appendTo(_view);
    props && props.didMount && props.didMount(props);
  });

  return _view;
};
