import { ListView, ListViewModel } from "@syncfusion/ej2-lists";

import { ComponentBase } from "../_base";

export const SfListView = (props: ListViewModel & ComponentBase) => {
  const _view = <div>{props.children}</div>;

  let _component: ListView = new ListView(props);
    _component.appendTo(_view);
    props && props.onInit && props.onInit(props);

  return _view;
};
