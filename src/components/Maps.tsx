import { Maps, MapsModel } from "@syncfusion/ej2-maps";

import { ComponentBase } from "../_base";

export const SfMaps = (props: MapsModel & ComponentBase<Maps>) => {
  const _view = <div>{props.children}</div>;

  let _component: Maps = new Maps(props);
    props._component = _component;
    props._view = _view;
    _component.appendTo(_view);
    props && props.onInit && props.onInit(props);

  return _view;
};
