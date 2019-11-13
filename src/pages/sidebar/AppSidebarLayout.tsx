import { Sidebar } from "@syncfusion/ej2-navigations";
import { AppSelectedProperties } from "../../components/sidebar-layout/AppSelectedProperties";
import { SfSidebar } from "../../ej2-fidan-ui-components/Sidebar";
import { SfSplitter } from "../../ej2-fidan-ui-components/Splitter";
import { SfTab } from "../../ej2-fidan-ui-components/Tab";
import { AppTreeView } from "../../components/sidebar-layout/AppTreeView";

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
            onClick={() => sideBar.show()}
          />
          <SfSidebar
            title=" AppId "
            onInit={props => {
              sideBar = props._component;
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
                <span>
                  Middle pane<div id="panetext">size: 50%</div>
                  <div id="panetext">min: 60px</div>
                </span>
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
