import { Slider, SliderModel } from "@syncfusion/ej2-inputs";

import { ComponentBase } from "../_base";

export const SfSlider = (props: SliderModel & ComponentBase<Slider>) => {
  const _view = <div>{props.children}</div>;

  let _component: Slider = new Slider(props);
    _component.appendTo(_view);
    props.component = _component;
    props && props.onInit && props.onInit(props);

  return _view;
};