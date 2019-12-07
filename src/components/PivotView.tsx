import { ComponentBase } from "../_base";
import { PivotView, PivotViewModel } from "@syncfusion/ej2-pivotview";

export const SfPivotView = (props: PivotViewModel & ComponentBase<PivotView>) => {
  const _view = <div>{props.children}</div>;

  let _component: PivotView = new PivotView(props);
    props._component = _component;
    props._view = _view;
    _component.appendTo(_view);
    props && props.onInit && props.onInit(props);

  return _view;
};
