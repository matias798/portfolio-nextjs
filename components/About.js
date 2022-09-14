// Component
import Image from "next/image";

// Styles
import Styles from "./../styles/About.module.css";
import { isMobile } from "../helpers/IsMobile";
import { useTranslation } from "react-i18next";


const About = () => {
  const { t } = useTranslation("global");

  return (
    <div className={Styles.about}>
      <div className={Styles.AboutContainer}>
        {/* Left */}
        <span className={Styles.ImageContainer}>
          {/* image */}
          <Image
            src="https://res.cloudinary.com/dsoeo0zhi/image/upload/v1662146269/portfolio/service-3_xsmcqc_puhzpw.webp"
            alt="focused coder"
            width="500"
            height="500"
            className={Styles.image}
          />
        </span>
        {/* right */}

        <div className={Styles.aboutMeText}>
          {/* title */}
          <h2 className={Styles.Title}> {t("About.Title")}</h2>
          <span className={Styles.Text}>
            {isMobile ? <p>{t("About.SubtitleMobile")}</p> : <p>{t("About.SubtitlePc")}</p>}
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
