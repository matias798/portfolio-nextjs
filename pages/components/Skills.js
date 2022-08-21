// Modules
import { RiPencilRuler2Line } from "react-icons/ri";
import { AiOutlineLaptop, AiOutlineCode } from "react-icons/ai";

// Styles
import Styles from "../../styles/Skills.module.css";

const Skills = () => {
  return (
    <div className={Styles.Container}>
      <h2 className="text-center py-5">Conocimientos</h2>

      {/* Skilss */}
      <div className={Styles.SkillsContainer}>
        {/* Design */}
        <div className={Styles.Column}>
          {/* icon */}
          <div className={Styles.Icon}>
            <RiPencilRuler2Line className={Styles.Design} />
          </div>

          {/* Title */}
          <h6 className='py-4 pb-2'>Diseño y mas</h6>

          {/* Text */}
          <p>Fundamentos en Ux & UI </p>
          <p>Diseño de navegación</p>
          <p>Diseño de typografia</p>
          <p>Metodologías Ágiles</p>
          <p>Diseño de color</p>
          <p>Jest</p>
          <p>Figma</p>
          <p>Jira </p>

        </div>
        {/* Frontend */}
        <div className={Styles.Column}>
          {/* icon */}
          <div className={Styles.Icon}>
            <AiOutlineLaptop className={Styles.Frontend} />
          </div>

          {/* Title */}
          <h6 className='py-4 pb-2'>Frontend</h6>

          {/* Text */}
          <p>Typescript</p>
          <p>Css / Sass</p>
          <p>Material ui</p>
          <p>React.js</p>
          <p>Bootstrap</p>
          <p>Next.js</p>
          <p>Html / Ejs</p>
          <p>Redux</p>
        </div>

        {/* Backend */}
        <div className={Styles.Column} style={{ border: "none" }}>
          {/* icon */}
          <div className={Styles.Icon}>
            <AiOutlineCode className={Styles.Backend} />
          </div>

          {/* Title */}
          <h6 className='py-4 pb-2'>Backend</h6>

          {/* Text */}
          <p>Mongodb</p>
          <p>REST API</p>
          <p>Node.js</p>
          <p>Express</p>
          <p>JWT</p>
          <p>MVC</p>
          <p>Docker</p>
          <p>Git</p>
          <p>MySql</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
