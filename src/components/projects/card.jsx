import styled from "styled-components";
import Screenshot from "./screenshot";
import ProjectOverview from "./overview";
import ProjectLink from "./link";
import ProjectRoll from "./roll";
import ProjectReview from "./review";
import { mediaQuery } from "../../style/mediaQuery";

const ProjectCard = ({ projectData }) => {
  return (
    <Container>
      <Screenshot projectData={projectData} />
      <div className="description">
        <ProjectOverview projectData={projectData} />
        <ProjectLink projectData={projectData} />
        <ProjectRoll projectData={projectData} />
        <ProjectReview projectData={projectData} />
      </div>
    </Container>
  );
};

export default ProjectCard;

const Container = styled.div`
  background-color: #f5f5f5;
  border-radius: 0.4rem;
  max-width: 67vw;

  ${mediaQuery.description} {
    max-width: 73vw;
  }

  height: 100%;
  padding: 48px;

  margin-top: 48px;
  display: flex;
  gap: 48px;

  ${mediaQuery.projects} {
    flex-direction: column;
  }

  .description {
    display: flex;
    flex-direction: column;
  }
`;
