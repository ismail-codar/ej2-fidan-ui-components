import { TextBox, TextBoxModel } from "@syncfusion/ej2-inputs";

import { ComponentBase } from "../_base";

export const SfTextBox = (props: TextBoxModel & ComponentBase<TextBox>) => {
  const _view = <div>{props.children}</div>;

  let _component: TextBox = new TextBox(props);
    props._component = _component;
    props._view = _view;
    props && props.onInit && props.onInit(props);
    _component.appendTo(_view);

  return _view;
};
