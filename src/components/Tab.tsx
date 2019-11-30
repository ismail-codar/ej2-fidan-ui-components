import { Tab, TabModel } from "@syncfusion/ej2-navigations";

import { ComponentBase } from "../_base";

export const SfTab = (props: TabModel & ComponentBase<Tab>) => {
  const _view = <div>{props.children}</div>;

  let _component: Tab = new Tab(props);
    props._component = _component;
    props._view = _view;
    _component.appendTo(_view);
    props && props.onInit && props.onInit(props);

  return _view;
};
