// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import your translation files
import enTranslation from './locales/en/translation.json';
import frTranslation from './locales/fr/translation.json';

// Initialize i18next
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    fr: {
      translation: frTranslation,
    },
  },
  lng: 'en', // Default language
  fallbackLng: 'en', // Fallback language if key is missing
  interpolation: {
    escapeValue: false, // React already escapes by default
  },
});

export default i18n;