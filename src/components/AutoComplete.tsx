
import { AutoComplete, AutoCompleteModel } from "@syncfusion/ej2-dropdowns";
import { InputWithMessageProps } from "../_base"
    
import { setupComponentView } from '../_base';
    
export const SfAutoComplete = (props: AutoCompleteModel & InputWithMessageProps<AutoComplete>) => {
  const _view = (<input
    type="text"
    id={props.id}
    name={props.name}
    required={props.required}
    placeholder={props.placeholder}
    value={props.inputValue()}
    data-msg-containerid={props.containerId}
  />);
  setupComponentView(_view, props, AutoComplete);
  return _view;
};
