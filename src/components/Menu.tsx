import { ComponentBase } from "../_base";
import { Menu, MenuModel } from "@syncfusion/ej2-navigations";

export const SfMenu = (props: MenuModel & ComponentBase<Menu>) => {
  const _view = <div>{props.children}</div>;

  let _component: Menu = new Menu(props);
    props._component = _component;
    props._view = _view;
    _component.appendTo(_view);
    props && props.onInit && props.onInit(props);

  return _view;
};
