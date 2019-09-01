import { ListBox, ListBoxModel } from "@syncfusion/ej2-dropdowns";

import { ComponentBase } from "../_base";

export const SfListBox = (props: ListBoxModel & ComponentBase<ListBox>) => {
  const _view = <div>{props.children}</div>;

  let _component: ListBox = new ListBox(props);
    props._component = _component;
    props._view = _view;
    props && props.onInit && props.onInit(props);
    _component.appendTo(_view);

  return _view;
};
