import { MaskedTextBox, MaskedTextBoxModel } from "@syncfusion/ej2-inputs";

import { ComponentBase } from "../_base";

export const SfMaskedTextBox = (props: MaskedTextBoxModel & ComponentBase<MaskedTextBox>) => {
  const _view = <div>{props.children}</div>;

  let _component: MaskedTextBox = new MaskedTextBox(props);
    _component.appendTo(_view);
    props.component = _component;
    props && props.onInit && props.onInit(props);

  return _view;
};
