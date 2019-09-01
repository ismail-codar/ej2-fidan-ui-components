import { NumericTextBox, NumericTextBoxModel } from "@syncfusion/ej2-inputs";

import { ComponentBase } from "../_base";

export const SfNumericTextBox = (props: NumericTextBoxModel & ComponentBase<NumericTextBox>) => {
  const _view = <div>{props.children}</div>;

  let _component: NumericTextBox = new NumericTextBox(props);
    props._component = _component;
    props._view = _view;
    props && props.onInit && props.onInit(props);
    _component.appendTo(_view);

  return _view;
};
