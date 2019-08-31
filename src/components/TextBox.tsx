import { TextBox, TextBoxModel } from "@syncfusion/ej2-inputs";

import { ComponentBase } from "../_base";

export const SfTextBox = (props: TextBoxModel & ComponentBase<TextBox>) => {
  const _view = <div>{props.children}</div>;

  let _component: TextBox = new TextBox(props);
    _component.appendTo(_view);
    props.component = _component;
    props && props.onInit && props.onInit(props);

  return _view;
};
