import styled from "styled-components";
import Screenshot from "./screenshot";
import ProjectOverview from "./overview";
import ProjectRoll from "./roll";
import ProjectReview from "./review";
import { mediaQuery } from "../../style/mediaQuery";

const ProjectCard = ({ projectData }) => {
  return (
    <Container>
      <Screenshot projectData={projectData} />
      <div className="description">
        <ProjectOverview projectData={projectData} />
        <ProjectRoll projectData={projectData} />
        <ProjectReview projectData={projectData} />
      </div>
    </Container>
  );
};

export default ProjectCard;

const Container = styled.div`
  height: 100%;
  max-width: 67vw;
  display: flex;
  flex-direction: column;

  gap: 48px;
  padding: 48px;
  margin-top: 48px;

  background-color: #f5f5f5;
  border-radius: 0.4rem;

  ${mediaQuery.description} {
    max-width: 73vw;
  }

  ${mediaQuery.projects} {
    flex-direction: column;
  }

  .description {
    display: flex;
    flex-direction: column;
  }
`;
