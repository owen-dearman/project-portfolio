import { useEffect } from "react";
import { imageLinkConversion } from "../imageLinkToOb";
import { projectDataInterface } from "../projects";
import { SketchButtons } from "../sketchButtons";
import CirclePacking from "../sketches/circlePacking";

interface CirclePackingPageProps {
  data: projectDataInterface;
}

export function CirclePackingPage({
  data,
}: CirclePackingPageProps): JSX.Element {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="projectContainer">
      <h1 className="projectTitle">{data.title}</h1>
      <CirclePacking />
      <div style={{ width: "70%" }}>
        <p>{data.artisticDesc}</p>
        <p>{data.technicalDesc}</p>
        <p>{data.reflection}</p>
      </div>
      <SketchButtons data={imageLinkConversion(data.img, data.url)} />
    </section>
  );
}
