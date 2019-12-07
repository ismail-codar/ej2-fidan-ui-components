import { ComponentBase } from "../_base";
import { MaskedTextBox, MaskedTextBoxModel } from "@syncfusion/ej2-inputs";

export const SfMaskedTextBox = (props: MaskedTextBoxModel & ComponentBase<MaskedTextBox>) => {
  const _view = <div>{props.children}</div>;

  let _component: MaskedTextBox = new MaskedTextBox(props);
    props._component = _component;
    props._view = _view;
    _component.appendTo(_view);
    props && props.onInit && props.onInit(props);

  return _view;
};
