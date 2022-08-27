// Component
import Image from "next/image";

// Images
import coderCompletedTask from "../assets/images/coder-focused.jpg";

// Styles
import Styles from "./../styles/About.module.css";

const About = () => {
  return (
    <div className={Styles.AboutContainer} id="About">
      {/* Left */}
      <span className={Styles.ImageContainer}>
        {/* image */}
        <Image src={coderCompletedTask} alt="logo" className={Styles.image} />
      </span>
      {/* right */}

      <div className={Styles.aboutMeText}>
        {/* title */}
        <h2 className="text-start">Sobre mi</h2>
        <span className={Styles.Text}>
          ¡Hola! Me llamo Matías Quiroga, soy un Desarrollador Web Full Stack
          (MERN) en busca de nuevas oportunidades laborales. Me considero una
          persona proactiva, responsable, con un gran Interés de seguir
          aprendiendo nuevas habilidades y tecnologías web para mi desarrollo
          profesional.
        </span>
      </div>
    </div>
  );
};

export default About;