import styled from "styled-components";
import {
  projectOverview01,
  projectOverview02,
  projectOverview03,
  projectOverview04,
  projectOverview05,
} from "../../constant/constant";
import { mediaQuery } from "../../style/globalStyle";

const ProjectOverview = ({ projectData }) => {
  const description = projectData.description;
  const duration = projectData.duration;
  const member = projectData.member;
  const stacks = projectData.stack;

  return (
    <Container>
      <div className="categoryTitle">{projectOverview01}</div>
      <div className="category">
        <div>
          <span>{projectOverview02}</span>
          <ul className="description">
            {description.map((text) => (
              <li key={text}>{text}</li>
            ))}
          </ul>
        </div>

        <div>
          <span>{projectOverview03}</span>
          <ul>
            <li>{duration}</li>
          </ul>
        </div>

        <div>
          <span>{projectOverview04}</span>
          <ul>
            <li>{member}</li>
          </ul>
        </div>

        <div>
          <span>{projectOverview05}</span>
          <div className="stack">
            {stacks.map((stack) => {
              const name = stack.name;
              const logo = stack.logo;

              return (
                <img
                  key={name}
                  src={`https://img.shields.io/badge/${name}.svg?&style=for-the-badge&logo=${logo}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProjectOverview;

const Container = styled.div`
  padding-bottom: 28px;
  border-bottom: 1px solid darkgray;

  .categoryTitle {
    font-size: 24px;
    padding-bottom: 18px;
    font-weight: 600;

    ${mediaQuery.min} {
      font-size: 16px;
    }
  }

  .category {
    display: flex;
    flex-direction: column;
    gap: 28px;

    ${mediaQuery.min} {
      font-size: 14px;
    }

    & div {
      margin-left: 6px;
    }
  }

  & span {
    font-size: 18px;
    font-weight: 550;

    ${mediaQuery.min} {
      font-size: 15px;
    }
  }

  & ul {
    margin-top: 4px;
    margin-left: 28px;
    display: flex;
    flex-direction: column;
    white-space: pre-wrap;
  }

  .description {
    ${mediaQuery.description} {
      font-size: 14px;
    }

    ${mediaQuery.projects} {
      font-size: 16px;
    }

    ${mediaQuery.min} {
      font-size: 14px;
    }
  }

  & li {
    line-height: 26px;
  }

  .stack {
    padding-left: 4px;
    margin-top: 12px;
    display: flex;
    flex-wrap: wrap;
    gap: 3px;
  }
`;
