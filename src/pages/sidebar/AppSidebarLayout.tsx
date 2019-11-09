import { SfSidebar } from "../../ej2-fidan-ui-components/Sidebar";
import { Sidebar } from "@syncfusion/ej2-navigations";

export const AppSidebarLayout = () => {
  let sideBar: Sidebar = null;

  return (
    <div className="control-section">
      <div id="wrapper">
        <title>Essential JS 2 - Sidebar &gt; Default functinalities</title>
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
            <div className="title default">Main content</div>
          </div>
        </div>
      </div>
    </div>
  );
};
