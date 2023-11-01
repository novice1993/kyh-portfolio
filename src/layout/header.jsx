import styled from "styled-components";
import { headerTitle, category01, category02, category03, category04 } from "../constant/constant";

const Header = () => {
  return (
    <Container>
      <div className="container">
        <div className="title">{headerTitle}</div>
        <div className="category">
          <span>{category01}</span>
          <span>{category02}</span>
          <span>{category03}</span>
          <span>{category04}</span>
        </div>
      </div>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  background-color: white;

  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 72px;
  border: 1px solid blue;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-weight: 900;

  .container {
    width: 1076px;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px 32px 20px 32px;
  }

  .title {
    font-size: 24px;
  }

  .category {
    font-size: 18px;
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
`;
