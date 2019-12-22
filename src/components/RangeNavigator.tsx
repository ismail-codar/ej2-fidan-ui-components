import { ComponentBase } from "../_base";
import { RangeNavigator, RangeNavigatorModel } from "@syncfusion/ej2-charts";

export const SfRangeNavigator = (props: RangeNavigatorModel & ComponentBase<RangeNavigator>) => {
  const _view = <div>{props.children}</div>;

  let _component: RangeNavigator = new RangeNavigator(props);
    props._component = _component;
    props._view = _view;
    _component.appendTo(_view);
    props && props.didMount && props.didMount(props);

  return _view;
};
