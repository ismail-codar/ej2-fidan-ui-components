import { enableRipple } from "@syncfusion/ej2-base";
enableRipple(true);

import { Button, ButtonModel } from "@syncfusion/ej2-buttons";
import { ComponentBase } from "../_base";

export const SfButton = (props: ButtonModel & ComponentBase) => {
  const ref = element => {
    let button: Button = new Button(props);
    button.appendTo(element);
  };
  return <button {...ref}>{props.children}</button>;
};
