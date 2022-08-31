// Modules
import { Button } from "react-bootstrap";
import Image from "next/image";
import arrow from "../assets/Icons/arrow-down.svg";

// Styles
import Styles from "./../styles/Home.module.css";
import { SocialInfo } from "./SocialInfo";


const Home = () => {
  return (
    <div id="Home">
      <div className={`${Styles.HomeContainer}`}>
        {/* Left */}
        <div className={Styles.Left}>
          {/* title */}
          <h1 className={Styles.Title}> Desarrollador Web Independiente </h1>
          <hr className={Styles.Hr} />
          <div className={Styles.ButtonContainer}>
            <a href="/cv-matiasquiroga.pdf" download="cv-MatiasQuiroga">
              <Button variant="primary" className={Styles.Button}>
                Descargar cv
              </Button>
            </a>
          </div>
          <div className={Styles.MobileContainer}>
            <h1 className={Styles.TitleMobile}>Matías Quiroga</h1>
            <hr className={Styles.HrMobile} />

            <span
              className={`d-flex justify-content-center flex-wrap animate__animated animate__fadeInUp text-center`}
            >
              <span className={`${Styles.SubtitleMobile} `}>
                <p>Hola 👋</p>
                <p>
                  Soy un Desarrollador Web Full Stack en busca de nuevas
                  oportunidades laborales.
                </p>
                <SocialInfo />
              </span>
              <div className="animate__animated animate__repeat-3	animate__heartBeat d-block w-100">
                <Image src={arrow} alt="arrow" priority />
              </div>
            </span>
          </div>
        </div>
        {/* right */}
        <div className={Styles.ImageContainer}>
          {/* image */}
          <Image
            src="https://res.cloudinary.com/dsoeo0zhi/image/upload/v1661974694/portfolio/intro-section-illustration_qhlg6u.png"
            alt="focused coder"
            placeholder="blur"
            blurDataURL="https://res.cloudinary.com/dsoeo0zhi/image/upload/v1661974694/portfolio/intro-section-illustration_qhlg6u.png"
            priority
            quality={100}
            loading="eager"
            width={475}
            height={475}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
