import { ListView, ListViewModel } from "@syncfusion/ej2-lists";

import { ComponentBase } from "../_base";

export const SfListView = (props: ListViewModel & ComponentBase<ListView>) => {
  const _view = <div>{props.children}</div>;

  let _component: ListView = new ListView(props);
    _component.appendTo(_view);
    props.component = _component;
    props && props.onInit && props.onInit(props);

  return _view;
};
