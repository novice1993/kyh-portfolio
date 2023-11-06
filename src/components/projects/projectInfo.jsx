import styled from "styled-components";

const ProjectInfo = () => {
  return (
    <Container>
      <div className="categoryTitle">☑️ 링크</div>
      <ul>
        <li>
          <div className="categoryBox">
            <div className="category"> 배포 링크 바로 가기</div>
          </div>
        </li>
        <li>
          <div className="categoryBox">
            <div className="category">깃허브 링크 바로 가기</div>
          </div>
        </li>
        <li>
          <div className="categoryBox">
            <div className="category">회고 링크 바로 가기</div>
          </div>
        </li>
      </ul>
    </Container>
  );
};

export default ProjectInfo;

const Container = styled.ul`
  padding-top: 28px;
  padding-bottom: 28px;
  border-bottom: 1px solid darkgray;

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
