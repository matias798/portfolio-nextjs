// Styles
import Styles from "./../styles/Footer.module.css";

//Components
import { Logo } from "./Logo";
import { SocialInfo } from "./SocialInfo";

const Contact = () => {
  return (
    <div className={Styles.ContainerSize}>
      <div className={Styles.ContainerColor}>
        <div className={Styles.FooterContainer}>
          <div className="d-flex justify-content-between">
            <Logo />
            <SocialInfo />
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
