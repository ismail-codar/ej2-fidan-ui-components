import { ComponentBase, setupComponentView } from "../_base";
import { Button, ButtonModel } from "@syncfusion/ej2-buttons";

export const SfButton = (props: ButtonModel & Partial<{
 "type": string
}> & ComponentBase<Button>) => {
  const _view = <button type={props.type}>{props.children}</button>;
  setupComponentView(_view, props, Button);
  return _view;
};
