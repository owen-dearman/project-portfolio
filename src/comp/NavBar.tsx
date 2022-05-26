import { navOptions } from "../App";

interface NavBarInt {
  setNav: (arg0: navOptions) => void;
}

export function NavBar(props: NavBarInt): JSX.Element {
  return (
    <section>
      <button onClick={() => props.setNav("home")}>Home</button>
      <button onClick={() => props.setNav("projectOverview")}>Projects</button>
      <button onClick={() => props.setNav("bio")}>Biography</button>
    </section>
  );
}
