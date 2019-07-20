import { Sidebar, SidebarModel } from "@syncfusion/ej2-navigations";

import { ComponentBase } from "../_base";

export const SfSidebar = (props: SidebarModel & ComponentBase) => {
  const _view = <div>{props.children}</div>;

  let _component: Sidebar = new Sidebar(props);
    _component.appendTo(_view);
    props && props.onInit && props.onInit(props);

  return _view;
};
