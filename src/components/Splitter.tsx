import { ComponentBase, setupComponentView } from "../_base";
import { Splitter, SplitterModel } from "@syncfusion/ej2-layouts";

export const SfSplitter = (props: SplitterModel & ComponentBase<Splitter>) => {
  const _view = <div>{props.children}</div>;
  setupComponentView(_view, props, Splitter);
  return _view;
};
