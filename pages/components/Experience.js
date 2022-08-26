// Styles
import Styles from "../../styles/Experience.module.css";

const ExperienceItems = [
  {
    title: "Desarrollador  Full Stack",
    workedAt: "Modo Agrario",
    date: "2020-2022",
    place: "Remoto",
  },
  {
    title: "Desarrollador  Full Stack",
    workedAt: "Cobranzas Argentina",
    date: "2020-2022",
    place: "Remoto",
  },
  {
    title: "Lorem ipsum",
    date: "2020-2022",
    place: "Remoto",
    workedAt: "Lorem ipsum",
  },
  {
    title: "Lorem ipsum",
    date: "2020-2022",
    place: "Remoto",
    workedAt: "Lorem ipsum",
  },
];

const Experience = () => {
  return (
    <div className={Styles.Bg}>
      <div>
        <h2 className={Styles.Title}>Experiencia</h2>
      </div>
      <div className={Styles.Container}>
        {ExperienceItems.map((item) => {
          return (
            <div key={Math.random()} className={Styles.Card}>
              {/* Title */}
              <div className={Styles.ItemTitle}>{item.title}</div>
              {/* worked at  */}
              <div className={Styles.WorkedAt}>{item.workedAt}</div>

              <div className="d-flex justify-content-between pt-2">
                {/* Date */}
                <div className={Styles.Date}>{item.date}</div>
                {/* Place */}
                <div className={Styles.Place}>{item.place}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
