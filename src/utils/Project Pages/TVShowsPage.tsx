import { useEffect } from "react";
import { projectDataInterface } from "../projects";

interface TVShowsPageProps {
  data: projectDataInterface;
}

export function TVShowsPage({ data }: TVShowsPageProps): JSX.Element {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="projectContainer">
      <h1 className="projectTitle">{data.title}</h1>
      <img
        style={{ width: "60%" }}
        alt={`image of ${data.title}`}
        src={data.img[0]}
      />
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
