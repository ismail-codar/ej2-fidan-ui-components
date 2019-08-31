import { Dialog, DialogModel } from "@syncfusion/ej2-popups";

import { ComponentBase } from "../_base";

export const SfDialog = (props: DialogModel & ComponentBase<Dialog>) => {
  const _view = <div>{props.children}</div>;

  let _component: Dialog = new Dialog(props);
    _component.appendTo(_view);
    props.component = _component;
    props && props.onInit && props.onInit(props);

  return _view;
};
