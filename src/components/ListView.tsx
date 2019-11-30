import { ListView, ListViewModel } from "@syncfusion/ej2-lists";

import { ComponentBase } from "../_base";

export const SfListView = (props: ListViewModel & ComponentBase<ListView>) => {
  const _view = <div>{props.children}</div>;

  let _component: ListView = new ListView(props);
    props._component = _component;
    props._view = _view;
    _component.appendTo(_view);
    props && props.onInit && props.onInit(props);

  return _view;
};
