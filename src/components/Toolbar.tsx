import { ComponentBase, setupComponentView } from "../_base";
import { Toolbar, ToolbarModel } from "@syncfusion/ej2-navigations";

export const SfToolbar = (props: ToolbarModel & ComponentBase<Toolbar>) => {
  const _view = <div>{props.children}</div>;
  setupComponentView(_view, props, Toolbar);
  return _view;
};
