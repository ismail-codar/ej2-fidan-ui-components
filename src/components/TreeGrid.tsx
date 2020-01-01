import { ComponentBase, setupComponentView } from "../_base";
import { TreeGrid, TreeGridModel } from "@syncfusion/ej2-treegrid";

export const SfTreeGrid = (props: TreeGridModel & ComponentBase<TreeGrid>) => {
  const _view = <div>{props.children}</div>;
  setupComponentView(_view, props, TreeGrid);
  return _view;
};
