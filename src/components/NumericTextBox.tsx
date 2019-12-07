import { ComponentBase } from "../_base";
import { NumericTextBox, NumericTextBoxModel } from "@syncfusion/ej2-inputs";

export const SfNumericTextBox = (props: NumericTextBoxModel & ComponentBase<NumericTextBox>) => {
  const _view = <div>{props.children}</div>;

  let _component: NumericTextBox = new NumericTextBox(props);
    props._component = _component;
    props._view = _view;
    _component.appendTo(_view);
    props && props.onInit && props.onInit(props);

  return _view;
};
