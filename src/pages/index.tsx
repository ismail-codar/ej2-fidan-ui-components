import { enableRipple } from "@syncfusion/ej2-base";
enableRipple(true);

import "./sidebar/sidebar.css";
import { AppSidebarLayout } from "./sidebar/AppSidebarLayout";

const view1: any = (
  <div>
    <AppSidebarLayout />
  </div>
);

const appMain = document.getElementById("app");
appMain.appendChild(view1);
