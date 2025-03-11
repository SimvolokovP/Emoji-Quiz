import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        start: "Start",
        settings: "Settings",
        username: "Username",
        back: "back",
        appLang: "App Language",
        error: "Wrong answer. These are",
        answer: "Your answer",
        round: "Round",
      },
    },
    ru: {
      translation: {
        start: "Старт",
        settings: "Настройки",
        username: "Никнейм",
        back: "назад",
        appLang: "Язык приложения",
        error: "Неправильный ответ. Это",
        answer: "Ваш ответ",
        round: "Раунд",
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
