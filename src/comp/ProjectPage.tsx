import { navOptions, projectOptions } from "../App";
import { ElectricParticlesPage } from "../utils/Project Pages/ElectricParticlesPage";
import { projectInformation } from "../utils/projects";

interface ProjectPageProps {
  projectPage: projectOptions;
  setNav: (arg0: navOptions) => void;
}

export function ProjectPage({
  projectPage,
  setNav,
}: ProjectPageProps): JSX.Element {
  return (
    <>
      <button onClick={() => setNav("projectOverview")}>
        Back To Projects
      </button>
      {projectPage === "Electric Particles" && (
        <ElectricParticlesPage data={projectInformation[0]} />
      )}
    </>
  );
}
