import styled from "styled-components";
import { title01, title02, introduceMent01, introduceMent02 } from "../../constant/constant";

const learnMoreBtnText = "Learn More";

const Introduce = () => {
  return (
    <Container>
      <h1 className="title">
        <div>{title01}</div>
        <div>{title02}</div>
      </h1>
      <Divider />
      <InroduceMent>
        <div>{introduceMent01}</div>
        <div>{introduceMent02}</div>
      </InroduceMent>
      <LearnMoreBtn>{learnMoreBtnText}</LearnMoreBtn>
    </Container>
  );
};

export default Introduce;

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: skyblue;
  width: 100%;
  padding: 136px 32px 64px 32px;

  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }
`;

const Divider = styled.div`
  width: 52px;
  border: 3px solid black;
  margin: 24px 0px 24px 0px;
`;

const InroduceMent = styled.div`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin: 12px 0px 36px 0px;
`;

const LearnMoreBtn = styled.button`
  font-size: 20px;
  padding: 16px 32px 16px 32px;
  border-radius: 2rem;
`;
