import styled from "styled-components";

const ProjectOverview = () => {
  return (
    <Container>
      <div className="categoryTitle">☑️ 개요</div>
      <ul>
        <li>
          <div className="content">
            <span>프로젝트 설명</span>
            <div>주어진 요구사항 명세서와 디자인 시안을 기반으로 제작한 쇼핑몰 사이트입니다.</div>
            <div>상품 목록 조회, 필터링, 즐겨찾기 등록/삭제 가능하며 거래는 불가합니다.</div>
          </div>
        </li>
        <li>
          <div className="content">
            <span>제작 기간</span>
            <div>✔︎ 1주일 (2023. 08)</div>
          </div>
        </li>
        <li>
          <div className="content">
            <span>참여 인원</span>
            <div>✔︎ 1명</div>
          </div>
        </li>
        <li>
          <div className="content">
            <span>기술 스택</span>
            <div className="stack">
              <img src="https://img.shields.io/badge/TypeScript-yellow.svg?&style=for-the-badge&logo=typescript&logoColor=#3178C6" />
              <img src="https://img.shields.io/badge/React-darkgreen.svg?&style=for-the-badge&logo=react&logoColor=#61DAFB" />
              <img src="https://img.shields.io/badge/Redux-purple.svg?&style=for-the-badge&logo=redux&logoColor=#764ABC" />
              <img src="https://img.shields.io/badge/styled components-darkgray.svg?&style=for-the-badge&logo=styledcomponents&logoColor=#DB7093" />
            </div>
          </div>
        </li>
      </ul>
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
  }

  & ul {
    display: flex;
    flex-direction: column;
    gap: 18px;
    margin-left: 28px;
  }

  & li {
    font-size: 15px;
  }

  & span {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 2px;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .stack {
    display: flex;
    flex-wrap: wrap;
    gap: 2px;
  }
`;
