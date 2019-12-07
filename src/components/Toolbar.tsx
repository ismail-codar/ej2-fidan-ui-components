import { ComponentBase } from "../_base";
import { Toolbar, ToolbarModel } from "@syncfusion/ej2-navigations";

export const SfToolbar = (props: ToolbarModel & ComponentBase<Toolbar>) => {
  const _view = <div>{props.children}</div>;

  let _component: Toolbar = new Toolbar(props);
    props._component = _component;
    props._view = _view;
    _component.appendTo(_view);
    props && props.onInit && props.onInit(props);

  return _view;
};
