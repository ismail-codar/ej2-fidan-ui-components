import { Accordion, AccordionModel } from "@syncfusion/ej2-navigations";

import { ComponentBase } from "../_base";

export const SfAccordion = (props: AccordionModel & ComponentBase<Accordion>) => {
  const _view = <div>{props.children}</div>;

  let _component: Accordion = new Accordion(props);
    props._component = _component;
    props._view = _view;
    props && props.onInit && props.onInit(props);
    _component.appendTo(_view);

  return _view;
};
