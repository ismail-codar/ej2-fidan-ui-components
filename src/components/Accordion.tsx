import { ComponentBase } from "../_base";
import { Accordion, AccordionModel } from "@syncfusion/ej2-navigations";

export const SfAccordion = (props: AccordionModel & ComponentBase<Accordion>) => {
  const _view = <div>{props.children}</div>;

  let _component: Accordion = new Accordion(props);
    props._component = _component;
    props._view = _view;
    _component.appendTo(_view);
    props && props.onInit && props.onInit(props);

  return _view;
};
