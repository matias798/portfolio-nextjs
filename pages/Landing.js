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
export default function Index() {
  useEffect(() => {
    var cursor = document.querySelector("#cursor");
    var cursorinner = document.querySelector("#cursor2");

    document.addEventListener("mousemove", function (e) {
      var x = e.clientX;
      var y = e.clientY;
      cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
    });

    document.addEventListener("mousemove", function (e) {
      var x = e.clientX;
      var y = e.clientY;
      cursorinner.style.left = x + "px";
      cursorinner.style.top = y + "px";
    });

    document.addEventListener("mousedown", function () {
      cursor.classList.add("click");
      cursorinner.classList.add("cursorinnerhover");
    });

    document.addEventListener("mouseup", function () {
      cursor.classList.remove("click");
      cursorinner.classList.remove("cursorinnerhover");
    });
  }, []);

  return (
    <>
      <div>
        <div className="cursor" id="cursor" />
        <div className="cursor2" id="cursor2" />
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
}
