// Component
import Image from "next/image";

// Image
import coderCompletedTask from "../../assets/images/coder-focused.jpg";
import Styles from "../../styles/Home.module.css";

const About = () => {
  return (
    <>
      <div className={Styles.HomeContainer}>
        {/* Left */}
        <span>
          {/* image */}
          <Image src={coderCompletedTask} width={500} height={400} alt="logo" />
        </span>
        {/* right */}

        <div className={Styles.aboutMeTitle}>
          {/* title */}
          <h2>Sobre mi</h2>
          <p>
            Proactivo, con habilidades interpersonales que me permiten
            fácilmente adaptarme a grupos de trabajo.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
