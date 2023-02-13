import Project from "../components/project-cards/Index";
import DynamicWelcomeNote from "../components/dynamic-welcome-note/Index";
//@ts-ignore
import ProjetBackground from "../assets/projects.jpg";

const Projects = () => {
  return (
    <>
      <DynamicWelcomeNote
        heading="MY PROJECTS."
        text="Some of my most recent works."
        background={ProjetBackground}
      />
      <Project />
    </>
  );
};

export default Projects;
