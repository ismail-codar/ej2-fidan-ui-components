
import { TextBox, TextBoxModel } from "@syncfusion/ej2-inputs";
import { InputWithMessageProps } from "../_base"
export const SfTextBox = (props: TextBoxModel & InputWithMessageProps<TextBox>) => {
  const _view = (<input
    type="text"
    id={props.id}
    name={props.name}
    required={props.required}
    placeholder={props.placeholder}
    value={props.inputValue()}
    data-msg-containerid={props.containerId}
  />);

  window.requestAnimationFrame(() => {
    let _component: TextBox = new TextBox(props);
    props._component = _component;
    _component.appendTo(_view);
    props && props.didMount && props.didMount(props);
  });

  return _view;
};
