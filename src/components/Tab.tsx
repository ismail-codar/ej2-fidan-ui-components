import { Tab, TabModel } from "@syncfusion/ej2-navigations";

import { ComponentBase } from "../_base";

export const SfTab = (props: TabModel & ComponentBase<Tab>) => {
  const _view = <div>{props.children}</div>;

  let _component: Tab = new Tab(props);
    _component.appendTo(_view);
    props.component = _component;
    props && props.onInit && props.onInit(props);

  return _view;
};
