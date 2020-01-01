import { ComponentBase, setupComponentView } from "../_base";
import { Diagram, DiagramModel } from "@syncfusion/ej2-diagrams";

export const SfDiagram = (props: DiagramModel & ComponentBase<Diagram>) => {
  const _view = <div>{props.children}</div>;
  setupComponentView(_view, props, Diagram);
  return _view;
};
