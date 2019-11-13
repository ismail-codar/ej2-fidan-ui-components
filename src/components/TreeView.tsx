import { TreeView, TreeViewModel } from "@syncfusion/ej2-navigations";

import { ComponentBase } from "../_base";

export const SfTreeView = (props: TreeViewModel & ComponentBase<TreeView>) => {
  const _view = <div>{props.children}</div>;

  let _component: TreeView = new TreeView(props);
    props._component = _component;
    props._view = _view;
    props && props.onInit && props.onInit(props);
    _component.appendTo(_view);

  return _view;
};
