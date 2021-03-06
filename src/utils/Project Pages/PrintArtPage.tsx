import { projectDataInterface } from "../projects";
import { imageLinkConversion } from "../imageLinkToOb";
import PrintArtAnimate from "../sketches/printArtAnimate";
import { SketchButtons } from "../sketchButtons";
import { useEffect } from "react";

interface PrintArtPageProps {
  data: projectDataInterface;
}

export function PrintArtPage({ data }: PrintArtPageProps): JSX.Element {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="projectContainer">
      <h1 className="projectTitle">{data.title}</h1>
      <PrintArtAnimate />
      <p>Instructions: {data.instructions}</p>
      <div style={{ width: "70%" }}>
        <p>{data.artisticDesc}</p>
        <p>{data.technicalDesc}</p>
        <p>{data.reflection}</p>
      </div>
      <SketchButtons data={imageLinkConversion(data.img, data.url)} />
    </section>
  );
}
