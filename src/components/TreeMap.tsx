import { ComponentBase, setupComponentView } from "../_base";
import { TreeMap, TreeMapModel } from "@syncfusion/ej2-treemap";

export const SfTreeMap = (props: TreeMapModel & ComponentBase<TreeMap>) => {
  const _view = <div>{props.children}</div>;
  setupComponentView(_view, props, TreeMap);
  return _view;
};
