import { ComponentBase } from "../_base";
import { Uploader, UploaderModel } from "@syncfusion/ej2-inputs";

export const SfUploader = (props: UploaderModel & ComponentBase<Uploader>) => {
  const _view = <div>{props.children}</div>;

  let _component: Uploader = new Uploader(props);
    props._component = _component;
    props._view = _view;
    _component.appendTo(_view);
    props && props.didMount && props.didMount(props);

  return _view;
};
