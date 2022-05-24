import { imageLinkConversion } from "../imageLinkToOb";
import { projectDataInterface } from "../projects";
import { SketchButtons } from "../sketchButtons";
import ElectricParticles from "../sketches/electricParticles";

interface ElectricParticlesPageProps {
  data: projectDataInterface;
}

export function ElectricParticlesPage({
  data,
}: ElectricParticlesPageProps): JSX.Element {
  return (
    <section className="projectContainer">
      <h1 className="projectTitle">{data.title}</h1>
      <ElectricParticles />
      <p>Instructions: {data.instructions}</p>
      <p>{data.artisticDesc}</p>
      <p>{data.technicalDesc}</p>
      <p>{data.reflection}</p>
      <SketchButtons data={imageLinkConversion(data.img, data.url)} />
    </section>
  );
}
