import { useState } from "react";
import styled from "styled-components";
import coz01 from "../../asset/project/coz01.gif";
import coz02 from "../../asset/project/coz02.gif";
import coz03 from "../../asset/project/coz03.gif";
import coz04 from "../../asset/project/coz04.gif";
import coz05 from "../../asset/project/coz05.gif";
import coz06 from "../../asset/project/coz06.gif";

const contour = "/";
const shotArray = [coz01, coz02, coz03, coz04, coz05, coz06];

const Screenshot = () => {
  const [shotNum, setShotNum] = useState(1);

  const handleChangeShotNum = (arrowDirection) => {
    if (arrowDirection === "right") {
      shotNum < 6 ? setShotNum((preSate) => preSate + 1) : setShotNum(1);
    }
    if (arrowDirection === "left") {
      shotNum > 1 ? setShotNum((preSate) => preSate - 1) : setShotNum(6);
    }
  };

  return (
    <Container>
      <img src={shotArray[shotNum - 1]} />
      <div className="shotNumBox">
        <span onClick={() => handleChangeShotNum("left")} className="leftArrow">
          &#9664;
        </span>
        <div>{shotNum}</div>
        <div>{contour}</div>
        <div>{shotArray.length}</div>
        <span onClick={() => handleChangeShotNum("right")} className="rightArrow">
          &#9654;
        </span>
      </div>
    </Container>
  );
};

export default Screenshot;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  & img {
    border: 1px solid darkgray;
    border-radius: 0.4rem;
    width: 30vw;
  }

  .shotNumBox {
    font-size: 18px;
    font-weight: 500;
    margin-top: 16px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 7px;

    & span {
      &:hover {
        cursor: pointer;
      }
    }
  }
`;
