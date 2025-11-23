// Modules
import { useRouter } from "next/router";
import i18next from "i18next";
import { useEffect } from "react";

// Components
import global_en from "./../Translations/en/global.json";
import global_es from "./../Translations/es/global.json";

export const LanguageCongfig = () => {
  const router = useRouter();
  const locale = router.locale || "en-US";
  
  useEffect(() => {
    i18next.init({
      interpolation: { escapeValue: false },
      lng: locale === "en-US" ? "en" : locale,
      resources: {
        en: {
          global: global_en,
        },
        es: {
          global: global_es,
        },
      },
    });
  }, [locale]);
  
  return null;
};
