import { useEffect } from "react";
import { navOptions, projectOptions } from "../App";
import { BabyNamesPage } from "../utils/Project Pages/BabyNamesPage";
import { BattordlePage } from "../utils/Project Pages/BattordlePage";
import { CirclePackingPage } from "../utils/Project Pages/CirclePackingPage";
import { ElectricParticlesPage } from "../utils/Project Pages/ElectricParticlesPage";
import { FireworksPage } from "../utils/Project Pages/FireworksPage";
import { InfiniteCityPage } from "../utils/Project Pages/InfiniteCityPage";
import { ObjectManipulationPage } from "../utils/Project Pages/ObjectManipulationPage";
import { PastebinPage } from "../utils/Project Pages/PastebinPage";
import { PlanetOrbitsPage } from "../utils/Project Pages/PlanetOrbitsPage";
import { PosenetPage } from "../utils/Project Pages/PosenetPage";
import { PrintArtPage } from "../utils/Project Pages/PrintArtPage";
import { RotatingTumblersPage } from "../utils/Project Pages/RotatingTumblersPage";
import { StarfieldPage } from "../utils/Project Pages/StarfieldPage";
import { ThreeDCubePage } from "../utils/Project Pages/ThreeDCubePage";
import { TrailDrawingPage } from "../utils/Project Pages/TrailDrawingPage";
import { TVShowsPage } from "../utils/Project Pages/TVShowsPage";
import { WormOlympicsPage } from "../utils/Project Pages/WormOlympicsPage";
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
      {projectPage === "Worm Olympics" && (
        <WormOlympicsPage data={projectInformation[10]} />
      )}
      {projectPage === "Fireworks" && (
        <FireworksPage data={projectInformation[11]} />
      )}
      {projectPage === "Starfield" && (
        <StarfieldPage data={projectInformation[12]} />
      )}
      {projectPage === "Infinite City Driver" && (
        <InfiniteCityPage data={projectInformation[13]} />
      )}
      {projectPage === "Planet Orbits" && (
        <PlanetOrbitsPage data={projectInformation[14]} />
      )}
      {projectPage === "Object Manipulation" && (
        <ObjectManipulationPage data={projectInformation[15]} />
      )}
      {projectPage === "Posenet Glasses" && (
        <PosenetPage data={projectInformation[16]} />
      )}
      {projectPage === "Pastebin App" && (
        <PastebinPage data={projectInformation[17]} />
      )}
    </>
  );
}
