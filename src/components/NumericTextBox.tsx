
import { NumericTextBox, NumericTextBoxModel } from "@syncfusion/ej2-inputs";
import { InputWithMessageProps } from "../_base"
export const SfNumericTextBox = (props: NumericTextBoxModel & InputWithMessageProps<MaskedTextBox>) => {
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
    let _component: NumericTextBox = new NumericTextBox(props);
    props._component = _component;
    _component.appendTo(_view);
    props && props.didMount && props.didMount(props);
  });

  return _view;
};
