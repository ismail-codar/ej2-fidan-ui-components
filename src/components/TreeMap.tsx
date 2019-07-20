import { TreeMap, TreeMapModel } from "@syncfusion/ej2-treemap";

import { ComponentBase } from "../_base";

export const SfTreeMap = (props: TreeMapModel & ComponentBase) => {
  const _view = <div>{props.children}</div>;

  let _component: TreeMap = new TreeMap(props);
    _component.appendTo(_view);
    props && props.onInit && props.onInit(props);

  return _view;
};
