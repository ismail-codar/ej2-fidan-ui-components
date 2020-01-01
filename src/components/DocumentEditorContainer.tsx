import { ComponentBase, setupComponentView } from "../_base";
import { DocumentEditorContainer, DocumentEditorContainerModel } from "@syncfusion/ej2-documenteditor";

export const SfDocumentEditorContainer = (props: DocumentEditorContainerModel & ComponentBase<DocumentEditorContainer>) => {
  const _view = <div>{props.children}</div>;
  setupComponentView(_view, props, DocumentEditorContainer);
  return _view;
};
