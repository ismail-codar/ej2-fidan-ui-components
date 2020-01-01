import { ComponentBase, setupComponentView } from "../_base";
import { ContextMenu, ContextMenuModel } from "@syncfusion/ej2-navigations";

export const SfContextMenu = (props: ContextMenuModel & ComponentBase<ContextMenu>) => {
  const _view = <ul />;
  setupComponentView(_view, props, ContextMenu);
  return _view;
};
