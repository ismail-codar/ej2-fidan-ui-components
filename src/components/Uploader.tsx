import { Uploader, UploaderModel } from "@syncfusion/ej2-inputs";

import { ComponentBase } from "../_base";

export const SfUploader = (props: UploaderModel & ComponentBase) => {
  const _view = <div>{props.children}</div>;

  let _component: Uploader = new Uploader(props);
    _component.appendTo(_view);
    props && props.onInit && props.onInit(props);

  return _view;
};
