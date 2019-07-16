import { ComboBox, ComboBoxModel } from "@syncfusion/ej2-dropdowns";

import { ComponentBase } from "../_base";

export const SfComboBox = (props: ComboBoxModel & ComponentBase) => {
  const _view = <div />;

  window.requestAnimationFrame(() => {
    let _component: ComboBox = new ComboBox(props);
    _component.appendTo(_view);
    props && props.onInit && props.onInit(props);
  });

  return _view;
};
