// Modules
import { I18nextProvider } from "react-i18next";
import { useEffect, useState } from "react";
import i18next from "i18next";

//  Components
import { LanguageCongfig } from "./../Translations/LanguageConfig.js";
import Landing from "./../components/Landing.js";
import Loading from "./../components/Loading.js";

export default function Index() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <I18nextProvider i18n={i18next}>
      <LanguageCongfig />
      <Landing />
    </I18nextProvider>
  );
}
