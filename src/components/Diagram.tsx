import { ComponentBase } from "../_base";
import { Diagram, DiagramModel } from "@syncfusion/ej2-diagrams";

export const SfDiagram = (props: DiagramModel & ComponentBase<Diagram>) => {
  const _view = <div>{props.children}</div>;

  let _component: Diagram = new Diagram(props);
    props._component = _component;
    props._view = _view;
    _component.appendTo(_view);
    props && props.onInit && props.onInit(props);

  return _view;
};
