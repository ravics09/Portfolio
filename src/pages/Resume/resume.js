/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import QRCode from "react-qr-code";

import pdf from "../../assets/../assets/MEARN Full Stack Developer.pdf";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  const [width, setWidth] = useState(900);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <Container fluid className="resume-section">
      <Row className="resume-header">
        <div className="d-flex justify-content-center resume-header-content">
          <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
            {[...Array(numPages).keys()].map((pageIndex) => (
              <div key={pageIndex} style={{ borderBottom: "1px solid black" }}>
                <Page
                  key={`page_${pageIndex + 1}`}
                  pageNumber={pageIndex + 1}
                  scale={width > 800 ? 0.5 : 0.8}
                  renderAnnotationLayer={false}
                  renderTextLayer={false}
                  width={window.innerWidth}
                />
              </div>
            ))}
          </Document>
        </div>
      </Row>
      <Row className="resume-footer">
        <div className="resume-footer-content">
          <div style={{ display: "flex", alignItems: "center" }}>
            <Button
              variant="primary"
              href={process.env.REACT_APP_RESUME_LINK}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </div>
          <div>
            <QRCode size={200} value={process.env.REACT_APP_RESUME_LINK} />
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default Resume;
