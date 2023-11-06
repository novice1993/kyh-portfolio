import styled from "styled-components";
import Screenshot from "./screenshot";
import ProjectOverview from "./overview";
import ProjectLink from "./link";
import ProjectRoll from "./roll";
import ProjectReview from "./review";

const ProjectCard = () => {
  return (
    <Container>
      <Screenshot />
      <div className="description">
        <ProjectOverview />
        <ProjectLink />
        <ProjectRoll />
        <ProjectReview />
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
