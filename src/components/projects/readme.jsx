import styled from "styled-components";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setReadme } from "../../reducer/readme_reducer";
import { mediaQuery } from "../../style/mediaQuery";

import { problemList } from "./projectData";
import { readmeTitle01, readmeTitle02 } from "../../constant/constant";
import stockReview06 from "../../asset/review/stockReview06.png";
import stockReview08 from "../../asset/review/stockReview08.png";
import stockReview10 from "../../asset/review/stockReview10.png";

const Readme = ({ reviewData, changeReviewNum }) => {
  const problemSituation = reviewData.situation;
  const problemResolve = reviewData.resolve;
  const problemStruggle = reviewData.struggle;

  const ref = useRef(null);
  const stockReviewNum = useSelector((state) => state.stockReviewNum);
  const struggleTitle =
    stockReviewNum === 0
      ? "3️⃣ 고민했던 부분 (Query Key의 동적인 부여)"
      : stockReviewNum === 3
      ? "3️⃣ 구현 코드 (자동 로그아웃 함수, 종료/새로고침 시 처리 로직)"
      : "3️⃣ 구현 코드";

  const dispatch = useDispatch();

  const handleCloseReadme = () => {
    dispatch(setReadme(false));
    changeReviewNum(0);
  };

  useEffect(() => {
    if (ref.current !== null) {
      ref.current.scrollTop = 0;
    }
  }, [stockReviewNum]);

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
                {problemList.map((problem, index) => (
                  <li key={problem} onClick={() => changeReviewNum(index)}>
                    {problem}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="review" ref={ref}>
            {/* 1. 문제 상황 */}
            <div className="situation">
              <h2>{readmeTitle01}</h2>
              {stockReviewNum === 3 && (
                <StockReadme04>
                  <img src={stockReview08} />
                </StockReadme04>
              )}
              <ul>
                {problemSituation.map((situation) => {
                  const contentTitle = situation.contentTitle;
                  const descriptions = situation.description;

                  return (
                    <li key={contentTitle}>
                      <div className="contentTitle">{contentTitle}</div>
                      {descriptions.map((description) => (
                        <div key={description}>{description}</div>
                      ))}
                    </li>
                  );
                })}
                {stockReviewNum === 2 && (
                  <StockReadme03>
                    <img src={stockReview06} className="stockReadme03" />
                    <div className="description">
                      <div>✔︎ 예를 들어서</div>
                      <ul>
                        <li>
                          <div>현 시점 삼성전자 호가는 1백원 단위로 변동되고 있음</div>
                        </li>
                        <li>
                          <div>만약 유저가 68,100원을 매수가로 설정할 경우</div>
                          <div>
                            → 현재는 거래량이 없어 대기처리 되지만 호가가 갱신된 이후에는 체결될
                            가능성이 있음
                          </div>
                        </li>
                        <li>
                          <div>
                            하지만 호가 간격과 불일치 하는 애매한 가격 설정 시 대기가 무기한 지속될
                            수 있음
                          </div>
                          <div>
                            → 예를 들어 68,011원과 같이 1백원으로 나누어 떨어지지 않는 애매한 수
                          </div>
                        </li>
                      </ul>
                    </div>
                  </StockReadme03>
                )}
              </ul>
            </div>

            {/* 2. 해결 방법 */}
            <div className="resolve">
              <h2>{readmeTitle02}</h2>

              {problemResolve.img !== undefined && (
                <div className="imgBox">
                  <img src={problemResolve.img.src} />
                  <div className="imgExplain">{problemResolve.img.explain}</div>
                </div>
              )}

              <ul>
                {problemResolve.content.map((resolve) => {
                  const contentTitle = resolve.contentTitle;
                  const descriptions = resolve.description;

                  return (
                    <li key={contentTitle}>
                      <div className="contentTitle">{contentTitle}</div>
                      {descriptions.map((description, idx) => (
                        <div key={description + idx}>{description}</div>
                      ))}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* 고민한 부분 */}
            {problemStruggle !== undefined && (
              <div className="struggle">
                <h2>{struggleTitle}</h2>

                {problemStruggle.content !== undefined && (
                  <ul>
                    {problemStruggle.content.map((struggle) => {
                      const contentTitle = struggle.contentTitle;
                      const descriptions = struggle.description;

                      return (
                        <li key={contentTitle}>
                          <div className="contentTitle">{contentTitle}</div>
                          {descriptions.map((description) => (
                            <div key={description}>{description}</div>
                          ))}
                        </li>
                      );
                    })}
                  </ul>
                )}

                {problemStruggle.img !== undefined && (
                  <div className="imgBox">
                    <img src={problemStruggle.img.src} />
                    <div className="imgExplain">{problemStruggle.img.explain}</div>
                    {stockReviewNum === 3 && <img src={stockReview10} />}
                  </div>
                )}
              </div>
            )}
          </div>
        </ContentBox>
      </motion.div>
    </Container>
  );
};

export default Readme;

// 전체 Container 관련
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
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 1.5rem;
    font-weight: bolder;
    color: #f5f5f5;
    background-color: transparent;
    border: none;
    opacity: 0.6;

    transition: opacity 0.3s ease;

    &:hover {
      cursor: pointer;
      opacity: 0.9;
    }
  }
`;

// header 이하 content 관련
const ContentBox = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 60px);

  ${mediaQuery.readme02} {
    flex-direction: column;
  }

  & ul {
    margin-top: 6px;
    padding: 0 24px 0 24px;
    display: flex;
    flex-direction: column;
    line-height: 28px;
  }

  // 좌측 목록 관련
  .problem {
    flex: 1.18 0 0;
    max-width: 475px;

    ${mediaQuery.readme02} {
      flex: 1 0 0;
    }

    .problemBox {
      margin: 24px 28px 24px 28px;
      padding: 20px 12px 20px 18px;
      background-color: #f5f5f5;
      box-shadow: 1px 2px 7px 1px darkgray;
      border-radius: 0.5rem;
    }

    .listTitle {
      font-size: 20px;
      font-weight: 600;

      ${mediaQuery.readme01} {
        font-size: 18px;
      }

      ${mediaQuery.readme02} {
        font-size: 18px;
      }
    }

    & li {
      ${mediaQuery.readme01} {
        font-size: 13px;
      }

      ${mediaQuery.readme02} {
        font-size: 14px;
        line-height: 22px;
      }

      &:hover {
        cursor: pointer;
        color: #736e6e;
      }
      transition: color 0.3s ease;
    }
  }

  // 우측 설명 관련
  .review {
    margin: 24px 0px 24px 0px;
    padding: 0px 28px 0px 28px;
    flex: 2.1 0 0;
    border-left: 1.5px solid darkgray;
    overflow-y: scroll;

    ${mediaQuery.readme02} {
      flex: 5 0 0;
    }

    & h2 {
      margin-bottom: 18px;
    }

    .situation,
    .resolve,
    .struggle {
      margin-bottom: 65px;

      & ul {
        gap: 14px;
        color: #736e6e;
      }

      .contentTitle {
        color: black;
        font-size: 17px;
        font-weight: 500;
      }

      .imgBox {
        max-width: 100%;
        margin: 36px 0px 36px 0px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        & img {
          /* max-height: 60vh; */
          max-height: 100%;
          max-width: 100%;
          border: 1px solid darkgray;
        }

        .imgExplain {
          margin-top: 28px;
          margin-bottom: 14px;
          text-align: center;
          color: #222222;

          ${mediaQuery.min} {
            text-align: left;
          }
        }
      }
    }
  }
`;

// 일부 경우에만 조건부로 사용되는 컴포넌트
const StockReadme03 = styled.div`
  margin-top: 12px;
  display: flex;
  gap: 24px;

  ${mediaQuery.min} {
    flex-direction: column;
    align-items: center;
  }

  .description {
    height: max-content;
    width: max-content;
    border: 1px solid darkgray;
    border-radius: 0.25rem;
    padding: 12px;
    color: #222222;
    display: flex;
    flex-direction: column;

    ${mediaQuery.min} {
      width: 100%;
      font-size: 15px;
    }
  }

  & ul {
    list-style-type: disc;
    line-height: 26px;
  }

  & img {
    border: 1px solid darkgray;
  }
`;

const StockReadme04 = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;

  & img {
    max-width: 80%;
  }
`;
