import { ComponentBase, setupComponentView } from "../_base";
import { PdfViewer, PdfViewerModel } from "@syncfusion/ej2-pdfviewer";

export const SfPdfViewer = (props: PdfViewerModel & ComponentBase<PdfViewer>) => {
  const _view = <div>{props.children}</div>;
  setupComponentView(_view, props, PdfViewer);
  return _view;
};
