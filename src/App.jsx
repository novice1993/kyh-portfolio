import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setScrollY } from "./reducer/scroll_reducer";

import Layout from "./layout";
import Introduce from "./components/introduce";
import AboutMe from "./components/aboutMe";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Strength from "./components/strength";
import GoUpButton from "./components/goUpButton";

function App() {
  const dispatch = useDispatch();

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
      <Introduce />
      <AboutMe />
      <Skills />
      <Projects />
      {/* <Strength /> */}
      <GoUpButton buttonText="🔝" />
    </Layout>
  );
}

export default App;
