import { Smithchart, SmithchartModel } from "@syncfusion/ej2-charts";

import { ComponentBase } from "../_base";

export const SfSmithchart = (props: SmithchartModel & ComponentBase<Smithchart>) => {
  const _view = <div>{props.children}</div>;

  let _component: Smithchart = new Smithchart(props);
    _component.appendTo(_view);
    props.component = _component;
    props && props.onInit && props.onInit(props);

  return _view;
};