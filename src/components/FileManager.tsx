import { ComponentBase } from "../_base";
import { FileManager, FileManagerModel } from "@syncfusion/ej2-filemanager";

export const SfFileManager = (props: FileManagerModel & ComponentBase<FileManager>) => {
  const _view = <div>{props.children}</div>;

  let _component: FileManager = new FileManager(props);
    props._component = _component;
    props._view = _view;
    _component.appendTo(_view);
    props && props.onInit && props.onInit(props);

  return _view;
};
