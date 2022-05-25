import { useEffect } from "react";
import { navOptions, projectOptions } from "../App";
import { BabyNamesPage } from "../utils/Project Pages/BabyNamesPage";
import { BattordlePage } from "../utils/Project Pages/BattordlePage";
import { CirclePackingPage } from "../utils/Project Pages/CirclePackingPage";
import { ElectricParticlesPage } from "../utils/Project Pages/ElectricParticlesPage";
import { PrintArtPage } from "../utils/Project Pages/PrintArtPage";
import { RotatingTumblersPage } from "../utils/Project Pages/RotatingTumblersPage";
import { ThreeDCubePage } from "../utils/Project Pages/ThreeDCubePage";
import { TrailDrawingPage } from "../utils/Project Pages/TrailDrawingPage";
import { TVShowsPage } from "../utils/Project Pages/TVShowsPage";
import { WormWalkerPage } from "../utils/Project Pages/WormWalkerPage";
import { projectInformation } from "../utils/projects";

interface ProjectPageProps {
  projectPage: projectOptions;
  setNav: (arg0: navOptions) => void;
}

export function ProjectPage({ projectPage }: ProjectPageProps): JSX.Element {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {projectPage === "Electric Particles" && (
        <ElectricParticlesPage data={projectInformation[0]} />
      )}
      {projectPage === "Print Art" && (
        <PrintArtPage data={projectInformation[1]} />
      )}
      {projectPage === "Single Worm Walker" && (
        <WormWalkerPage data={projectInformation[2]} />
      )}
      {projectPage === "Trail Drawing" && (
        <TrailDrawingPage data={projectInformation[3]} />
      )}
      {projectPage === "3D Box With Spheres" && (
        <ThreeDCubePage data={projectInformation[4]} />
      )}
      {projectPage === "Rotating Tumblers" && (
        <RotatingTumblersPage data={projectInformation[5]} />
      )}
      {projectPage === "Circle Packing" && (
        <CirclePackingPage data={projectInformation[6]} />
      )}
      {projectPage === "Battordle" && (
        <BattordlePage data={projectInformation[7]} />
      )}
      {projectPage === "Baby Names" && (
        <BabyNamesPage data={projectInformation[8]} />
      )}
      {projectPage === "TV Database" && (
        <TVShowsPage data={projectInformation[9]} />
      )}
    </>
  );
}
