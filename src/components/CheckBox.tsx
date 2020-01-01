
import { CheckBox, CheckBoxModel } from "@syncfusion/ej2-buttons";
import { InputWithMessageProps } from "../_base"
    
import { setupComponentView } from '../_base';
    
export const SfCheckBox = (props: CheckBoxModel & InputWithMessageProps<CheckBox>) => {
  const _view = (<input
    type="checkbox"
    id={props.id}
    name={props.name}
    required={props.required}
    placeholder={props.placeholder}
    value={props.inputValue()}
    data-msg-containerid={props.containerId}
  />);
  setupComponentView(_view, props, CheckBox);
  return _view;
};
