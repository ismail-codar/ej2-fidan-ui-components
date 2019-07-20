import { Splitter, SplitterModel } from "@syncfusion/ej2-layouts";

import { ComponentBase } from "../_base";

export const SfSplitter = (props: SplitterModel & ComponentBase) => {
  const _view = <div>{props.children}</div>;

  let _component: Splitter = new Splitter(props);
    _component.appendTo(_view);
    props && props.onInit && props.onInit(props);

  return _view;
};
