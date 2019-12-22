import { ComponentBase } from "../_base";
import { ListBox, ListBoxModel } from "@syncfusion/ej2-dropdowns";

export const SfListBox = (props: ListBoxModel & ComponentBase<ListBox>) => {
  const _view = <div>{props.children}</div>;

  let _component: ListBox = new ListBox(props);
    props._component = _component;
    props._view = _view;
    _component.appendTo(_view);
    props && props.didMount && props.didMount(props);

  return _view;
};
