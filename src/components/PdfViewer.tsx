import { ComponentBase } from "../_base";
import { PdfViewer, PdfViewerModel } from "@syncfusion/ej2-pdfviewer";

export const SfPdfViewer = (props: PdfViewerModel & ComponentBase<PdfViewer>) => {
  const _view = <div>{props.children}</div>;

  let _component: PdfViewer = new PdfViewer(props);
    props._component = _component;
    props._view = _view;
    _component.appendTo(_view);
    props && props.onInit && props.onInit(props);

  return _view;
};
