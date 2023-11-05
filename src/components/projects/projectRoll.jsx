import styled from "styled-components";

const ProjectRoll = () => {
  return (
    <Container>
      <div className="categoryTitle">☑️ 구현 내역</div>
      <li>페이지 라우팅 (메인, 상품 리스트, 즐겨찾기)</li>
      <li>상품 리스트 무한 스크롤</li>
      <li>상품 카테고리 별 필터링</li>
      <li>토스트 메세지 (즐겨찾기 추가/제거)</li>
    </Container>
  );
};

export default ProjectRoll;

const Container = styled.ul`
  margin-top: 28px;
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
`;
