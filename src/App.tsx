import { useState } from "react";
import { Biography } from "./comp/Biography";
import { Footer } from "./comp/Footer";
import { Header } from "./comp/Header";
import { NavBar } from "./comp/NavBar";
import { Preview } from "./comp/Preview";
import { ProjectList } from "./comp/ProjectList";
import { ProjectPage } from "./comp/ProjectPage";

export type navOptions = "home" | "bio" | "projectOverview" | "projects";
export type projectOptions =
  | ""
  | "Electric Particles"
  | "Print Art"
  | "Circle Packing"
  | "Single Worm Walker"
  | "Rotating Tumblers"
  | "4 Way Symmetry"
  | "3D Box With Spheres"
  | "Rainbow Trail";

function App(): JSX.Element {
  const [nav, setNav] = useState<navOptions>("home");
  const [projectPage, setProjectPage] = useState<projectOptions>("");

  return (
    <>
      <Header />
      <NavBar setNav={setNav} />
      {nav === "home" && (
        <Preview setNav={setNav} setProjectPage={setProjectPage} />
      )}
      {nav === "bio" && <Biography />}
      {nav === "projectOverview" && (
        <ProjectList setProjectPage={setProjectPage} setNav={setNav} />
      )}
      {nav === "projects" && (
        <ProjectPage projectPage={projectPage} setNav={setNav} />
      )}
      <Footer />
    </>
  );
}

export default App;
