import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Projects from "./components/Projects.js";
import Experience from "./components/Experience.js";

export default function Index() {
  return (
    <div>
      <Navbar />
      <Home/>
      <About/>
      <Projects/>
      <Experience/>
    </div>
  );
}
