import { FileManager, FileManagerModel } from "@syncfusion/ej2-filemanager";

import { ComponentBase } from "../_base";

export const SfFileManager = (props: FileManagerModel & ComponentBase<FileManager>) => {
  const _view = <div>{props.children}</div>;

  let _component: FileManager = new FileManager(props);
    _component.appendTo(_view);
    props.component = _component;
    props && props.onInit && props.onInit(props);

  return _view;
};
