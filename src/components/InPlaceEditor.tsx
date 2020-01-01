import { ComponentBase, setupComponentView } from "../_base";
import { InPlaceEditor, InPlaceEditorModel } from "@syncfusion/ej2-inplace-editor";

export const SfInPlaceEditor = (props: InPlaceEditorModel & ComponentBase<InPlaceEditor>) => {
  const _view = <div>{props.children}</div>;
  setupComponentView(_view, props, InPlaceEditor);
  return _view;
};
