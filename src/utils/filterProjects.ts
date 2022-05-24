import { projectDataInterface } from "./projects";

export function filterProjects(
  project: projectDataInterface,
  searchInput: string
): boolean {
  const matchTitle = project.title
    .toUpperCase()
    .includes(searchInput.toUpperCase());
  const matchDesc = project.artisticDesc
    .toUpperCase()
    .includes(searchInput.toUpperCase());
  for (const tag of project.tags) {
    if (tag.toUpperCase().includes(searchInput.toUpperCase())) {
      return true;
    }
  }
  return matchTitle || matchDesc;
}
