import { ComponentBase, setupComponentView } from "../_base";
import { BarcodeGenerator, BarcodeGeneratorModel } from "@syncfusion/ej2-barcode-generator";

export const SfBarcodeGenerator = (props: BarcodeGeneratorModel & ComponentBase<BarcodeGenerator>) => {
  const _view = <div id={props.id || Math.random()}>{props.children}</div>;
  setupComponentView(_view, props, BarcodeGenerator);
  return _view;
};
