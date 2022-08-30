// Modules
import { Button } from "react-bootstrap";
import { BsCloudDownload } from "react-icons/bs";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";

// Styles
import Styles from "./../styles/Home.module.css";

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
          {/* text */}
          <h6 className={Styles.Subtitle}>
            <span className={Styles.Hand}>👋</span>
            <span>HOLA, MI NOMBRE ES</span>
            <span className={Styles.Strong}>MATÍAS</span>
          </h6>
          {/* title */}
          <h1 className={Styles.Title}> Desarrollador Web independiente </h1>
          <hr className={Styles.Hr} />
          <div className={Styles.ButtonContainer}>
            <a href="/cv-matiasquiroga.pdf" download="cv-MatiasQuiroga">
              <Button variant="primary" className={Styles.Button}>
                <BsCloudDownload /> Descargar cv
              </Button>
            </a>
          </div>
          <div className={Styles.MobileContainer}>
            <h1 className={Styles.TitleMobile}>Matías Quiroga</h1>
            <hr className={Styles.HrMobile} />
            <p className={Styles.SubtitleMobile}>Hola 👋</p>
            <p className={Styles.SubtitleMobile}>Soy un Desarrollador Web Full Stack en busca de nuevas oportunidades laborales.</p>
          </div>
        </div>
        {/* right */}
        <div className={Styles.ImageContainer}>
          {/* image */}
          <Image
            src="https://res.cloudinary.com/dsoeo0zhi/image/upload/v1661642527/portfolio/coder-completed-task_vsqz6y.jpg"
            alt="focused coder"
            placeholder="blur"
            blurDataURL="https://res.cloudinary.com/dsoeo0zhi/image/upload/v1661642527/portfolio/coder-completed-task_vsqz6y.jpg"
            priority
            quality={100}
            loading="eager"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
