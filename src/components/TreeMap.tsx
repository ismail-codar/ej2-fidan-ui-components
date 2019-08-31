import { TreeMap, TreeMapModel } from "@syncfusion/ej2-treemap";

import { ComponentBase } from "../_base";

export const SfTreeMap = (props: TreeMapModel & ComponentBase<TreeMap>) => {
  const _view = <div>{props.children}</div>;

  let _component: TreeMap = new TreeMap(props);
    _component.appendTo(_view);
    props.component = _component;
    props && props.onInit && props.onInit(props);

  return _view;
};
