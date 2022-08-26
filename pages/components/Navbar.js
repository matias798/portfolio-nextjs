// Modules
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// import navbar styles
import Styles from "./../../styles/Navbar.module.css";

import { useEffect, useState } from "react";

function NavScrollExample() {
  
  const [clientWindowHeight, setClientWindowHeight] = useState("");
  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  const [padding, setPadding] = useState(30);
  const [boxShadow, setBoxShadow] = useState(0);

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    () => window.removeEventListener("scroll", handleScroll);
    let backgroundTransparacyVar = clientWindowHeight / 600;

    if (backgroundTransparacyVar < 1) {
      let paddingVar = 30 - backgroundTransparacyVar * 20;
      let boxShadowVar = backgroundTransparacyVar * 0.1;
      setBackgroundTransparacy(backgroundTransparacyVar);
      setPadding(paddingVar);
      setBoxShadow(boxShadowVar);
    }
  }, [clientWindowHeight]);

  return (
    <Navbar
      expand="lg"
      className={`${Styles.stickyNav} navbar navbar-expand-lg navbar-light fixed-top p-2 pt-3`}
      collapseOnSelect
      style={{
        background: `rgba(255, 255, 255, ${backgroundTransparacy})`,
        padding: `${padding}px 0px`,
        boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
      }}
    >
      <Container fluid>
        <Navbar.Brand href="#Home" className="m-0 p-0">
          <div className={Styles.SvgContainer}>
            <svg
              height="45px"
              viewBox="0 80 280 165.3969818068095"
              className="css-1j8o68f m-0 p-0"
            >
              <defs id="SvgjsDefs9499">
                <linearGradient id="SvgjsLinearGradient9504">
                  <stop
                    id="SvgjsStop9505"
                    stopColor="#7f00ff"
                    offset="0"
                  ></stop>
                  <stop
                    id="SvgjsStop9506"
                    stopColor="#e100ff"
                    offset="1"
                  ></stop>
                </linearGradient>
                <linearGradient id="SvgjsLinearGradient9507">
                  <stop
                    id="SvgjsStop9508"
                    stopColor="#7f00ff"
                    offset="0"
                  ></stop>
                  <stop
                    id="SvgjsStop9509"
                    stopColor="#e100ff"
                    offset="1"
                  ></stop>
                </linearGradient>
              </defs>
              <g
                id="SvgjsG9500"
                featurekey="rootContainer"
                transform="matrix(2.2800427691386624,0,0,2.2800427691386624,0,0)"
                fill="url(#SvgjsLinearGradient9504)"
              ></g>
              <g
                id="SvgjsG9501"
                featurekey="8L6ael-0"
                transform="matrix(5.0458073850241085,0,0,5.0458073850241085,39.842607745067866,68.77097029296482)"
                fill="url(#SvgjsLinearGradient9507)"
              >
                <path d="M15.36 5 q0.28 0 0.49 0.21 t0.21 0.49 l0 13.4 q0 0.28 -0.21 0.49 t-0.49 0.21 l-1.52 0 q-0.3 0 -0.5 -0.21 t-0.2 -0.49 l0 -9.04 l-3.7 4.76 q-0.22 0.26 -0.56 0.26 l0 0 q-0.16 0 -0.32 -0.07 t-0.24 -0.21 l-6.56 -8.68 q-0.12 -0.14 -0.14 -0.35 t0.08 -0.38 t0.26 -0.28 t0.36 -0.11 l1.76 0 q0.34 0 0.56 0.28 l4.24 5.6 l4.14 -5.6 q0.22 -0.28 0.58 -0.28 l1.76 0 z M3.84 14.7 q0.28 0 0.49 0.2 t0.21 0.5 l0 3.7 q0 0.28 -0.21 0.49 t-0.49 0.21 l-1.52 0 q-0.28 0 -0.49 -0.21 t-0.21 -0.49 l0 -3.7 q0 -0.3 0.21 -0.5 t0.49 -0.2 l1.52 0 z M32.448 14.36 q-0.12 -0.12 -0.17 -0.29 t-0.01 -0.33 q0.1 -0.64 0.1 -1.14 q0 -2.06 -1.22 -3.36 q-1.28 -1.34 -3.38 -1.34 t-3.38 1.34 q-1.22 1.3 -1.22 3.36 t1.22 3.36 q1.28 1.34 3.38 1.34 q0.84 0 1.5 -0.2 l-1.14 -1.14 q-0.2 -0.24 -0.2 -0.5 t0.2 -0.5 l1.08 -1.08 q0.22 -0.22 0.51 -0.22 t0.49 0.22 l4.34 4.34 q0.22 0.2 0.22 0.49 t-0.22 0.51 l-1.08 1.08 q-0.18 0.2 -0.49 0.2 t-0.51 -0.2 l-0.98 -1 q-1.64 0.9 -3.72 0.9 q-3.32 0 -5.46 -2.22 q-2.08 -2.18 -2.08 -5.38 t2.08 -5.38 q2.16 -2.22 5.47 -2.22 t5.45 2.24 q2.08 2.14 2.08 5.36 q0 1.42 -0.46 2.74 q-0.06 0.18 -0.19 0.3 t-0.31 0.14 q-0.38 0.1 -0.66 -0.18 z"></path>
              </g>
            </svg>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Nav className="justify-content-end" activeKey="/home">
            <Nav.Item>
              <Nav.Link className={Styles.navItem} href="#Home">
                Inicio
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className={Styles.navItem}
                href="#About"
                eventKey="link-1"
              >
                About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className={Styles.navItem}
                href="#Skills"
                eventKey="link-2"
              >
                Conocimientos
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className={Styles.navItem}
                href="#Contact"
                eventKey="link-2"
              >
                Contacto
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
