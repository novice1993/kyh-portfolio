import styled from "styled-components";

const ProjectOverview = () => {
  return (
    <Container>
      <div className="categoryTitle">☑️ 개요</div>
      <div className="category">
        <div>
          <span>✔︎ 프로젝트 설명</span>
          <ul>
            <li>요구사항 명세서와 디자인 시안 기반으로 제작한 쇼핑몰 사이트입니다</li>
            <li>총 3개의 페이지로 구성되어 있습니다 (메인, 상품 리스트, 즐겨찾기)</li>
            <li> 전체 상품 조회, 카테고리 별 조회, 즐겨찾기 추가/제거 가능합니다</li>
          </ul>
        </div>

        <div>
          <span>✔︎ 제작 기간</span>
          <ul>
            <li>1주일 (2023. 08)</li>
          </ul>
        </div>

        <div>
          <span>✔︎ 참여 인원</span>
          <ul>
            <li>1명</li>
          </ul>
        </div>

        <div>
          <span>✔︎ 기술스택</span>
          <div className="stack">
            <img src="https://img.shields.io/badge/TypeScript-yellow.svg?&style=for-the-badge&logo=typescript&logoColor=#3178C6" />
            <img src="https://img.shields.io/badge/React-darkgreen.svg?&style=for-the-badge&logo=react&logoColor=#61DAFB" />
            <img src="https://img.shields.io/badge/Redux-purple.svg?&style=for-the-badge&logo=redux&logoColor=#764ABC" />
            <img src="https://img.shields.io/badge/styled components-darkgray.svg?&style=for-the-badge&logo=styledcomponents&logoColor=#DB7093" />
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
  }

  .category {
    display: flex;
    flex-direction: column;
    gap: 28px;

    & div {
      margin-left: 6px;
    }
  }

  & span {
    font-size: 18px;
    font-weight: 550;
  }

  & ul {
    margin-top: 4px;
    margin-left: 28px;
    display: flex;
    flex-direction: column;
  }

  & li {
    line-height: 26px;
  }

  .stack {
    padding-left: 4px;
    margin-top: 12px;
    display: flex;
    gap: 3px;
  }
`;
