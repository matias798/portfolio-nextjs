// Modules
import { Button } from "react-bootstrap";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";

// Styles
import Styles from "./../styles/Home.module.css";
import { SocialInfo } from "./SocialInfo";

const Home = () => {
  return (
    <div id="Home">
      <Head>
        <title>Matias quiroga</title>
        <meta name="description" content="Matias quiroga" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Script src="https://cdn.jsdelivr.net/npm/animejs@3.0.1/lib/anime.min.js" />

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
            <p className={Styles.SubtitleMobile}>Hola 👋</p>
            <p className={Styles.SubtitleMobile}>Soy un Desarrollador Web Full Stack en busca de nuevas oportunidades laborales.</p>
          < SocialInfo />
          
          </div>
        </div>
        {/* right */}
        <div className={Styles.ImageContainer}>
          {/* image */}
          <Image
            src='https://res.cloudinary.com/dsoeo0zhi/image/upload/v1661974694/portfolio/intro-section-illustration_qhlg6u.png'
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
