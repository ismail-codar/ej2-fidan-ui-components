
import { RadioButton, RadioButtonModel } from "@syncfusion/ej2-buttons";
import { InputWithMessageProps } from "../_base"
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

  window.requestAnimationFrame(() => {
    let _component: RadioButton = new RadioButton(props);
    props._component = _component;
    _component.appendTo(_view);
    props && props.didMount && props.didMount(props);
  });

  return _view;
};
