
import { DropDownList, DropDownListModel } from "@syncfusion/ej2-dropdowns";
import { InputWithMessageProps } from "../_base"
export const SfDropDownList = (props: DropDownListModel & InputWithMessageProps<DropDownList>) => {
  const _view = (<input
    type="text"
    id={props.id}
    name={props.name}
    required={props.required}
    placeholder={props.placeholder}
    data-msg-containerid={props.containerId}
  />);

  window.requestAnimationFrame(() => {
    let _component: DropDownList = new DropDownList(props);
    props._component = _component;
    _component.appendTo(_view);
    props && props.didMount && props.didMount(props);
  });

  return _view;
};
