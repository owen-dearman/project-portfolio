import { useEffect } from "react";
import { projectDataInterface } from "../projects";

interface CorpsquadPageProps {
  data: projectDataInterface;
}

export function CorpsquadPage({ data }: CorpsquadPageProps): JSX.Element {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="projectContainer">
      <h1 className="projectTitle">{data.title}</h1>
      <img style={{ width: "60%" }} alt={`${data.title}`} src={data.img[0]} />
      <p>{data.instructions}</p>
      <div style={{ width: "70%" }}>
        <p>{data.artisticDesc}</p>
        <p>{data.technicalDesc}</p>
        <p>{data.reflection}</p>
      </div>
      <button onClick={() => window.open(data.url[0])}>Go To App</button>
      <button onClick={() => window.open(data.url[1])}>Go To GitHub</button>
    </section>
  );
}
