import { ChipList, ChipListModel } from "@syncfusion/ej2-buttons";

import { ComponentBase } from "../_base";

export const SfChipList = (props: ChipListModel & ComponentBase<ChipList>) => {
  const _view = <div>{props.children}</div>;

  let _component: ChipList = new ChipList(props);
    _component.appendTo(_view);
    props.component = _component;
    props && props.onInit && props.onInit(props);

  return _view;
};
