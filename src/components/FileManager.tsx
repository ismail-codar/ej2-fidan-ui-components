import { FileManager, FileManagerModel } from "@syncfusion/ej2-filemanager";

import { ComponentBase } from "../_base";

export const SfFileManager = (props: FileManagerModel & ComponentBase) => {
  const _view = <div>{props.children}</div>;

  let _component: FileManager = new FileManager(props);
    _component.appendTo(_view);
    props && props.onInit && props.onInit(props);

  return _view;
};
