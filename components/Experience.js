// Modules
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

// Styles
import Styles from "./../styles/Experience.module.css";

// Data
import { ExperienceItemsEs } from "./../helpers/Data/es/Experience";
import { ExperienceItemsEn } from "./../helpers/Data/en/Experience";

const Experience = () => {
  const { t } = useTranslation("global");
  const router = useRouter().locale;
  const ExperienceItems =
    router === "es" ? ExperienceItemsEs : ExperienceItemsEn;
  return (
    <div className="d-flex justify-content-center">
      <div className={Styles.Bg}>
        <h2 className={Styles.Title}>{t("Experience.Title")}</h2>
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
