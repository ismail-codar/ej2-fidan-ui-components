import { SfSidebar } from "../../components/Sidebar";
import { Sidebar } from "@syncfusion/ej2-navigations";
import { SfRadioButton } from "../../components/RadioButton";

export const SidebarDemo = () => {
  let sideBar: Sidebar = null;

  function positionChange(args: any): void {
    sideBar.position = args.event.target.id === "left" ? "Left" : "Right";
    if (args.event.target.id === "right") {
      document.getElementById("hamburger").classList.add("e-rtl");
    }
    if (args.event.target.id === "left") {
      document.getElementById("hamburger").classList.remove("e-rtl");
    }
  }

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
            title="Test Sidebar"
            onInit={props => {
              sideBar = props._component;
            }}
          >
            Place your primary content here...
          </SfSidebar>

          <div>
            <div className="title default">Main content</div>
            <div className="sub-title">
              {" "}
              Click the button to open/close the Sidebar.
              <div style="padding:20px" className="center-align">
                <button
                  id="toggle"
                  className="e-btn e-info"
                  onClick={() => sideBar.toggle()}
                >
                  Toggle Sidebar
                </button>
              </div>
              <p>Click the radio button to switch the Sidebar position</p>
              <div className="column">
                <SfRadioButton
                  id="left"
                  label="Left"
                  name="state"
                  change={positionChange}
                ></SfRadioButton>
              </div>
              <div className="column">
                <SfRadioButton
                  id="right"
                  label="Right"
                  name="state"
                  change={positionChange}
                ></SfRadioButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
