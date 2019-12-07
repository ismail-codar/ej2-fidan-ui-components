import { ComponentBase } from "../_base";
import { FormValidator, FormValidatorModel } from "@syncfusion/ej2-inputs";

export const SfFormValidator = (props: FormValidatorModel & ComponentBase<FormValidator>) => {
  const _view = <div>{props.children}</div>;

  let _component: FormValidator = new FormValidator(props);
    props._component = _component;
    props._view = _view;
    _component.appendTo(_view);
    props && props.onInit && props.onInit(props);

  return _view;
};
