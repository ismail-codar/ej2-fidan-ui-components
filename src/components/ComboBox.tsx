import { ComponentBase } from "../_base";
import { ComboBox, ComboBoxModel } from "@syncfusion/ej2-dropdowns";

export const SfComboBox = (props: ComboBoxModel & ComponentBase<ComboBox>) => {
  const _view = <div>{props.children}</div>;

  window.requestAnimationFrame(() => {
    let _component: ComboBox = new ComboBox(props);
    props._component = _component;
    _component.appendTo(_view);
    props && props.onInit && props.onInit(props);
  });

  return _view;
};
