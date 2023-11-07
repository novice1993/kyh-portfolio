import styled from "styled-components";
import Lottie from "react-lottie-player";
import animation from "../../asset/animation.json";
import { mediaQuery } from "../../style/globalStyle";

const Animation = () => {
  return (
    <Container>
      <Lottie loop animationData={animation} style={{ width: "500px" }} play />
    </Container>
  );
};

export default Animation;

const Container = styled.div`
  ${mediaQuery.aboutme} {
    display: none;
  }

  display: flex;
  justify-content: center;
  align-items: center;
`;
