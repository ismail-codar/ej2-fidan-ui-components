import { DropDownList, DropDownListModel } from "@syncfusion/ej2-dropdowns";

import { ComponentBase } from "../_base";

export const SfDropDownList = (props: DropDownListModel & ComponentBase<DropDownList>) => {
  const _view = <div>{props.children}</div>;

  let _component: DropDownList = new DropDownList(props);
    _component.appendTo(_view);
    props.component = _component;
    props && props.onInit && props.onInit(props);

  return _view;
};