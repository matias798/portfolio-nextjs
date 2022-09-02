// Modules
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useEffect, useState } from "react";

// import navbar styles
import Styles from "./../styles/Navbar.module.css";

// Components
import { Logo } from "./Logo";

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
      className={`${Styles.stickyNav} navbar navbar-expand-lg navbar-light fixed-top pt-3`}
      collapseOnSelect
      style={{
        background: `rgba(255, 255, 255, ${backgroundTransparacy})`,
        padding: `${padding}px 0px`,
        boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
      }}
    >
      <Container fluid>
        <Navbar.Brand href="#Home" className="m-0 p-0" title="Home">
          <div className={Styles.SvgContainer}>
            <Logo />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-lg-0"
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
                href="#Portfolio"
                eventKey="link-1"
              >
                Portafolio
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
