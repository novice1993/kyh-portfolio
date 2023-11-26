import styled from "styled-components";
import {
  projectOverview01,
  projectOverview02,
  projectOverview03,
  projectOverview04,
  projectOverview05,
} from "../../constant/constant";
import { mediaQuery } from "../../style/mediaQuery";

const ProjectOverview = ({ projectData }) => {
  const description = projectData.description;
  const duration = projectData.duration;
  const member = projectData.member;
  const links = projectData.link;
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
          <ul className="durationAndMember">
            <li>{duration}</li>
            <li>{member}</li>
          </ul>
        </div>

        <div>
          <span>{projectOverview04}</span>
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

        <div>
          <span>{projectOverview05}</span>
          <ul className="link">
            {links.map((link) => {
              return (
                <a key={link.name} href={link.url} target="_blank" rel="noreferrer">
                  <li>{link.name}</li>
                </a>
              );
            })}
          </ul>
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
    color: #716c6c;
  }

  .description {
    /* ${mediaQuery.description} {
      font-size: 14px;
    }

    ${mediaQuery.projects} {
      font-size: 16px;
    } */

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

  & a {
    color: #222222;
    text-decoration: none;
    transition: color 0.3s ease;
    color: #716c6c;
    &:hover {
      color: #1d809f;
    }
  }
`;
