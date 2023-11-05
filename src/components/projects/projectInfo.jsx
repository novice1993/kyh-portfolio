import styled from "styled-components";

const ProjectInfo = () => {
  return (
    <Container>
      <div className="categoryTitle">☑️ 링크</div>
      <li>
        <div className="categoryBox">
          <div className="category"> 배포 링크 바로 가기</div>
        </div>
      </li>
      {/* <li>
        <div className="categoryBox">
          <div className="category"> 제작 기간</div>
          <div>1주일</div>
        </div>
      </li>
      <li>
        <div className="categoryBox">
          <div className="category"> 참여 인원</div>
          <div>7명</div>
        </div>
      </li>
      <li>
        <div className="categoryBox">
          <div className="category"> 기술 스택</div>
          <div className="stack">
            <img src="https://img.shields.io/badge/TypeScript-yellow.svg?&style=for-the-badge&logo=typescript&logoColor=#3178C6" />
            <img src="https://img.shields.io/badge/React-darkgreen.svg?&style=for-the-badge&logo=react&logoColor=#61DAFB" />
            <img src="https://img.shields.io/badge/Redux-purple.svg?&style=for-the-badge&logo=redux&logoColor=#764ABC" />
            <img src="https://img.shields.io/badge/styled components-darkgray.svg?&style=for-the-badge&logo=styledcomponents&logoColor=#DB7093" />
          </div>
        </div>
      </li> */}
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
    </Container>
  );
};

export default ProjectInfo;

const Container = styled.ul`
  padding-top: 28px;
  padding-bottom: 28px;
  border-bottom: 1px solid darkgray;
  display: flex;
  flex-direction: column;
  gap: 10px;

  .categoryTitle {
    font-size: 24px;
    padding-bottom: 8px;
  }

  & li {
    margin-left: 28px;
  }

  .categoryBox {
    display: flex;
  }

  .category {
    /* font-weight: 700; */
  }

  .stack {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 6px;
  }
`;
