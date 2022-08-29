// Styles
import Styles from "./../styles/Footer.module.css";

// Modules
import Link from "next/link";
import {
  AiOutlineMail,
  AiOutlineGithub,
  AiOutlineWhatsApp,
  AiOutlineLinkedin,
} from "react-icons/ai";

//Components
import { Logo } from "./Logo";

const Contact = () => {
  return (
    <div className={Styles.ContainerSize}>
      <div className={Styles.ContainerColor}>
        <div className={`${Styles.FooterContainer} `}>
          <div className="d-flex justify-content-between">
            <Logo />

            {/* Icons */}
            <div className="d-flex justify-content-center">
              <Link href="https://github.com/matias798">
                <a target="_blank"
                  rel="noopener noreferrer">
                  <AiOutlineGithub size={30} className={Styles.Icon} />
                </a>
              </Link>
              <Link href="/contact">
                <a target="_blank"
                  rel="noopener noreferrer">
                  <AiOutlineMail size={30} className={Styles.Icon} />
                </a>
              </Link>

              <Link href="https://wa.me/5493415638192?text=Estoy%20interesado%20en%20comunicarme%20con%20vos">
                <a target="_blank"
                  rel="noopener noreferrer">
                  <AiOutlineWhatsApp size={30} className={Styles.Icon} />
                </a>
              </Link>
              <Link href="https://www.linkedin.com/in/matias-quiroga-/">
                <a target="_blank"
                  rel="noopener noreferrer">
                  <AiOutlineLinkedin size={30} className={Styles.Icon} />
                </a>
              </Link>
            </div>
          </div>
          <hr className={Styles.Hr} />
          <div className={Styles.FooterText}>
            <p>© ALL RIGHTS RESERVED</p>
            <p>DISEÑADO UTILIZANDO FIGMA & NEXT.JS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
