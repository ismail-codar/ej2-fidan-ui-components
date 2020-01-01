import { ComponentBase, setupComponentView } from "../_base";
import { Tooltip, TooltipModel } from "@syncfusion/ej2-popups";

export const SfTooltip = (props: TooltipModel & ComponentBase<Tooltip>) => {
  const _view = <div>{props.children}</div>;
  setupComponentView(_view, props, Tooltip);
  return _view;
};
