import { ComponentBase } from "../_base";
import { TextBox, TextBoxModel } from "@syncfusion/ej2-inputs";

export const SfTextBox = (props: TextBoxModel & ComponentBase<TextBox>) => {
  const _view = <input type="text" id={props.id} />;

  window.requestAnimationFrame(() => {
    let _component: TextBox = new TextBox(props);
    _component.appendTo(_view);
    props && props.onInit && props.onInit(props);
  });

  return _view;
};
