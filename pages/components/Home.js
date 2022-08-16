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
      <div className={Styles.HomeContainer}>
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
