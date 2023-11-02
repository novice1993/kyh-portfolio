import { useRef } from "react";
import styled from "styled-components";
import { headerTitle, category01, category02, category03, category04 } from "../constant/constant";

const Header = () => {
  const ref = useRef(null);

  const handleMoveScroll = (id) => {
    const targetElement = document.querySelector(id);
    if (ref) {
      const headerHeight = ref.current.clientHeight;
      const targetTop = targetElement.getBoundingClientRect().top + window.scrollY;

      const scrollTo = targetTop - headerHeight;
      window.scrollTo({
        top: scrollTo,
        behavior: "smooth",
      });
    }
  };

  return (
    <Container ref={ref} id="header">
      <div className="container">
        <div className="title">{headerTitle}</div>
        <div className="category">
          <span onClick={() => handleMoveScroll("#aboutMe")}>{category01}</span>
          <span onClick={() => handleMoveScroll("#skills")}>{category02}</span>
          <span onClick={() => handleMoveScroll("#projects")}>{category03}</span>
          <span onClick={() => handleMoveScroll("#strength")}>{category04}</span>
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

    & span {
      &:hover {
        cursor: pointer;
      }
    }
  }
`;
