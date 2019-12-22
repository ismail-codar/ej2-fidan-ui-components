import { ComponentBase } from "../_base";
import { Splitter, SplitterModel } from "@syncfusion/ej2-layouts";

export const SfSplitter = (props: SplitterModel & ComponentBase<Splitter>) => {
  const _view = <div>{props.children}</div>;

  let _component: Splitter = new Splitter(props);
    props._component = _component;
    props._view = _view;
    _component.appendTo(_view);
    props && props.didMount && props.didMount(props);

  return _view;
};
