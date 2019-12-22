
import { AutoComplete, AutoCompleteModel } from "@syncfusion/ej2-dropdowns";
import { InputWithMessageProps } from "../_base"
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

  window.requestAnimationFrame(() => {
    let _component: AutoComplete = new AutoComplete(props);
    props._component = _component;
    _component.appendTo(_view);
    props && props.didMount && props.didMount(props);
  });

  return _view;
};
