import { useEffect, useState } from "react";
import { navOptions, projectOptions } from "../App";
import { filterProjects } from "../utils/filterProjects";
import { projectDataInterface, projectInformation } from "../utils/projects";
import { ProjectOverview } from "./ProjectOverview";

type SortType = "R" | "A";

interface ProjectListProps {
  setProjectPage: (arg0: projectOptions) => void;
  setNav: (arg0: navOptions) => void;
}

export function ProjectList({
  setProjectPage,
  setNav,
}: ProjectListProps): JSX.Element {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [searchInput, setSearchInput] = useState<string>("");
  const [projects, setProjects] = useState<projectDataInterface[]>([]);
  const [Toggle, setToggle] = useState<boolean>(false);

  useEffect(() => {
    function fetchProjectData() {
      const data = projectInformation;
      setProjects(data.sort((a, b) => a.id - b.id));
    }
    fetchProjectData();
  });

  const projectList = projects.filter((p) => filterProjects(p, searchInput));

  const projectOverviews = projectList.map((p) => (
    <ProjectOverview
      key={p.id}
      data={p}
      setProjectPage={setProjectPage}
      setNav={setNav}
    />
  ));

  function handleSort(type: SortType) {
    if (type === "R") {
      setProjects(projects.sort((a, b) => a.id - b.id));
    } else {
      setProjects(projects.sort((a, b) => a.title.localeCompare(b.title)));
    }
    setToggle(!Toggle);
  }

  return (
    <section>
      <div style={{ textAlign: "center" }}>
        <h3 style={{ textAlign: "center" }}>Search Featured Projects</h3>
        <input
          className="searchBar"
          type="text"
          value={searchInput}
          placeholder="Search Here"
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button onClick={() => setSearchInput("")}>Clear Search</button>
      </div>
      <div style={{ textAlign: "center" }}>
        <button onClick={() => handleSort("R")}> Sort Relevance</button>
        <button onClick={() => handleSort("A")}> Sort Alphabetical</button>
      </div>
      <h3 style={{ textAlign: "center" }}>
        Number Of Projects: {projectList.length}
      </h3>
      <div>{projectOverviews}</div>
    </section>
  );
}
