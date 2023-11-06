import styled from "styled-components";
import { projectRoll } from "../../constant/constant";

const ProjectRoll = ({ projectData }) => {
  const rolls = projectData.roll;
  const review = projectData.review;

  return (
    <Container review={review.length}>
      <div className="categoryTitle">{projectRoll}</div>
      <ul>
        {rolls.map((roll) => (
          <li key={roll}>{roll}</li>
        ))}
      </ul>
    </Container>
  );
};

export default ProjectRoll;

const Container = styled.ul`
  position: relative;
  margin-top: 28px;
  padding-bottom: 28px;
  border-bottom: ${(props) => (props.review === 0 ? "none" : "1px solid darkgray")};

  .categoryTitle {
    font-size: 24px;
    padding-bottom: 18px;
    font-weight: 600;
  }

  & ul {
    display: flex;
    flex-direction: column;
    list-style-type: disc;
  }

  & li {
    margin-left: 24px;
    line-height: 26px;
  }
`;
