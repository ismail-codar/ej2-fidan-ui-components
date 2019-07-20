import { FormValidator, FormValidatorModel } from "@syncfusion/ej2-inputs";

import { ComponentBase } from "../_base";

export const SfFormValidator = (props: FormValidatorModel & ComponentBase) => {
  const _view = <div>{props.children}</div>;

  let _component: FormValidator = new FormValidator(props);
    _component.appendTo(_view);
    props && props.onInit && props.onInit(props);

  return _view;
};
