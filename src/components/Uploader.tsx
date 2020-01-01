import { ComponentBase, setupComponentView } from "../_base";
import { Uploader, UploaderModel } from "@syncfusion/ej2-inputs";

export const SfUploader = (props: UploaderModel & ComponentBase<Uploader>) => {
  const _view = <div>{props.children}</div>;
  setupComponentView(_view, props, Uploader);
  return _view;
};
