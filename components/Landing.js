//  Components
import Navbar from "./Navbar.js";
import Home from "./Home.js";
import About from "./About.js";
import Projects from "./Projects.js";
import Experience from "./Experience.js";
import Skills from "./Skills.js";
import Contact from "./Contact.js";
import Footer from "./Footer.js";
import { HeadAndScripts } from "./HeadAndScripts";

import { useEffect } from "react";
import { isMobile } from "../helpers/IsMobile";
import { customCursor } from "../helpers/customCursor";

const Landing = () => {
  useEffect(() => {
    if (!isMobile()) {
      customCursor();
    }
  }, []);

  return (
    <>
      <HeadAndScripts />

      <div>
        {/* Check if show cursor or not */}
        {isMobile() ? null : (
          <>
            <div className="cursor" id="cursor" />

            <div className="cursor2" id="cursor2" />
          </>
        )}

        <Navbar />
        <Home />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Landing;
