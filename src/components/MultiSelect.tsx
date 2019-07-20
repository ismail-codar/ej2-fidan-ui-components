import { MultiSelect, MultiSelectModel } from "@syncfusion/ej2-dropdowns";

import { ComponentBase } from "../_base";

export const SfMultiSelect = (props: MultiSelectModel & ComponentBase) => {
  const _view = <div>{props.children}</div>;

  let _component: MultiSelect = new MultiSelect(props);
    _component.appendTo(_view);
    props && props.onInit && props.onInit(props);

  return _view;
};
