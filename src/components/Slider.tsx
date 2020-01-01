import { ComponentBase, setupComponentView } from "../_base";
import { Slider, SliderModel } from "@syncfusion/ej2-inputs";

export const SfSlider = (props: SliderModel & ComponentBase<Slider>) => {
  const _view = <div>{props.children}</div>;
  setupComponentView(_view, props, Slider);
  return _view;
};
