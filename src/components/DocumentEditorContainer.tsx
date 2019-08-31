import { DocumentEditorContainer, DocumentEditorContainerModel } from "@syncfusion/ej2-documenteditor";

import { ComponentBase } from "../_base";

export const SfDocumentEditorContainer = (props: DocumentEditorContainerModel & ComponentBase<DocumentEditorContainer>) => {
  const _view = <div>{props.children}</div>;

  let _component: DocumentEditorContainer = new DocumentEditorContainer(props);
    _component.appendTo(_view);
    props.component = _component;
    props && props.onInit && props.onInit(props);

  return _view;
};
