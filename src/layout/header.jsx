import { useRef } from "react";
import styled from "styled-components";
import { headerTitle, category01, category02, category03, category04 } from "../constant/constant";

const Header = () => {
  const ref = useRef(null);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
        <div className="title" onClick={handleScrollToTop}>
          {headerTitle}
        </div>
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
  /* background-color: transparent; */
  background-color: #f5f5f5;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.25);

  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 72px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-weight: 700;

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
    &:hover {
      cursor: pointer;
    }
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
