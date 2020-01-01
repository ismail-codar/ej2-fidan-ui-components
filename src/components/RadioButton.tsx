
import { RadioButton, RadioButtonModel } from "@syncfusion/ej2-buttons";
import { InputWithMessageProps } from "../_base"
    
import { setupComponentView } from '../_base';
    
export const SfRadioButton = (props: RadioButtonModel & InputWithMessageProps<RadioButton>) => {
  const _view = (<input
    type="radio"
    id={props.id}
    name={props.name}
    required={props.required}
    placeholder={props.placeholder}
    value={props.inputValue()}
    data-msg-containerid={props.containerId}
  />);
  setupComponentView(_view, props, RadioButton);
  return _view;
};
