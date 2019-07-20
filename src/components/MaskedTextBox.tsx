import { MaskedTextBox, MaskedTextBoxModel } from "@syncfusion/ej2-inputs";

import { ComponentBase } from "../_base";

export const SfMaskedTextBox = (props: MaskedTextBoxModel & ComponentBase) => {
  const _view = <div>{props.children}</div>;

  let _component: MaskedTextBox = new MaskedTextBox(props);
    _component.appendTo(_view);
    props && props.onInit && props.onInit(props);

  return _view;
};
