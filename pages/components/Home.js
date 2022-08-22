// Modules
import { Button } from "react-bootstrap";
import { BsCloudDownload } from "react-icons/bs";
import Image from "next/image";
import Head from "next/head";

// Styles
import Styles from "./../../styles/Home.module.css";

// Image
import coderCompletedTask from "../../assets/images/coder-completed-task.jpg";

const downloadCV = () => {
  window.open("/CV.pdf");
};

const Home = () => {
  return (
    <>
      <Head>
        <title>Matias quiroga</title>
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
      <div className={`${Styles.HomeContainer}`}>
        {/* Left */}
        <div className={Styles.Left}>
          {/* text */}
          <h6 className={Styles.Subtitle}>
            <span className={Styles.Hand}>👋</span>
            <span>HOLA, MI NOMBRE ES</span>
            <span className={Styles.Strong}>MATIAS QUIROGA</span>
          </h6>
          {/* title */}
          <h1 className={Styles.Title}>
            {" "}
             Desarrollador Web independiente{" "}
          </h1>
          <hr className={Styles.Hr} />
          <Button
            variant="primary"
            className={Styles.Button}
            onClick={() => {
              downloadCV();
            }}
          >
            <BsCloudDownload /> Descargar cv
          </Button>
        </div>
        {/* right */}
        <div className={Styles.ImageContainer}>
          {/* image */}
          <Image
            src={coderCompletedTask}
            alt="logo"
            priority
            placeholder="blur"
            quality={100}
            loading="eager"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
