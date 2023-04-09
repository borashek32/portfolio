import WebViewer from "@pdftron/webviewer";
import {useEffect, useRef} from "react";


export const PdfViewerComponent = () => {

  const viewer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    WebViewer(
      {
        path: 'lib',
        initialDoc: './cv.pdf',
      },
      viewer.current as HTMLDivElement,
    )
      .then((instance) => {
        const {documentViewer} = instance.Core;
      });
  }, []);

  return (
    <div className="webviewer" ref={viewer} style={{height: "100vh"}}></div>
  )
}