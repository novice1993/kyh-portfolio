import styled from "styled-components";
import Lottie from "react-lottie-player";
import animation from "../../asset/animation.json";

const Animation = () => {
  return (
    <Container>
      <Lottie loop animationData={animation} style={{ width: "500px" }} play />
    </Container>
  );
};

export default Animation;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
