import { ComponentBase } from "../_base";
import { TreeGrid, TreeGridModel } from "@syncfusion/ej2-treegrid";

export const SfTreeGrid = (props: TreeGridModel & ComponentBase<TreeGrid>) => {
  const _view = <div>{props.children}</div>;

  let _component: TreeGrid = new TreeGrid(props);
    props._component = _component;
    props._view = _view;
    _component.appendTo(_view);
    props && props.onInit && props.onInit(props);

  return _view;
};
