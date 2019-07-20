import { Sparkline, SparklineModel } from "@syncfusion/ej2-charts";

import { ComponentBase } from "../_base";

export const SfSparkline = (props: SparklineModel & ComponentBase) => {
  const _view = <div>{props.children}</div>;

  let _component: Sparkline = new Sparkline(props);
    _component.appendTo(_view);
    props && props.onInit && props.onInit(props);

  return _view;
};
