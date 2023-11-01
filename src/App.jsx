import Layout from "./layout";
import Introduce from "./components/introduce";
import AboutMe from "./components/aboutMe";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Strength from "./components/strength";

function App() {
  return (
    <Layout>
      <Introduce />
      <AboutMe />
      <Skills />
      <Projects />
      <Strength />
    </Layout>
  );
}

export default App;
