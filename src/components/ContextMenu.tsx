import { ComponentBase } from "../_base";
import { ContextMenu, ContextMenuModel } from "@syncfusion/ej2-navigations";

export const SfContextMenu = (props: ContextMenuModel & ComponentBase<ContextMenu>) => {
  const _view = <ul />;

  window.requestAnimationFrame(() => {
    let _component: ContextMenu = new ContextMenu(props);
    _component.appendTo(_view);
    props && props.onInit && props.onInit(props);
  });

  return _view;
};
