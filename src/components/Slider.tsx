import { ComponentBase } from "../_base";
import { Slider, SliderModel } from "@syncfusion/ej2-inputs";

export const SfSlider = (props: SliderModel & ComponentBase<Slider>) => {
  const _view = <div>{props.children}</div>;

  let _component: Slider = new Slider(props);
    props._component = _component;
    props._view = _view;
    _component.appendTo(_view);
    props && props.onInit && props.onInit(props);

  return _view;
};
