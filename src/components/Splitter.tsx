import { Splitter, SplitterModel } from "@syncfusion/ej2-layouts";

import { ComponentBase } from "../_base";

export const SfSplitter = (props: SplitterModel & ComponentBase<Splitter>) => {
  const _view = <div>{props.children}</div>;

  let _component: Splitter = new Splitter(props);
    props._component = _component;
    props._view = _view;
    _component.appendTo(_view);
    props && props.onInit && props.onInit(props);

  return _view;
};
