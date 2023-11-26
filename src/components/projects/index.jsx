import { Container } from "../../shareComponents/share";
import ProjectCard from "./card";
import { stockHolm, nyTimes, cozShopping, portfolio } from "./projectData";

const Projects = () => {
  return (
    <Container title="PROJECTS" id="projects" bgColor="#1d809f">
      <ProjectCard projectData={stockHolm} />
      <ProjectCard projectData={nyTimes} />
      <ProjectCard projectData={portfolio} />
      <ProjectCard projectData={cozShopping} />
    </Container>
  );
};

export default Projects;
