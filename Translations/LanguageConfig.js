// Modules
import { useRouter } from "next/router";
import i18next from "i18next";

// Components
import global_en from "./../Translations/en/global.json";
import global_es from "./../Translations/es/global.json";

export const LanguageCongfig = () => {
  i18next.init({
    interpolation: { escapeValue: false },
    lng: `${useRouter().locale}`,
    resources: {
      en: {
        global: global_en,
      },
      es: {
        global: global_es,
      },
    },
  });
};
