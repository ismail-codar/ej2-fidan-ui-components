import { ComponentBase, setupComponentView } from "../_base";
import { Toast, ToastModel } from "@syncfusion/ej2-notifications";

export const SfToast = (props: ToastModel & ComponentBase<Toast>) => {
  const _view = <div>{props.children}</div>;
  setupComponentView(_view, props, Toast);
  return _view;
};
