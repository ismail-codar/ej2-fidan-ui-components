import { ComponentBase } from "../_base";
import { InPlaceEditor, InPlaceEditorModel } from "@syncfusion/ej2-inplace-editor";

export const SfInPlaceEditor = (props: InPlaceEditorModel & ComponentBase<InPlaceEditor>) => {
  const _view = <div>{props.children}</div>;

  let _component: InPlaceEditor = new InPlaceEditor(props);
    props._component = _component;
    props._view = _view;
    _component.appendTo(_view);
    props && props.onInit && props.onInit(props);

  return _view;
};
