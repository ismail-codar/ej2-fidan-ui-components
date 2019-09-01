import { Toast, ToastModel } from "@syncfusion/ej2-notifications";

import { ComponentBase } from "../_base";

export const SfToast = (props: ToastModel & ComponentBase<Toast>) => {
  const _view = <div>{props.children}</div>;

  let _component: Toast = new Toast(props);
    props._component = _component;
    props._view = _view;
    props && props.onInit && props.onInit(props);
    _component.appendTo(_view);

  return _view;
};
