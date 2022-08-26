// Modules
import { RiPencilRuler2Line } from "react-icons/ri";
import { AiOutlineLaptop, AiOutlineCode } from "react-icons/ai";

// Styles
import Styles from "../../styles/Skills.module.css";

const Skills = () => {
  return (
    <div className={Styles.Container} id="Skills">
      <h2 className="text-center">Conocimientos</h2>
      {/* Skilss */}
      <div className={Styles.SkillsContainer}>
        {/* Design */}
        <div className={Styles.Column}>
          {/* icon */}
          <div className={Styles.Icon}>
            <RiPencilRuler2Line className={Styles.Design} />
          </div>
          {/* Title */}
          <h3 className={Styles.Subtitle}>Diseño </h3>
          {/* Text */}
          <div>
            <div className={Styles.Text}>Fundamentos en UX & UI </div>
            <div className={Styles.Text}>Figma</div>
            <div className={Styles.Text}>Navegación</div>
            <div className={Styles.Text}>Typografia</div>
            <div className={Styles.Text}>Color</div>
          </div>
        </div>
        {/* Frontend */}
        <div className={Styles.Column}>
          {/* icon */}
          <div className={Styles.Icon}>
            <AiOutlineLaptop className={Styles.Frontend} />
          </div>

          {/* Title */}
          <h3 className={Styles.Subtitle}>Frontend</h3>

          {/* Text */}
          <div className={Styles.Text}>Material ui / Bootstrap</div>
          <div className={Styles.Text}>Typescript</div>
          <div className={Styles.Text}>Css / Sass</div>
          <div className={Styles.Text}>React.js </div>
          <div className={Styles.Text}>Next.js</div>
          <div className={Styles.Text}>Redux</div>
        </div>
        {/* Backend */}
        <div className={Styles.Column} style={{ border: "none" }}>
          {/* icon */}
          <div className={Styles.Icon}>
            <AiOutlineCode className={Styles.Backend} />
          </div>

          {/* Title */}
          <h3 className={Styles.Subtitle}>Backend</h3>

          {/* Text */}
          <div className={Styles.Text}>Mongodb</div>
          <div className={Styles.Text}>Node.js</div>
          <div className={Styles.Text}>Express</div>
          <div className={Styles.Text}>Docker </div>
          <div className={Styles.Text}>MySql</div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
