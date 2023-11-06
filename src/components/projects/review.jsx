import { useDispatch } from "react-redux";
import { setReadme } from "../../reducer/readme_reducer";
import styled from "styled-components";

const ProjectReview = () => {
  const dispatch = useDispatch();

  const handleSetReadme = () => {
    dispatch(setReadme(true));
  };

  return (
    <Container>
      <div className="categoryTitle">
        <div className="titleBox">
          <span>☑️ 문제점 및 해결방안</span>
          <button onClick={handleSetReadme}>자세히 보기 ▶︎ README</button>
        </div>
      </div>
      <ul>
        <li>
          <div>
            <span>폴더 구조 잡기</span>
          </div>
        </li>
        <li>코드 가독성 증진</li>
      </ul>
    </Container>
  );
};

export default ProjectReview;

const Container = styled.ul`
  position: relative;
  margin-top: 28px;

  .categoryTitle {
    font-size: 24px;
    padding-bottom: 18px;
    font-weight: 600;

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

    &:hover {
      cursor: pointer;
      background-color: #464646;
      transition: background-color 0.3s ease-in;
    }
  }
`;
