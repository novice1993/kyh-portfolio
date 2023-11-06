import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { setReadme } from "../../reducer/readme_reducer";
import styled from "styled-components";

const Readme = () => {
  const dispatch = useDispatch();

  const handleCloseReadme = () => {
    dispatch(setReadme(false));
  };

  return (
    <Container>
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        style={{ height: "100%" }}
      >
        <header>
          <div className="reviewTitle">README.md</div>
          <button onClick={handleCloseReadme}>&#10005;</button>
        </header>
        <ContentBox>
          <div className="problem">
            <div className="problemBox">
              <div className="listTitle">☑️ 목록</div>
              <ul className="problemList">
                <li>주식 데이터 자동 갱신 로직 구현</li>
                <li>주식 데이터 시각화 및 종목 간 비교 기능 구현</li>
                <li>매도/매수 거래가 설정 시 오차 제거 기능 구현</li>
                <li>리프레시 토큰 활용 부재로 인한 자동 로그인 기능 구현</li>
              </ul>
            </div>
          </div>
          <div className="review">dddd</div>
        </ContentBox>
      </motion.div>
    </Container>
  );
};

export default Readme;

const Container = styled.div`
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 100vh;
  background-color: white;

  & header {
    width: 100%;
    background-color: #222222;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px 16px 20px;

    .reviewTitle {
      color: white;
      font-size: 16px;
      font-weight: 800;
    }
  }

  // README 닫기 버튼
  & button {
    font-size: 20px;
    font-weight: bolder;
    width: 28px;
    height: 28px;
    background-color: white;
    border: 3px solid black;
    border-radius: 0.3rem;
    opacity: 0.55;

    &:hover {
      cursor: pointer;
    }
  }
`;

const ContentBox = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 60px);

  & ul {
    margin-top: 6px;
    padding: 0 24px 0 24px;
    display: flex;
    flex-direction: column;
    line-height: 28px;
  }

  .problem {
    .problemBox {
      margin: 22px;
      padding: 20px 12px 20px 18px;
      background-color: #f5f5f5;
      box-shadow: 1px 2px 7px 1px darkgray;
      border-radius: 0.5rem;
    }

    .listTitle {
      font-size: 20px;
      font-weight: 600;
    }
  }

  .review {
    margin: 24px 0px 24px 0px;
    padding: 0px 14px 0px 14px;
    flex: 1 0 0;
    border-left: 1.5px solid darkgray;
  }
`;
