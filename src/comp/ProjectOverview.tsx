import { navOptions, projectOptions } from "../App";
import { projectDataInterface } from "../utils/projects";

interface ProjectOverviewProps {
  data: projectDataInterface;
  setProjectPage: (arg0: projectOptions) => void;
  setNav: (arg0: navOptions) => void;
}

export function ProjectOverview(props: ProjectOverviewProps): JSX.Element {
  const tagsMap = props.data.tags.map((x) => (
    <div className="tag" key={x}>
      {x}
    </div>
  ));

  return (
    <div className="projectOverviewContainer">
      <h1 className="projectTitle">{props.data.title}</h1>
      <img
        className="overviewImage"
        src={props.data.img[0]}
        alt={`Screenshot of ${props.data.title}`}
      />
      <p>{props.data.artisticDesc}</p>
      <button onClick={() => window.open(props.data.url[0])}>
        Go To Project{" "}
      </button>
      <p>Tags:{tagsMap}</p>
      <button
        onClick={() => {
          props.setNav("projects");
          props.setProjectPage(props.data.project);
        }}
      >
        See More
      </button>
    </div>
  );
}
