import styled from "styled-components";

const ProjectRoll = () => {
  return (
    <Container>
      <div className="categoryTitle">☑️ 구현 내역</div>
      <ul>
        <li>페이지 라우팅 (메인, 상품 리스트, 즐겨찾기)</li>
        <li>상품 리스트 무한 스크롤</li>
        <li>상품 카테고리 별 필터링</li>
        <li>토스트 메세지 (즐겨찾기 추가/제거)</li>
      </ul>
    </Container>
  );
};

export default ProjectRoll;

const Container = styled.ul`
  position: relative;
  margin-top: 28px;
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
