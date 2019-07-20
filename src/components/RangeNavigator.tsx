import { RangeNavigator, RangeNavigatorModel } from "@syncfusion/ej2-charts";

import { ComponentBase } from "../_base";

export const SfRangeNavigator = (props: RangeNavigatorModel & ComponentBase) => {
  const _view = <div>{props.children}</div>;

  let _component: RangeNavigator = new RangeNavigator(props);
    _component.appendTo(_view);
    props && props.onInit && props.onInit(props);

  return _view;
};
