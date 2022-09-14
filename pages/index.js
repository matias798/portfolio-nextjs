//  Components
import Landing from "./../components/Landing.js";
import Loading from "./../components/Loading.js";
import { useEffect, useState } from "react";
import { I18nextProvider } from 'react-i18next';
import i18next from "i18next";

import global_en from "./../Translations/en/global.json";
import global_es from "./../Translations/es/global.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    en: {
      global: global_en,
    },
    es: {
      global: global_es,
    },
  },
});

export default function Index() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, [loading]);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <I18nextProvider i18n={i18next}>
        <Landing />
      </I18nextProvider>
    );
  }
}
