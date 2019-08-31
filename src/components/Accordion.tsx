import { Accordion, AccordionModel } from "@syncfusion/ej2-navigations";

import { ComponentBase } from "../_base";

export const SfAccordion = (props: AccordionModel & ComponentBase<Accordion>) => {
  const _view = <div>{props.children}</div>;

  let _component: Accordion = new Accordion(props);
    _component.appendTo(_view);
    props.component = _component;
    props && props.onInit && props.onInit(props);

  return _view;
};
