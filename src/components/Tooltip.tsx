import { ComponentBase } from "../_base";
import { Tooltip, TooltipModel } from "@syncfusion/ej2-popups";

export const SfTooltip = (props: TooltipModel & ComponentBase<Tooltip>) => {
  const _view = <div>{props.children}</div>;

  let _component: Tooltip = new Tooltip(props);
    props._component = _component;
    props._view = _view;
    _component.appendTo(_view);
    props && props.onInit && props.onInit(props);

  return _view;
};
