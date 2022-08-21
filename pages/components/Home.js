// Modules
import { Button } from "react-bootstrap";
import Image from "next/image";
import { BsCloudDownload } from "react-icons/bs";

import Styles from "./../../styles/Home.module.css";

// Image
import coderCompletedTask from "../../assets/images/coder-completed-task.jpg";

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
        {/* Left */}
        <div>
          {/* text */}
          <div>👋 Hola, soy matias quiroga</div>
          {/* title */}
          <h2>Desarrollador Web</h2>
          <Button variant="primary" className={Styles.Button}>
            <BsCloudDownload /> Descargar cv
          </Button>
        </div>
        {/* right */}
        <div>
          {/* image */}
          <Image src={coderCompletedTask} width={250} height={250} alt="logo" />
        </div>
      </div>
    </>
  );
};

export default Home;
