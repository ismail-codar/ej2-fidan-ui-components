import { TreeGrid, TreeGridModel } from "@syncfusion/ej2-treegrid";

import { ComponentBase } from "../_base";

export const SfTreeGrid = (props: TreeGridModel & ComponentBase<TreeGrid>) => {
  const _view = <div>{props.children}</div>;

  let _component: TreeGrid = new TreeGrid(props);
    _component.appendTo(_view);
    props.component = _component;
    props && props.onInit && props.onInit(props);

  return _view;
};
