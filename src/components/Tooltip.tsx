import { Tooltip, TooltipModel } from "@syncfusion/ej2-popups";

import { ComponentBase } from "../_base";

export const SfTooltip = (props: TooltipModel & ComponentBase<Tooltip>) => {
  const _view = <div>{props.children}</div>;

  let _component: Tooltip = new Tooltip(props);
    _component.appendTo(_view);
    props.component = _component;
    props && props.onInit && props.onInit(props);

  return _view;
};
