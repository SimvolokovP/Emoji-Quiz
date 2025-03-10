import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        start: "Start",
        settings: "Settings",
        username: "Username",
      },
    },
    ru: {
      translation: {
        start: "Старт",
        settings: "Настройки",
        username: "Никнейм",
      },
    },
  },
  lng: "ru",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
