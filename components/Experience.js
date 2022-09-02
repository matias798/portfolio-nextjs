// Modules
import Link from "next/link";

// Styles
import Styles from "./../styles/Experience.module.css";

// Data
import { ExperienceItems } from "./../helpers/Data/Experience";

const Experience = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className={Styles.Bg}>
        <h2 className={Styles.Title}>Experiencia</h2>
        <div className={Styles.Container}>
          {ExperienceItems.map((item) => {
            return (
              <Link href={item.url} key={item.id}>
                <a
                  className={Styles.Card}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className={Styles.ItemTitle}>{item.title}</div>
                  <div className={Styles.WorkedAt}>{item.workedAt}</div>
                  <div className={`${Styles.ItemInfo} pt-2`}>
                    <div>{item.date}</div>
                    <div>{item.place}</div>
                  </div>
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
