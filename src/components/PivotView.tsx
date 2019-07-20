import { PivotView, PivotViewModel } from "@syncfusion/ej2-pivotview";

import { ComponentBase } from "../_base";

export const SfPivotView = (props: PivotViewModel & ComponentBase) => {
  const _view = <div>{props.children}</div>;

  let _component: PivotView = new PivotView(props);
    _component.appendTo(_view);
    props && props.onInit && props.onInit(props);

  return _view;
};
