
import { MaskedTextBox, MaskedTextBoxModel } from "@syncfusion/ej2-inputs";
import { InputWithMessageProps } from "../_base"
export const SfMaskedTextBox = (props: MaskedTextBoxModel & InputWithMessageProps<MaskedTextBox>) => {
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
    let _component: MaskedTextBox = new MaskedTextBox(props);
    props._component = _component;
    _component.appendTo(_view);
    props && props.didMount && props.didMount(props);
  });

  return _view;
};
