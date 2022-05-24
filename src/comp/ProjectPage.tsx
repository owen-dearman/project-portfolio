import { navOptions, projectOptions } from "../App";
import { ElectricParticlesPage } from "../utils/Project Pages/ElectricParticlesPage";
import { PrintArtPage } from "../utils/Project Pages/PrintArtPage";
import { projectInformation } from "../utils/projects";

interface ProjectPageProps {
  projectPage: projectOptions;
  setNav: (arg0: navOptions) => void;
}

export function ProjectPage({ projectPage }: ProjectPageProps): JSX.Element {
  return (
    <>
      {projectPage === "Electric Particles" && (
        <ElectricParticlesPage data={projectInformation[0]} />
      )}
      {projectPage === "Print Art" && (
        <PrintArtPage data={projectInformation[1]} />
      )}
    </>
  );
}
