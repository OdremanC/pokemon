import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "Desarrollado por": "Developed by",
          "Altura": "Height",
          "Peso": "Weight",
          "Habilidad normal": "Normal ability",
          "Habilidad oculta": "Hidden ability",
          "Cargando...": "Loading...",
          "Cerrar": "Close",
          "Anterior": "Previous",
          "Siguiente": "Next",
          "": "",
        }
      }
    },
    lng: "es",
    fallbackLng: "es",
    interpolation: {
      escapeValue: false
    }
  });
export default i18n