import { Button, ButtonModel } from "@syncfusion/ej2-buttons";

import { ComponentBase } from "../_base";

export const SfButton = (props: ButtonModel & ComponentBase<Button>) => {
  const _view = <button>{props.children}</button>;

  let _component: Button = new Button(props);
    props._component = _component;
    props._view = _view;
    props && props.onInit && props.onInit(props);
    _component.appendTo(_view);

  return _view;
};
