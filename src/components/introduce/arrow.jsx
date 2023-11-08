import styled from "styled-components";
import Lottie from "react-lottie-player";
import arrow from "../../asset/arrow.json";
import { mediaQuery } from "../../style/mediaQuery";

const Arrow = () => {
  return (
    <Container>
      <Lottie
        loop
        animationData={arrow}
        style={{ width: mediaQuery.min ? "65px" : "95px" }}
        play
        speed={2.6}
      />
    </Container>
  );
};

export default Arrow;

const Container = styled.div`
  position: absolute;
  bottom: 104px;
  width: 100%;

  @media (max-height: 550px) {
    display: none;
  }

  display: flex;
  justify-content: center;
  align-items: center;
`;
