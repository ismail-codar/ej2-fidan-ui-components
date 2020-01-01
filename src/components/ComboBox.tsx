import { ComponentBase, setupComponentView } from "../_base";
import { ComboBox, ComboBoxModel } from "@syncfusion/ej2-dropdowns";

export const SfComboBox = (props: ComboBoxModel & ComponentBase<ComboBox>) => {
  const _view = <div>{props.children}</div>;
  setupComponentView(_view, props, ComboBox);
  return _view;
};
