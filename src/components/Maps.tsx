import { ComponentBase, setupComponentView } from "../_base";
import { Maps, MapsModel } from "@syncfusion/ej2-maps";

export const SfMaps = (props: MapsModel & ComponentBase<Maps>) => {
  const _view = <div>{props.children}</div>;
  setupComponentView(_view, props, Maps);
  return _view;
};
