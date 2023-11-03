import styled from "styled-components";
import background from "../../asset/background.jpg";
import { title01, title02, introduceMent01, introduceMent02 } from "../../constant/constant";

const learnMoreBtnText = "Learn More";

const handleMoveScroll = (id) => {
  const targetElement = document.querySelector(id);
  const targetTop = targetElement.getBoundingClientRect().top + window.scrollY;

  // header 높이만큼 제외
  const scrollTo = targetTop - 72;
  window.scrollTo({
    top: scrollTo,
    behavior: "smooth",
  });
};

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
      <LearnMoreBtn onClick={() => handleMoveScroll("#aboutMe")}>{learnMoreBtnText}</LearnMoreBtn>
    </Container>
  );
};

export default Introduce;

const Container = styled.div`
  color: #f5f5f5;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${background});
  width: 100%;
  padding: 0px 32px 64px 32px;

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
  border: 3px solid #f5f5f5;
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
  font-weight: 500;
  padding: 16px 24px 16px 24px;
  border-radius: 2rem;
  border: none;
  box-shadow: 3px 3px 6px 2px rgba(0, 0, 0, 0.25);
`;
