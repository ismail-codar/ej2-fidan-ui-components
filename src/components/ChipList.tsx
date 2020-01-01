import { ComponentBase, setupComponentView } from "../_base";
import { ChipList, ChipListModel } from "@syncfusion/ej2-buttons";

export const SfChipList = (props: ChipListModel & ComponentBase<ChipList>) => {
  const _view = <div>{props.children}</div>;
  setupComponentView(_view, props, ChipList);
  return _view;
};
