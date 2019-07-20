import { Tooltip, TooltipModel } from "@syncfusion/ej2-popups";

import { ComponentBase } from "../_base";

export const SfTooltip = (props: TooltipModel & ComponentBase) => {
  const _view = <div>{props.children}</div>;

  let _component: Tooltip = new Tooltip(props);
    _component.appendTo(_view);
    props && props.onInit && props.onInit(props);

  return _view;
};
