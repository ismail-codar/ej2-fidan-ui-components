import { Menu, MenuModel } from "@syncfusion/ej2-navigations";

import { ComponentBase } from "../_base";

export const SfMenu = (props: MenuModel & ComponentBase<Menu>) => {
  const _view = <div>{props.children}</div>;

  let _component: Menu = new Menu(props);
    _component.appendTo(_view);
    props.component = _component;
    props && props.onInit && props.onInit(props);

  return _view;
};
