import { ComponentBase, setupComponentView } from "../_base";
import { Dialog, DialogModel } from "@syncfusion/ej2-popups";

export const SfDialog = (props: DialogModel & ComponentBase<Dialog>) => {
  const _view = <div>{props.children}</div>;
  setupComponentView(_view, props, Dialog);
  return _view;
};
