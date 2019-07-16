import { Button, ButtonModel } from "@syncfusion/ej2-buttons";

import { ComponentBase } from "../_base";

export const SfButton = (props: ButtonModel & ComponentBase) => {
  const _view = <button>{props.children}</button>;

  let _component: Button = new Button(props);
    _component.appendTo(_view);
    props.onInit && props.onInit(props);

  return _view;
};
