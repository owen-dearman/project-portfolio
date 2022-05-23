import { useState } from "react";

export function ProjectList(): JSX.Element {
  const [searchInput, setSearchInput] = useState<string>();
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
      <button>Newest</button>
      <button>Alphabetical</button>
      <h3 style={{ textAlign: "center" }}>Number Of Projects: {}</h3>
    </section>
  );
}
