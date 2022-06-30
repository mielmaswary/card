import React from "react";
import { useRef } from "react";

import "@progress/kendo-theme-material/dist/all.css";
import { Button } from "@progress/kendo-react-buttons";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";

const Pdf = () => {
  const clickHandleWithComponent = () => {
    pdfExportComponent.current.save();
  };
  const pdfExportComponent = useRef(null);

  return (
    <div className="row example-wrapper">
      <PDFExport ref={pdfExportComponent} PaperSize="A4">
        <h1>Hello</h1>
        <p></p>
      </PDFExport>

      <div
        className="btn-container col-xs-12 col-sm-6 example-col"
        onClick={clickHandleWithComponent}
      >
        <Button>Browse</Button>
      </div>
    </div>
  );
};

export default Pdf;
