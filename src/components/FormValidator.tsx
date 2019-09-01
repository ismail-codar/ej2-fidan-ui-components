import { FormValidator, FormValidatorModel } from "@syncfusion/ej2-inputs";

import { ComponentBase } from "../_base";

export const SfFormValidator = (props: FormValidatorModel & ComponentBase<FormValidator>) => {
  const _view = <div>{props.children}</div>;

  let _component: FormValidator = new FormValidator(props);
    props._component = _component;
    props._view = _view;
    props && props.onInit && props.onInit(props);
    _component.appendTo(_view);

  return _view;
};
