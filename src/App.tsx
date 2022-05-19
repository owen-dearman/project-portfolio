import { useState } from "react";
import { Biography } from "./comp/Biography";
import { Footer } from "./comp/Footer";
import { Header } from "./comp/Header";
import { NavBar } from "./comp/NavBar";
import { ProjectList } from "./comp/ProjectList";

export type navOptions = "home" | "bio" | "projects";

function App(): JSX.Element {
  const [nav, setNav] = useState<navOptions>("home");

  return (
    <>
      <Header />
      <NavBar setNav={setNav} />
      {nav === "bio" && <Biography />}
      {nav === "projects" && <ProjectList />}
      <Footer />
    </>
  );
}

export default App;
