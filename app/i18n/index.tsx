import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en/common.json";
import ar from "./locales/ar/common.json";
import ur from "./locales/ur/common.json";
import hi from "./locales/hi/common.json";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: en,
      },
      ar: {
        translation: ar,
      },
      hi: {
        translation: hi,
      },
      ur: {
        translation: ur,
      },
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

export default i18n;

export const switchLan = () => {
  if (i18n.language === "en") return i18n.changeLanguage("ar");
  i18n.changeLanguage("en");
};
export const chooseLan = (lang: string) => {
  if (lang === "en") return i18n.changeLanguage("en");
  else if (lang === "عربي") return i18n.changeLanguage("ar");
  else if (lang === "hi") return i18n.changeLanguage("hi");
  else if (lang === "ur") return i18n.changeLanguage("ur");
  i18n.changeLanguage("en");
};
