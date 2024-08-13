import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './locales/en/translation.json';
import arTranslations from './locales/ar/translation.json';
import deTranslations from './locales/de/translation.json';
import frTranslations from './locales/fr/translation.json';

//( Read stored language from localStorage or set as 'en' by default)
const language = localStorage.getItem('language') || 'en';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      ar: { translation: arTranslations },
      de: { translation: deTranslations },
      fr: { translation: frTranslations },
    },
    lng: language, //(Set the default language)
    fallbackLng: 'en', //( Spare language)
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;