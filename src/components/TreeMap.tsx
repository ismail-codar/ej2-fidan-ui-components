import { ComponentBase } from "../_base";
import { TreeMap, TreeMapModel } from "@syncfusion/ej2-treemap";

export const SfTreeMap = (props: TreeMapModel & ComponentBase<TreeMap>) => {
  const _view = <div>{props.children}</div>;

  let _component: TreeMap = new TreeMap(props);
    props._component = _component;
    props._view = _view;
    _component.appendTo(_view);
    props && props.didMount && props.didMount(props);

  return _view;
};
