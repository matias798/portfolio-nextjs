import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import About from "./components/About.js";

export default function Index() {
  return (
    <div>
      <Navbar />
      <Home/>
      <About/>
    </div>
  );
}
