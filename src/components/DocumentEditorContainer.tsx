import { DocumentEditorContainer, DocumentEditorContainerModel } from "@syncfusion/ej2-documenteditor";

import { ComponentBase } from "../_base";

export const SfDocumentEditorContainer = (props: DocumentEditorContainerModel & ComponentBase) => {
  const _view = <div>{props.children}</div>;

  let _component: DocumentEditorContainer = new DocumentEditorContainer(props);
    _component.appendTo(_view);
    props && props.onInit && props.onInit(props);

  return _view;
};
