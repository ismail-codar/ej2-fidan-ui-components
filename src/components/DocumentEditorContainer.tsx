import { ComponentBase } from "../_base";
import { DocumentEditorContainer, DocumentEditorContainerModel } from "@syncfusion/ej2-documenteditor";

export const SfDocumentEditorContainer = (props: DocumentEditorContainerModel & ComponentBase<DocumentEditorContainer>) => {
  const _view = <div>{props.children}</div>;

  let _component: DocumentEditorContainer = new DocumentEditorContainer(props);
    props._component = _component;
    props._view = _view;
    _component.appendTo(_view);
    props && props.didMount && props.didMount(props);

  return _view;
};
