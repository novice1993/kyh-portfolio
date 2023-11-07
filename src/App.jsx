import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setScrollY } from "./reducer/scroll_reducer";
import { changeStockReview } from "./reducer/stockReview_reducer";

import Layout from "./layout";
import Introduce from "./components/introduce";
import AboutMe from "./components/aboutMe";
import Skills from "./components/skills";
import Projects from "./components/projects";
import GoUpButton from "./components/goUpButton";
import Readme from "./components/projects/readme";

import { stockReviewArray } from "./components/projects/projectData";

function App() {
  const dispatch = useDispatch();
  const isReadme = useSelector((state) => state.isReadme);
  const stockReviewNum = useSelector((state) => state.stockReviewNum);

  const handleChangeStockReviewNum = (reviewNum) => {
    dispatch(changeStockReview(reviewNum));
  };

  // 스크롤 높이에 따라 전역상태 boolean 값 변경
  const handleScroll = () => {
    const scrollY = window.scrollY;

    if (scrollY > 400) {
      dispatch(setScrollY(true));
    } else {
      dispatch(setScrollY(false));
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <Layout>
      {!isReadme ? (
        <>
          <Introduce />
          <AboutMe />
          <Skills />
          <Projects />
          <GoUpButton buttonText="🔝" />
        </>
      ) : (
        <Readme
          reviewData={stockReviewArray[stockReviewNum]}
          changeReviewNum={handleChangeStockReviewNum}
        />
      )}
    </Layout>
  );
}

export default App;
