import { Uploader, UploaderModel } from "@syncfusion/ej2-inputs";

import { ComponentBase } from "../_base";

export const SfUploader = (props: UploaderModel & ComponentBase<Uploader>) => {
  const _view = <div>{props.children}</div>;

  let _component: Uploader = new Uploader(props);
    props._component = _component;
    props._view = _view;
    props && props.onInit && props.onInit(props);
    _component.appendTo(_view);

  return _view;
};
