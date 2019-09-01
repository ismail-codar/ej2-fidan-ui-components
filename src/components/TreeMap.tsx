import { TreeMap, TreeMapModel } from "@syncfusion/ej2-treemap";

import { ComponentBase } from "../_base";

export const SfTreeMap = (props: TreeMapModel & ComponentBase<TreeMap>) => {
  const _view = <div>{props.children}</div>;

  let _component: TreeMap = new TreeMap(props);
    props._component = _component;
    props._view = _view;
    props && props.onInit && props.onInit(props);
    _component.appendTo(_view);

  return _view;
};
