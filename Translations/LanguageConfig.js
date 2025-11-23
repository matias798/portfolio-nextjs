// Modules
import { useRouter } from "next/router";
import i18next from "i18next";
import { useEffect } from "react";

// Components
import global_en from "./../Translations/en/global.json";
import global_es from "./../Translations/es/global.json";

// Initialize i18next once on module load
if (!i18next.isInitialized) {
  i18next.init({
    interpolation: { escapeValue: false },
    lng: "en",
    resources: {
      en: {
        global: global_en,
      },
      es: {
        global: global_es,
      },
    },
  });
}

export const LanguageCongfig = () => {
  const router = useRouter();
  const locale = router.locale || "en-US";
  
  useEffect(() => {
    const lang = locale === "en-US" ? "en" : locale;
    if (i18next.language !== lang) {
      i18next.changeLanguage(lang);
    }
  }, [locale]);
  
  return null;
};
