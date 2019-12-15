import { ComponentBase } from "../_base";
import { BarcodeGenerator, BarcodeGeneratorModel } from "@syncfusion/ej2-barcode-generator";

export const SfBarcodeGenerator = (props: BarcodeGeneratorModel & ComponentBase<BarcodeGenerator>) => {
  const _view = <div id={props.id || Math.random()}>{props.children}</div>;

  window.requestAnimationFrame(() => {
    let _component: BarcodeGenerator = new BarcodeGenerator(props);
    props._component = _component;
    _component.appendTo(_view);
    props && props.onInit && props.onInit(props);
  });

  return _view;
};
