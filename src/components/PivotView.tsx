import { PivotView, PivotViewModel } from "@syncfusion/ej2-pivotview";

import { ComponentBase } from "../_base";

export const SfPivotView = (props: PivotViewModel & ComponentBase<PivotView>) => {
  const _view = <div>{props.children}</div>;

  let _component: PivotView = new PivotView(props);
    props._component = _component;
    props._view = _view;
    props && props.onInit && props.onInit(props);
    _component.appendTo(_view);

  return _view;
};
