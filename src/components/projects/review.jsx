import { useDispatch } from "react-redux";
import { setReadme } from "../../reducer/readme_reducer";
import styled from "styled-components";
import { projectReview01, projectReview02 } from "../../constant/constant";
import { mediaQuery } from "../../style/globalStyle";

const ProjectReview = ({ projectData }) => {
  const reviews = projectData.review;
  const dispatch = useDispatch();

  const handleSetReadme = () => {
    dispatch(setReadme(true));
  };

  if (reviews.length === 0) {
    return null;
  } else {
    return (
      <Container>
        <div className="categoryTitle">
          <div className="titleBox">
            <span>{projectReview01}</span>
            <button onClick={handleSetReadme}>{projectReview02}</button>
          </div>
        </div>
        <ul>
          {reviews.map((review) => (
            <li key={review}>{review}</li>
          ))}
        </ul>
      </Container>
    );
  }
};

export default ProjectReview;

const Container = styled.ul`
  position: relative;
  margin-top: 28px;

  .categoryTitle {
    font-size: 24px;
    padding-bottom: 18px;
    font-weight: 600;

    ${mediaQuery.min} {
      font-size: 16px;
    }

    .titleBox {
      display: flex;
      align-items: center;
      gap: 8px;
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
  }

  & button {
    font-size: 13px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: 600;
    background-color: #222222;
    color: white;
    padding: 7px 12px 6px 12px;
    margin-bottom: 2.2px;
    border: none;
    border-radius: 0.25rem;

    ${mediaQuery.min} {
      font-size: 10px;
    }

    &:hover {
      cursor: pointer;
      background-color: #464646;
      transition: background-color 0.3s ease-in;
    }
  }
`;
