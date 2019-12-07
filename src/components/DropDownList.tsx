
import { DropDownList, DropDownListModel } from "@syncfusion/ej2-dropdowns";
import { InputWithMessageProps } from "../_base"
export const SfDropDownList = (props: DropDownListModel & InputWithMessageProps<DropDownList>) => {
  const _view = 
    <input
      type="text"
      id={props.id}
      name={props.name}
      required={props.required}
      data-msg-containerid={props.containerId}
    />
  ;

  window.requestAnimationFrame(() => {
    let _component: DropDownList = new DropDownList(props);
    _component.appendTo(_view);
    props && props.onInit && props.onInit(props);
  });

  return _view;
};
