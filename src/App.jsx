import Layout from "./layout";
import Introduce from "./components/introduce";
import AboutMe from "./components/aboutMe";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Strength from "./components/strength";
import GoUpButton from "./components/goUpButton";

function App() {
  return (
    <Layout>
      <Introduce />
      <AboutMe />
      <Skills />
      <Projects />
      <Strength />
      <GoUpButton buttonText="🔝" />
    </Layout>
  );
}

export default App;
