import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";

// import navbar styles
import Styles from "./../../styles/Navbar.module.css";

// assets
import Logo from "../../assets/images/logo.png";

function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <Image src={Logo} width={50} height={20} alt="logo" />
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
              <Nav.Link className={Styles.navItem}>Inicio</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className={Styles.navItem} eventKey="link-1">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className={Styles.navItem} eventKey="link-2">Conocimientos</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className={Styles.navItem} eventKey="link-2">Contacto</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
