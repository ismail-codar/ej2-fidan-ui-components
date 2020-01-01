
import { DropDownList, DropDownListModel } from "@syncfusion/ej2-dropdowns";
import { InputWithMessageProps } from "../_base"
    
import { setupComponentView } from '../_base';
    
export const SfDropDownList = (props: DropDownListModel & InputWithMessageProps<DropDownList>) => {
  const _view = (<input
    type="text"
    id={props.id}
    name={props.name}
    required={props.required}
    placeholder={props.placeholder}
    data-msg-containerid={props.containerId}
  />);
  setupComponentView(_view, props, DropDownList);
  return _view;
};
