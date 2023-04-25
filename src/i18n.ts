import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en/translation.json";
import translationPTBR from "./locales/ptbr/translation.json";

const language = localStorage.getItem("language");

const resources = {
  en: {
    translation: translationEN,
  },
  ptbr: {
    translation: translationPTBR,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: language ? language : "en",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
