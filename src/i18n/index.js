import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ua from "./ua.json";
import en from "./en.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ua: { translation: ua },
      en: { translation: en },
    },
    lng: "en",
    fallbackLng: "ua",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
