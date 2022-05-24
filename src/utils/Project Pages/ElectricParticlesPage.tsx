import { projectDataInterface } from "../projects";
import ElectricParticles from "../sketches/electricParticles";

interface ElectricParticlesPageProps {
  data: projectDataInterface;
}

export function ElectricParticlesPage({
  data,
}: ElectricParticlesPageProps): JSX.Element {
  return (
    <section>
      <h1>{data.title}</h1>
      <ElectricParticles />
      <p>{data.artisticDesc}</p>
      <p>{data.technicalDesc}</p>
      <p>{data.reflection}</p>
      <img
        className="overviewImage"
        src={data.img[0]}
        alt={`screenshot of Electric Particles 1`}
      />
      <button onClick={() => window.open(data.url[0])}>Go To Sketch</button>
      <img
        className="overviewImage"
        src={data.img[1]}
        alt={`screenshot of Electric Particles 2`}
      />
      <button onClick={() => window.open(data.url[1])}>Go To Sketch</button>
    </section>
  );
}
