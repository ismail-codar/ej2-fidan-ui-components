import { ComponentBase, setupComponentView } from "../_base";
import { Menu, MenuModel } from "@syncfusion/ej2-navigations";

export const SfMenu = (props: MenuModel & ComponentBase<Menu>) => {
  const _view = <div>{props.children}</div>;
  setupComponentView(_view, props, Menu);
  return _view;
};
