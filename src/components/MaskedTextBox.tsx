import { MaskedTextBox, MaskedTextBoxModel } from "@syncfusion/ej2-inputs";

import { ComponentBase } from "../_base";

export const SfMaskedTextBox = (props: MaskedTextBoxModel & ComponentBase<MaskedTextBox>) => {
  const _view = <div>{props.children}</div>;

  let _component: MaskedTextBox = new MaskedTextBox(props);
    props._component = _component;
    props._view = _view;
    props && props.onInit && props.onInit(props);
    _component.appendTo(_view);

  return _view;
};
