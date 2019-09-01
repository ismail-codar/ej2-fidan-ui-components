import { Diagram, DiagramModel } from "@syncfusion/ej2-diagrams";

import { ComponentBase } from "../_base";

export const SfDiagram = (props: DiagramModel & ComponentBase<Diagram>) => {
  const _view = <div>{props.children}</div>;

  let _component: Diagram = new Diagram(props);
    props._component = _component;
    props._view = _view;
    props && props.onInit && props.onInit(props);
    _component.appendTo(_view);

  return _view;
};
