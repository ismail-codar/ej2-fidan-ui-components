import { Diagram, DiagramModel } from "@syncfusion/ej2-diagrams";

import { ComponentBase } from "../_base";

export const SfDiagram = (props: DiagramModel & ComponentBase) => {
  const _view = <div>{props.children}</div>;

  let _component: Diagram = new Diagram(props);
    _component.appendTo(_view);
    props && props.onInit && props.onInit(props);

  return _view;
};
