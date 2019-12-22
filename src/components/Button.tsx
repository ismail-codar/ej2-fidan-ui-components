import { ComponentBase } from "../_base";
import { Button, ButtonModel } from "@syncfusion/ej2-buttons";

export const SfButton = (props: ButtonModel & Partial<{
 "type": string
}> & ComponentBase<Button>) => {
  const _view = <button type={props.type}>{props.children}</button>;

  let _component: Button = new Button(props);
    props._component = _component;
    props._view = _view;
    _component.appendTo(_view);
    props && props.didMount && props.didMount(props);

  return _view;
};
