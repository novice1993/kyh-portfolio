import styled from "styled-components";
import { projectLink } from "../../constant/constant";
import { mediaQuery } from "../../style/globalStyle";

const ProjectLink = ({ projectData }) => {
  const links = projectData.link;

  return (
    <Container>
      <div className="categoryTitle">{projectLink}</div>
      <ul>
        {links.map((link) => {
          const url = link.url;
          const name = link.name;

          return (
            <li key={name}>
              <a href={url} target="_blank" rel="noreferrer">
                {name}
              </a>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default ProjectLink;

const Container = styled.ul`
  padding-top: 28px;
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

  & ul {
    display: flex;
    flex-direction: column;
    list-style-type: disc;

    ${mediaQuery.min} {
      font-size: 14px;
    }
  }

  & li {
    margin-left: 24px;
    line-height: 26px;

    & a {
      color: #222222;
      text-decoration: none;
      transition: color 0.3s ease;
      &:hover {
        color: #1d809f;
      }
    }
  }
`;
