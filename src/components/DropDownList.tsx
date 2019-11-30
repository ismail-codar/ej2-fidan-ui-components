import { DropDownList, DropDownListModel } from "@syncfusion/ej2-dropdowns";

import { ComponentBase } from "../_base";

export const SfDropDownList = (props: DropDownListModel & ComponentBase<DropDownList>) => {
  const _view = <div>{props.children}</div>;

  let _component: DropDownList = new DropDownList(props);
    props._component = _component;
    props._view = _view;
    _component.appendTo(_view);
    props && props.onInit && props.onInit(props);

  return _view;
};
