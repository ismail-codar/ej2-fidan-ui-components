import { ComponentBase } from "../_base";
import { ChipList, ChipListModel } from "@syncfusion/ej2-buttons";

export const SfChipList = (props: ChipListModel & ComponentBase<ChipList>) => {
  const _view = <div>{props.children}</div>;

  let _component: ChipList = new ChipList(props);
    props._component = _component;
    props._view = _view;
    _component.appendTo(_view);
    props && props.onInit && props.onInit(props);

  return _view;
};
