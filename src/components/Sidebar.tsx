import { Sidebar, SidebarModel } from "@syncfusion/ej2-navigations";

import { ComponentBase } from "../_base";

export const SfSidebar = (props: SidebarModel & ComponentBase<Sidebar>) => {
  const _view = (
      <aside id="default-sidebar">
        <div className="title-header">
          <div style="display:inline-block"> Sidebar </div>
          <span
            id="close"
            className="e-icons"
            onClick={() => _component.hide()}
          />
        </div>
        <div className="sub-title">{props.children}</div>
      </aside>
    );

  let _component: Sidebar = new Sidebar(props);
    _component.appendTo(_view);
    props.component = _component;
    props && props.onInit && props.onInit(props);

  return _view;
};