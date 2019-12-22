import { ComponentBase } from "../_base";
import { Sparkline, SparklineModel } from "@syncfusion/ej2-charts";

export const SfSparkline = (props: SparklineModel & ComponentBase<Sparkline>) => {
  const _view = <div>{props.children}</div>;

  let _component: Sparkline = new Sparkline(props);
    props._component = _component;
    props._view = _view;
    _component.appendTo(_view);
    props && props.didMount && props.didMount(props);

  return _view;
};
