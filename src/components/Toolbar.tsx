import { Toolbar, ToolbarModel } from "@syncfusion/ej2-navigations";

import { ComponentBase } from "../_base";

export const SfToolbar = (props: ToolbarModel & ComponentBase) => {
  const _view = <div>{props.children}</div>;

  let _component: Toolbar = new Toolbar(props);
    _component.appendTo(_view);
    props && props.onInit && props.onInit(props);

  return _view;
};
