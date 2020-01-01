import { ComponentBase, setupComponentView } from "../_base";
import { Accordion, AccordionModel } from "@syncfusion/ej2-navigations";

export const SfAccordion = (props: AccordionModel & ComponentBase<Accordion>) => {
  const _view = <div>{props.children}</div>;
  setupComponentView(_view, props, Accordion);
  return _view;
};
