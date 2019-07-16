import { Tab, TabModel } from "@syncfusion/ej2-navigations";

import { ComponentBase } from "../_base";

export const SfTab = (props: TabModel & ComponentBase) => {
  const _view = <div />;

  let _component: Tab = new Tab(props);
    _component.appendTo(_view);
    props.onInit && props.onInit(props);

  return _view;
};
