import { PdfViewer, PdfViewerModel } from "@syncfusion/ej2-pdfviewer";

import { ComponentBase } from "../_base";

export const SfPdfViewer = (props: PdfViewerModel & ComponentBase) => {
  const _view = <div>{props.children}</div>;

  let _component: PdfViewer = new PdfViewer(props);
    _component.appendTo(_view);
    props && props.onInit && props.onInit(props);

  return _view;
};
