import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Projects from "./components/Projects.js";
import Experience from "./components/Experience.js";
import Skills from "./components/Skills.js";

export default function Index() {
  return (
    <div>
      <Navbar />
      <Home/>
      <About/>
      <Projects/>
      <Experience/>
      <Skills/>
    </div>
  );
}
