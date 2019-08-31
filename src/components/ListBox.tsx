import { ListBox, ListBoxModel } from "@syncfusion/ej2-dropdowns";

import { ComponentBase } from "../_base";

export const SfListBox = (props: ListBoxModel & ComponentBase<ListBox>) => {
  const _view = <div>{props.children}</div>;

  let _component: ListBox = new ListBox(props);
    _component.appendTo(_view);
    props.component = _component;
    props && props.onInit && props.onInit(props);

  return _view;
};
