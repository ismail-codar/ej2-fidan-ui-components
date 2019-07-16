import { AutoComplete, AutoCompleteModel } from "@syncfusion/ej2-dropdowns"undefined;

import { ComponentBase } from "../_base";

export const SfAutoComplete = (props: AutoCompleteModel & ComponentBase) => {
  const _view = <input type="text" />;

  window.requestAnimationFrame(() => {
    let _component: AutoComplete = new AutoComplete(props);
    _component.appendTo(_view);
    props && props.onInit && props.onInit(props);
  });

  return _view;
};
