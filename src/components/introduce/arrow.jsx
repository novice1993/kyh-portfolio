import styled from "styled-components";
import Lottie from "react-lottie-player";
import arrow from "../../asset/arrow.json";

const Arrow = () => {
  return (
    <Container>
      <Lottie loop animationData={arrow} style={{ width: "95px" }} play speed={2.6} />
    </Container>
  );
};

export default Arrow;

const Container = styled.div`
  position: absolute;
  bottom: 104px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;