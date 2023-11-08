import { Container } from "../../shareComponents/share";
import ProjectCard from "./card";
import { stockHolm, cozShopping, portfolio } from "./projectData";

const Projects = () => {
  return (
    <Container title="PROJECTS" id="projects" bgColor="#1d809f">
      <ProjectCard projectData={stockHolm} />
      <ProjectCard projectData={cozShopping} />
      <ProjectCard projectData={portfolio} />
    </Container>
  );
};

export default Projects;
