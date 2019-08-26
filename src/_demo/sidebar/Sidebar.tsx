import { SfSidebar } from "../../components/Sidebar";

export const SidebarDemo = () => {
  return (
    <div className="control-section">
      <div id="wrapper">
        <title>Essential JS 2 - Sidebar &gt; Default functinalities</title>
        <div className="col-lg-12 col-sm-12 col-md-12" id="sidebar-section">
          <span id="hamburger" className="e-icons menu default" />
          <SfSidebar>Place your primary content here...</SfSidebar>

          <div>
            <div className="title default">Main content</div>
            <div className="sub-title">
              {" "}
              Click the button to open/close the Sidebar.
              <div style="padding:20px" className="center-align">
                <button id="toggle" className="e-btn e-info">
                  Toggle Sidebar
                </button>
              </div>
              <p>Click the radio button to switch the Sidebar position</p>
              <div className="column">
                <input type="radio" id="left" />
              </div>
              <div className="column">
                <input type="radio" id="right" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
