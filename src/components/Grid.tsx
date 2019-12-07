import { ComponentBase } from "../_base";
import { Grid, GridModel } from "@syncfusion/ej2-grids";

export const SfGrid = (props: GridModel & ComponentBase<Grid>) => {
  const _view = <div>{props.children}</div>;

  let _component: Grid = new Grid(props);
    props._component = _component;
    props._view = _view;
    _component.appendTo(_view);
    props && props.onInit && props.onInit(props);

  return _view;
};
