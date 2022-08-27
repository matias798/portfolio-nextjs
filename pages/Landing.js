//  Components
import Navbar from "./../components/Navbar.js";
import Home from "./../components/Home.js";
import About from "./../components/About.js";
import Projects from "./../components/Projects.js";
import Experience from "./../components/Experience.js";
import Skills from "./../components/Skills.js";
import Contact from "./../components/Contact.js";
import Footer from "./../components/Footer.js";

import { useEffect } from "react";
import { isMobile } from "./../helpers/IsMobile";
import { customCursor } from "./../helpers/customCursor";

const Landing = () => {
  useEffect(() => {
    if (!isMobile()) {
      customCursor();
    }
  }, []);

  return (
    <>
      <div>
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
