import { ComponentBase, setupComponentView } from "../_base";
import { ListBox, ListBoxModel } from "@syncfusion/ej2-dropdowns";

export const SfListBox = (props: ListBoxModel & ComponentBase<ListBox>) => {
  const _view = <div>{props.children}</div>;
  setupComponentView(_view, props, ListBox);
  return _view;
};
