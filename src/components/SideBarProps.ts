import { ComponentBase } from "../_base";
import { Sidebar } from "@syncfusion/ej2-navigations";

export interface SideBarProps extends ComponentBase<Sidebar> {
  title: string;
  sidebarCss?: string;
  titleHeaderCss?: string;
  eIconsCss?: string;
  subTitleCss?: string;
}
