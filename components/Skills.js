// Modules
import { RiPencilRuler2Line } from "react-icons/ri";
import { AiOutlineLaptop, AiOutlineCode } from "react-icons/ai";

// Styles
import Styles from "./../styles/Skills.module.css";

const Skills = () => {
  return (
    <div className={Styles.cont} id="Skills">
      <div className={Styles.Container}>
        <div className={Styles.CenterContent}>
          <h2 className={Styles.Title}>Conocimientos</h2>
          <div className={Styles.hr}>
            <hr className="Hr" />
          </div>
        </div>

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
              <p className={Styles.Text}>Fundamentos en UX & UI </p>
              <p className={Styles.Text}>Figma</p>
              <p className={Styles.Text}>Navegación</p>
              <p className={Styles.Text}>Typografia</p>
              <p className={Styles.Text}>Color</p>
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
            <p className={Styles.Text}>Material ui / Bootstrap</p>
            <p className={Styles.Text}>Typescript</p>
            <p className={Styles.Text}>Css / Sass</p>
            <p className={Styles.Text}>React.js </p>
            <p className={Styles.Text}>Next.js</p>
            <p className={Styles.Text}>Redux</p>
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
            <p className={Styles.Text}>Mongodb</p>
            <p className={Styles.Text}>Node.js</p>
            <p className={Styles.Text}>Express</p>
            <p className={Styles.Text}>Docker </p>
            <p className={Styles.Text}>MySql</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
