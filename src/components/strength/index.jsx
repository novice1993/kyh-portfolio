import styled from "styled-components";
import { Container } from "../../shareComponents/share";
import Explain from "./explain";
import feedback from "../../asset/feedback.png";
import bloging from "../../asset/bloging.png";
import { strengthData } from "./strengthData";

const hardSkill = strengthData[0];
const softSkill = strengthData[1];

const Strength = () => {
  return (
    <Container title="STRENGTH" id="strength">
      <InnerContainer>
        <div className="content">
          <Explain strengthData={hardSkill} />
          <img src={bloging} />
        </div>
        <div className="content">
          <Explain strengthData={softSkill} />
          <img src={feedback} />
        </div>
      </InnerContainer>
    </Container>
  );
};

export default Strength;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  padding-bottom: 78px;

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
  }

  & img {
    width: 20vw;
    border: 1px solid black;
  }
`;
