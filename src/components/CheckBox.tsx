
import { CheckBox, CheckBoxModel } from "@syncfusion/ej2-buttons";
import { InputWithMessageProps } from "../_base"
export const SfCheckBox = (props: CheckBoxModel & InputWithMessageProps<CheckBox>) => {
  const _view = (<input
    type="checkbox"
    id={props.id}
    name={props.name}
    required={props.required}
    placeholder={props.placeholder}
    data-msg-containerid={props.containerId}
  />);

  window.requestAnimationFrame(() => {
    let _component: CheckBox = new CheckBox(props);
    _component.appendTo(_view);
    props && props.onInit && props.onInit(props);
  });

  return _view;
};
