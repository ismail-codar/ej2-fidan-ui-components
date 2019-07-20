import { NumericTextBox, NumericTextBoxModel } from "@syncfusion/ej2-inputs";

import { ComponentBase } from "../_base";

export const SfNumericTextBox = (props: NumericTextBoxModel & ComponentBase) => {
  const _view = <div>{props.children}</div>;

  let _component: NumericTextBox = new NumericTextBox(props);
    _component.appendTo(_view);
    props && props.onInit && props.onInit(props);

  return _view;
};
