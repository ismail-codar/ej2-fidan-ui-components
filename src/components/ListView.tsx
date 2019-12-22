import { ComponentBase } from "../_base";
import { ListView, ListViewModel } from "@syncfusion/ej2-lists";

export const SfListView = (props: ListViewModel & ComponentBase<ListView>) => {
  const _view = <div>{props.children}</div>;

  let _component: ListView = new ListView(props);
    props._component = _component;
    props._view = _view;
    _component.appendTo(_view);
    props && props.didMount && props.didMount(props);

  return _view;
};
