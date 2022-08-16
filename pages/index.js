import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Projects from "./components/Projects.js";

export default function Index() {
  return (
    <div>
      <Navbar />
      <Home/>
      <About/>
      <Projects/>
    </div>
  );
}
