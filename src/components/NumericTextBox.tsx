
import { NumericTextBox, NumericTextBoxModel } from "@syncfusion/ej2-inputs";
import { InputWithMessageProps } from "../_base"
    
import { setupComponentView } from '../_base';
    
export const SfNumericTextBox = (props: NumericTextBoxModel & InputWithMessageProps<NumericTextBox>) => {
  const _view = (<input
    type="text"
    id={props.id}
    name={props.name}
    required={props.required}
    placeholder={props.placeholder}
    value={props.inputValue()}
    data-msg-containerid={props.containerId}
  />);
  setupComponentView(_view, props, NumericTextBox);
  return _view;
};
