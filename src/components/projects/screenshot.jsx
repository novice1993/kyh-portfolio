import { useState } from "react";
import styled from "styled-components";
import { mediaQuery } from "../../style/mediaQuery";

const contour = "/";

const Screenshot = ({ projectData }) => {
  const nyTimes = projectData.link[0].url === "https://ny-times-project.vercel.app/" ? true : false;
  const screenShotImg = projectData.screenShot;
  const [shotNum, setShotNum] = useState(1);

  const handleChangeShotNum = (arrowDirection) => {
    if (arrowDirection === "right") {
      shotNum < screenShotImg.length ? setShotNum((preSate) => preSate + 1) : setShotNum(1);
    }
    if (arrowDirection === "left") {
      shotNum > 1 ? setShotNum((preSate) => preSate - 1) : setShotNum(screenShotImg.length);
    }
  };

  return (
    <Container isNyTimes={nyTimes}>
      <img src={screenShotImg[shotNum - 1]} />
      <div className="shotNumBox">
        <span onClick={() => handleChangeShotNum("left")} className="leftArrow">
          &#9664;
        </span>
        <div>{shotNum}</div>
        <div>{contour}</div>
        <div>{screenShotImg.length}</div>
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
  align-items: center;
  height: 100%;

  & img {
    border: 1px solid darkgray;
    border-radius: 0.4rem;
    width: ${(props) => (props.isNyTimes ? "auto" : "100%")};
    max-height: 385px;

    /* width: 30vw; */
    /* ${mediaQuery.projects} {
      width: 100%;
    } */
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
