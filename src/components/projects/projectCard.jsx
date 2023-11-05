import styled from "styled-components";
import Screenshot from "./screenshot";
import ProjectOverview from "./projectOverview";
import ProjectInfo from "./projectInfo";
import ProjectRoll from "./projectRoll";

const ProjectCard = () => {
  return (
    <Container>
      <Screenshot />
      <div className="description">
        <ProjectOverview />
        <ProjectInfo />
        <ProjectRoll />
      </div>
    </Container>
  );
};

export default ProjectCard;

const Container = styled.div`
  background-color: #f5f5f5;
  border-radius: 0.4rem;

  height: 100%;
  padding: 48px;

  margin-top: 48px;
  display: flex;
  gap: 48px;

  .description {
    display: flex;
    flex-direction: column;
  }
`;
