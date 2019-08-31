import { RangeNavigator, RangeNavigatorModel } from "@syncfusion/ej2-charts";

import { ComponentBase } from "../_base";

export const SfRangeNavigator = (props: RangeNavigatorModel & ComponentBase<RangeNavigator>) => {
  const _view = <div>{props.children}</div>;

  let _component: RangeNavigator = new RangeNavigator(props);
    _component.appendTo(_view);
    props.component = _component;
    props && props.onInit && props.onInit(props);

  return _view;
};
