// Component
import Image from "next/image";

// Styles
import Styles from "./../styles/About.module.css";
import { isMobile } from "../helpers/IsMobile";

const About = () => {
  return (
    <div className={Styles.about} id="About">
    <div className={Styles.AboutContainer} >
      {/* Left */}
      <span className={Styles.ImageContainer}>
        {/* image */}
        <Image
          src="https://res.cloudinary.com/dsoeo0zhi/image/upload/v1661975033/portfolio/service-3_xsmcqc.png"
          alt="focused coder"
          width={500}
          height={500}
          className={Styles.image}
        />
      </span>
      {/* right */}

      <div className={Styles.aboutMeText}>
        {/* title */}
        <h2 className={Styles.Title}>Sobre mi</h2>
        <span className={Styles.Text}>
          {
            isMobile ?
              (
                <p>
                  Me considero una persona proactiva y responsable. Valoro el buen ambiente laboral y el
                  aprendizaje diario junto con el resto del equipo. Presento un gran interés de seguir
                  aprendiendo nuevas habilidades y tecnologías para mi desarrollo
                  profesional.</p>) :
              (<p>
                ¡Hola! Me llamo Matías Quiroga, soy un Desarrollador Web Full Stack
                (MERN) en busca de nuevas oportunidades laborales.  Me considero una persona proactiva y responsable. Valoro el buen ambiente laboral y el
                aprendizaje diario junto con el resto del equipo. Presento un gran interés de seguir
                aprendiendo nuevas habilidades y tecnologías para mi desarrollo
                profesional.</p>)
          }
        </span>
      </div>
    </div>
    </div>
  );
};

export default About;
