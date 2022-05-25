import { useEffect } from "react";
import { navOptions, projectOptions } from "../App";
import { CirclePackingPage } from "../utils/Project Pages/CirclePackingPage";
import { ElectricParticlesPage } from "../utils/Project Pages/ElectricParticlesPage";
import { PrintArtPage } from "../utils/Project Pages/PrintArtPage";
import { RotatingTumblersPage } from "../utils/Project Pages/RotatingTumblersPage";
import { ThreeDCubePage } from "../utils/Project Pages/ThreeDCubePage";
import { TrailDrawingPage } from "../utils/Project Pages/TrailDrawingPage";
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
    </>
  );
}
