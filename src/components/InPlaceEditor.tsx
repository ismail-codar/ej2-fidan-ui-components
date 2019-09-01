import { InPlaceEditor, InPlaceEditorModel } from "@syncfusion/ej2-inplace-editor";

import { ComponentBase } from "../_base";

export const SfInPlaceEditor = (props: InPlaceEditorModel & ComponentBase<InPlaceEditor>) => {
  const _view = <div>{props.children}</div>;

  let _component: InPlaceEditor = new InPlaceEditor(props);
    props._component = _component;
    props._view = _view;
    props && props.onInit && props.onInit(props);
    _component.appendTo(_view);

  return _view;
};
