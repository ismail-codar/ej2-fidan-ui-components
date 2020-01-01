import { ComponentBase, setupComponentView } from "../_base";
import { TreeView, TreeViewModel } from "@syncfusion/ej2-navigations";

export const SfTreeView = (props: TreeViewModel & ComponentBase<TreeView>) => {
  const _view = <div>{props.children}</div>;
  setupComponentView(_view, props, TreeView);
  return _view;
};
