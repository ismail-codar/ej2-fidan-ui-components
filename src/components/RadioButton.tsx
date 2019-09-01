import { RadioButton, RadioButtonModel } from "@syncfusion/ej2-buttons";

import { ComponentBase } from "../_base";

export const SfRadioButton = (props: RadioButtonModel & ComponentBase<RadioButton>) => {
  const _view = <input type="radio" id={props.id} />;

  window.requestAnimationFrame(() => {
    let _component: RadioButton = new RadioButton(props);
    _component.appendTo(_view);
    props && props.onInit && props.onInit(props);
  });

  return _view;
};
