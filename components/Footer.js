// Styles
import Styles from "./../styles/Footer.module.css";

// Modules
import { useTranslation } from "react-i18next";

//Components
import { Logo } from "./Logo";
import { SocialInfo } from "./SocialInfo";

const Contact = () => {
  const { t } = useTranslation("global");

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
            <p>{t("Footer.Text")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
