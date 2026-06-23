import Header01 from "./Header01";
import CreateProjectHeader67 from "./CreateProjectHeader67";
import CreateProjectForm68 from "./CreateProjectForm68";
import ProjectInsights69 from "./ProjectInsights69";
import VisibilitySettings72 from "./VisibilitySettings72";
import AISuggestions70 from "./AISuggestions70";

function ProjectSetupPage({ darkMode, toggleTheme }) {
  return (
    <>
      <Header01
        darkMode={darkMode}
        toggleTheme={toggleTheme}
      />

      <CreateProjectHeader67 />
      <CreateProjectForm68 />
        <ProjectInsights69 />
        <VisibilitySettings72 />
        <AISuggestions70 />
    </>
  );
}

export default ProjectSetupPage;