
import { MultiSelect, MultiSelectModel } from "@syncfusion/ej2-dropdowns";
import { InputWithMessageProps } from "../_base"
    
import { setupComponentView } from '../_base';
    
export const SfMultiSelect = (props: MultiSelectModel & InputWithMessageProps<MultiSelect>) => {
  const _view = (<input
    type="text"
    id={props.id}
    name={props.name}
    required={props.required}
    placeholder={props.placeholder}
    value={props.inputValue()}
    data-msg-containerid={props.containerId}
  />);
  setupComponentView(_view, props, MultiSelect);
  return _view;
};
