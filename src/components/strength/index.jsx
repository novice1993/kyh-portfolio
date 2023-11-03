import { useState } from "react";
import styled from "styled-components";
import { Container } from "../../shareComponents/share";
import Explain from "./explain";
import Modal from "./modal";
import feedback from "../../asset/feedback.png";
import bloging from "../../asset/bloging.png";
import { strengthGuideMent } from "../../constant/constant";
import { strengthData } from "./strengthData";

const hardSkill = strengthData[0];
const softSkill = strengthData[1];

const Strength = () => {
  const [modal, setModal] = useState(0);

  const handleSetModal = (num) => {
    setModal(num);
  };

  return (
    <Container title="STRENGTH" id="strength" bgColor="#f5f5f5">
      <Guide>{strengthGuideMent}</Guide>
      <InnerContainer>
        <div className="content">
          <Explain strengthData={hardSkill} />
          <img onClick={() => handleSetModal(1)} src={bloging} />
        </div>
        <div className="content">
          <Explain strengthData={softSkill} />
          <img onClick={() => handleSetModal(2)} src={feedback} />
        </div>
      </InnerContainer>

      {/* 이미지 클릭 시 Modal 창 */}
      {modal === 1 ? (
        <Modal setModal={handleSetModal} src={bloging} />
      ) : modal === 2 ? (
        <Modal setModal={handleSetModal} src={feedback} />
      ) : null}
    </Container>
  );
};

export default Strength;

const Guide = styled.div`
  text-align: center;
  margin-top: 8px;
  font-size: 14px;
  color: darkgray;
`;

const InnerContainer = styled.div`
  margin-top: 48px;
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
    border-radius: 0.25rem;
    box-shadow: 7px 7px 15px 5px rgba(0, 0, 0, 0.5);

    &:hover {
      cursor: pointer;
    }
  }
`;
