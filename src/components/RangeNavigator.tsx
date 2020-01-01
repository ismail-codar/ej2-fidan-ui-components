import { ComponentBase, setupComponentView } from "../_base";
import { RangeNavigator, RangeNavigatorModel } from "@syncfusion/ej2-charts";

export const SfRangeNavigator = (props: RangeNavigatorModel & ComponentBase<RangeNavigator>) => {
  const _view = <div>{props.children}</div>;
  setupComponentView(_view, props, RangeNavigator);
  return _view;
};
