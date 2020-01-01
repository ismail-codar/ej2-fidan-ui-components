import { ComponentBase, setupComponentView } from "../_base";
import { RichTextEditor, RichTextEditorModel } from "@syncfusion/ej2-richtexteditor";

export const SfRichTextEditor = (props: RichTextEditorModel & ComponentBase<RichTextEditor>) => {
  const _view = <div>{props.children}</div>;
  setupComponentView(_view, props, RichTextEditor);
  return _view;
};
