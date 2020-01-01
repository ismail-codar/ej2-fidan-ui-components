import { ComponentBase, setupComponentView } from "../_base";
import { Tab, TabModel } from "@syncfusion/ej2-navigations";

export const SfTab = (props: TabModel & ComponentBase<Tab>) => {
  const _view = <div>{props.children}</div>;
  setupComponentView(_view, props, Tab);
  return _view;
};
