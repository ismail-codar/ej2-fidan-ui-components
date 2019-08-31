import { Toast, ToastModel } from "@syncfusion/ej2-notifications";

import { ComponentBase } from "../_base";

export const SfToast = (props: ToastModel & ComponentBase<Toast>) => {
  const _view = <div>{props.children}</div>;

  let _component: Toast = new Toast(props);
    _component.appendTo(_view);
    props.component = _component;
    props && props.onInit && props.onInit(props);

  return _view;
};
