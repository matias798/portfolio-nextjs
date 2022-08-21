//  Components
import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Projects from "./components/Projects.js";
import Experience from "./components/Experience.js";
import Skills from "./components/Skills.js";
import Contact from "./components/Contact.js";
import Loading from "./components/Loading.js";

import { useEffect, useState } from "react";
export default function Index() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {



    var cursor = document.querySelector('.cursor');
    var cursorinner = document.querySelector('.cursor2');
    var a = document.querySelectorAll('a');
    
    document.addEventListener('mousemove', function(e){
      var x = e.clientX;
      var y = e.clientY;
      cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
    });
    
    document.addEventListener('mousemove', function(e){
      var x = e.clientX;
      var y = e.clientY;
      cursorinner.style.left = x + 'px';
      cursorinner.style.top = y + 'px';
    });
    
    document.addEventListener('mousedown', function(){
      cursor.classList.add('click');
      cursorinner.classList.add('cursorinnerhover')
    });
    
    document.addEventListener('mouseup', function(){
      cursor.classList.remove('click')
      cursorinner.classList.remove('cursorinnerhover')
    });
    
    a.forEach(item => {
      item.addEventListener('mouseover', () => {
        cursor.classList.add('hover');
      });
      item.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
      });
    })




    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, [loading]);

  return (
    <>
    <div className="cursor"></div>
<div className="cursor2"></div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Navbar />
          <Home />
          <About />
          <Projects />
          <Experience />
          <Skills />
          <Contact />
        </div>
      )}
    </>
  );
}
