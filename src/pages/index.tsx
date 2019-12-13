import { enableRipple } from "@syncfusion/ej2-base";
enableRipple(true);

import "./sidebar/sidebar.css";
import "./app.css";
import { AppSidebarLayout } from "../pages/sidebar/AppSidebarLayout";

const view1: any = (
  <div>
    <AppSidebarLayout />
  </div>
);

const appMain = document.getElementById("app");
appMain.appendChild(view1);
