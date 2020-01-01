import { ComponentBase, setupComponentView } from "../_base";
import { ListView, ListViewModel } from "@syncfusion/ej2-lists";

export const SfListView = (props: ListViewModel & ComponentBase<ListView>) => {
  const _view = <div>{props.children}</div>;
  setupComponentView(_view, props, ListView);
  return _view;
};
