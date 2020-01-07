import { ComponentBase, setupComponentView } from "../_base";
import { Grid, GridModel } from "@syncfusion/ej2-grids";
import { Sort, Page, DetailRow } from '@syncfusion/ej2-grids';
Grid.Inject(Sort, Page, DetailRow);
export const SfGrid = (props: GridModel & ComponentBase<Grid>) => {
  const _view = <div>{props.children}</div>;
  setupComponentView(_view, props, Grid);
  return _view;
};
