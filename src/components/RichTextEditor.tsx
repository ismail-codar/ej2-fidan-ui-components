import { ComponentBase } from "../_base";
import { RichTextEditor, RichTextEditorModel } from "@syncfusion/ej2-richtexteditor";

export const SfRichTextEditor = (props: RichTextEditorModel & ComponentBase<RichTextEditor>) => {
  const _view = <div>{props.children}</div>;

  let _component: RichTextEditor = new RichTextEditor(props);
    props._component = _component;
    props._view = _view;
    _component.appendTo(_view);
    props && props.didMount && props.didMount(props);

  return _view;
};
