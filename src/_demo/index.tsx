import { SfButton } from "../components/Button";

const view1: any = (
  <div>
    <SfButton isPrimary={true}>Test</SfButton>
  </div>
);

const appMain = document.getElementById("app");
appMain.appendChild(view1);
