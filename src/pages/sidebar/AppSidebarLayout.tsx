import { Sidebar, EventArgs } from "@syncfusion/ej2-navigations";
import { AppSelectedProperties } from "../../components/sidebar-layout/AppSelectedProperties";
import { SfSidebar } from "../../ej2-fidan-ui-components/Sidebar";
import { SfSplitter } from "../../ej2-fidan-ui-components/Splitter";
import { SfTab } from "../../ej2-fidan-ui-components/Tab";
import { AppTreeView } from "../../components/sidebar-layout/AppTreeView";
import { FormDemo } from "../../components/form/_.demo";
import { EmitType } from "@syncfusion/ej2-base";

export const AppSidebarLayout = () => {
  let sideBar: Sidebar = null;

  return (
    <div className="control-section">
      <div id="wrapper">
        <title>AppId &gt; Mockup Utility</title>
        <div className="col-lg-12 col-sm-12 col-md-12" id="sidebar-section">
          <span
            id="hamburger"
            className="e-icons menu default"
            onClick={() => {
              sideBar.show();
            }}
          />
          <SfSidebar
            title=" AppId "
            onInit={props => {
              sideBar = props._component;
              sideBar.addEventListener("open", (e: EmitType<EventArgs>) => {
                localStorage.setItem("sideBar", "1");
              });
              sideBar.addEventListener("close", (e: EmitType<EventArgs>) => {
                localStorage.setItem("sideBar", "0");
              });
              if (localStorage.getItem("sideBar") !== "1") {
                sideBar.hide();
              }
            }}
          >
            Place your primary content here...
          </SfSidebar>

          <div>
            <SfSplitter
              paneSettings={[
                { size: "75%", min: "160px" },
                { size: "25%", min: "160px", collapsible: true }
              ]}
            >
              <div class="default-splitter-content">
                <FormDemo></FormDemo>
              </div>
              <div class="default-splitter-content">
                <SfTab
                  items={[
                    {
                      header: { text: "Uygulama Parçaları" },
                      content: (
                        <div>
                          <AppTreeView />
                        </div>
                      )
                    },
                    {
                      header: { text: "Özellikler" },
                      content: <AppSelectedProperties />
                    }
                  ]}
                >
                  .
                </SfTab>
              </div>
            </SfSplitter>
          </div>
        </div>
      </div>
    </div>
  );
};
