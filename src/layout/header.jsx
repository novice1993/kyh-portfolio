import { useRef } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { headerTitle, category01, category02, category03, category04 } from "../constant/constant";

const Header = () => {
  const ref = useRef(null);
  const scrollY = useSelector((state) => state.scrollY);

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
    <Container ref={ref} scrollY={scrollY} id="header">
      <div className="container">
        <div className="title" onClick={handleScrollToTop}>
          {headerTitle}
        </div>
        <div className="category">
          <span onClick={() => handleMoveScroll("#aboutMe")}>{category01}</span>
          <span onClick={() => handleMoveScroll("#skills")}>{category02}</span>
          <span onClick={() => handleMoveScroll("#projects")}>{category03}</span>
          {/* <span onClick={() => handleMoveScroll("#strength")}>{category04}</span> */}
        </div>
      </div>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  color: ${(props) => (props.scrollY ? "black" : "#f5f5f5")};
  background-color: ${(props) => (props.scrollY ? "#f5f5f5" : "transparent")};
  box-shadow: ${(props) => (props.scrollY ? "0px 0px 10px 2px rgba(0, 0, 0, 0.25)" : "none")};
  transition: color 0.3s ease-in, background-color 0.3s ease-in, box-shadow 0.3s ease-in;

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
    display: none;
    width: 1076px;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 36px 24px 36px 24px;
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
