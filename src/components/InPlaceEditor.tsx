import { InPlaceEditor, InPlaceEditorModel } from "@syncfusion/ej2-inplace-editor";

import { ComponentBase } from "../_base";

export const SfInPlaceEditor = (props: InPlaceEditorModel & ComponentBase<InPlaceEditor>) => {
  const _view = <div>{props.children}</div>;

  let _component: InPlaceEditor = new InPlaceEditor(props);
    _component.appendTo(_view);
    props.component = _component;
    props && props.onInit && props.onInit(props);

  return _view;
};
