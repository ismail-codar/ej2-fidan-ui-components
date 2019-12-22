
import { MultiSelect, MultiSelectModel } from "@syncfusion/ej2-dropdowns";
import { InputWithMessageProps } from "../_base"
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

  window.requestAnimationFrame(() => {
    let _component: MultiSelect = new MultiSelect(props);
    props._component = _component;
    _component.appendTo(_view);
    props && props.didMount && props.didMount(props);
  });

  return _view;
};
