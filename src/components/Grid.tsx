import { Grid, GridModel } from "@syncfusion/ej2-grids";

import { ComponentBase } from "../_base";

export const SfGrid = (props: GridModel & ComponentBase<Grid>) => {
  const _view = <div>{props.children}</div>;

  let _component: Grid = new Grid(props);
    _component.appendTo(_view);
    props.component = _component;
    props && props.onInit && props.onInit(props);

  return _view;
};
