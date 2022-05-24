import { useEffect, useState } from "react";
import { navOptions, projectOptions } from "../App";
import { projectDataInterface, projectInformation } from "../utils/projects";
import { ProjectOverview } from "./ProjectOverview";

interface ProjectListProps {
  setProjectPage: (arg0: projectOptions) => void;
  setNav: (arg0: navOptions) => void;
}

export function ProjectList({
  setProjectPage,
  setNav,
}: ProjectListProps): JSX.Element {
  const [searchInput, setSearchInput] = useState<string>("");
  const [projects, setProjects] = useState<projectDataInterface[]>([]);

  useEffect(() => {
    function fetchProjectData() {
      const data = projectInformation;
      setProjects(data);
    }
    fetchProjectData();
  });

  const projectOverviews = projects.map((p) => (
    <ProjectOverview
      key={p.id}
      data={p}
      setProjectPage={setProjectPage}
      setNav={setNav}
    />
  ));

  return (
    <section>
      <h3 style={{ textAlign: "center" }}>Search Featured Projects</h3>
      <input
        className="searchBar"
        type="text"
        value={searchInput}
        placeholder="Search Here"
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button onClick={() => setSearchInput("")}>Clear Search</button>
      <button>Alphabetical</button>
      <h3 style={{ textAlign: "center" }}>
        Number Of Projects: {projectOverviews.length}
      </h3>
      <div>{projectOverviews}</div>
    </section>
  );
}
