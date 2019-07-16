import { BarcodeGenerator, BarcodeGeneratorModel } from "@syncfusion/ej2-barcode-generator";

import { ComponentBase } from "../_base";

export const SfBarcodeGenerator = (props: BarcodeGeneratorModel & ComponentBase) => {
  const _view = <div id={props.id || Math.random()} />;

  window.requestAnimationFrame(() => {
    let _component: BarcodeGenerator = new BarcodeGenerator(props);
    _component.appendTo(_view);
    props && props.onInit && props.onInit(props);
  });

  return _view;
};
