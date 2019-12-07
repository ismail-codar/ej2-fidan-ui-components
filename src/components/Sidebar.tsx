
import { Sidebar, SidebarModel } from "@syncfusion/ej2-navigations";
import { SideBarProps } from "./props/SideBarProps"
export const SfSidebar = (props: SidebarModel & SideBarProps) => {
  const _view = (
      <aside className={props.sidebarCss || "default-sidebar"}>
        <div className={props.titleHeaderCss || "title-header"}>
          <div style="display:inline-block"> {props.title} </div>
          <span
            id="close"
            className={props.eIconsCss || "e-icons"}
            onClick={() => _component.hide()}
          />
        </div>
        <div className={props.subTitleCss || "sub-title"}>{props.children}</div>
      </aside>
    );

  let _component: Sidebar = new Sidebar(props);
    props._component = _component;
    props._view = _view;
    _component.appendTo(_view);
    props && props.onInit && props.onInit(props);

  return _view;
};
