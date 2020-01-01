
import { TextBox, TextBoxModel } from "@syncfusion/ej2-inputs";
import { InputWithMessageProps } from "../_base"
    
import { setupComponentView } from '../_base';
    
export const SfTextBox = (props: TextBoxModel & InputWithMessageProps<TextBox>) => {
  const _view = (<input
    type="text"
    id={props.id}
    name={props.name}
    required={props.required}
    placeholder={props.placeholder}
    value={props.inputValue()}
    data-msg-containerid={props.containerId}
  />);
  setupComponentView(_view, props, TextBox);
  return _view;
};
