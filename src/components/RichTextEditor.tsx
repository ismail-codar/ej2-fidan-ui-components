import { RichTextEditor, RichTextEditorModel } from "@syncfusion/ej2-richtexteditor";

import { ComponentBase } from "../_base";

export const SfRichTextEditor = (props: RichTextEditorModel & ComponentBase<RichTextEditor>) => {
  const _view = <div>{props.children}</div>;

  let _component: RichTextEditor = new RichTextEditor(props);
    props._component = _component;
    props._view = _view;
    props && props.onInit && props.onInit(props);
    _component.appendTo(_view);

  return _view;
};
