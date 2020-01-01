import { ComponentBase, setupComponentView } from "../_base";
import { FileManager, FileManagerModel } from "@syncfusion/ej2-filemanager";

export const SfFileManager = (props: FileManagerModel & ComponentBase<FileManager>) => {
  const _view = <div>{props.children}</div>;
  setupComponentView(_view, props, FileManager);
  return _view;
};
