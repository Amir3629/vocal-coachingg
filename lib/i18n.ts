'use client';

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import translationEN from '../public/locales/en/common.json'
import translationDE from '../public/locales/de/common.json'

// Define types for translations
interface TranslationObject {
  [key: string]: any;
}

interface LanguageTranslations {
  translation: TranslationObject;
}

interface Translations {
  [key: string]: LanguageTranslations;
}

// Function to get all translatable elements
export const getTranslatableElements = () => {
  return document.querySelectorAll('[data-i18n]');
};

// Function to update document language attributes
export const updateDocumentLanguage = (lng: string) => {
  document.documentElement.lang = lng;
  document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
};

// Function to get all translations
export const getAllTranslations = (): Translations => {
  return {
    en: { translation: translationEN },
    de: { translation: translationDE }
  };
};

// Function to apply translations to DOM elements
export const applyTranslations = (lng: string) => {
  const elements = getTranslatableElements();
  const translations = getAllTranslations();
  
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (key && translations[lng]?.translation) {
      const parts = key.split('.');
      let translation: any = translations[lng].translation;
      
      for (const part of parts) {
        if (translation[part]) {
          translation = translation[part];
        }
      }
      
      if (typeof translation === 'string') {
        // Handle different element types
        if (element instanceof HTMLInputElement) {
          if (element.type === 'submit' || element.type === 'button') {
            element.value = translation;
          } else {
            element.placeholder = translation;
          }
        } else if (element instanceof HTMLImageElement) {
          element.alt = translation;
        } else {
          element.textContent = translation;
        }
      }
    }
  });
};

const resources = {
  en: {
    translation: translationEN
  },
  de: {
    translation: translationDE
  }
};

if (!i18n.isInitialized) {
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
      resources,
    fallbackLng: 'de',
      defaultNS: 'translation',
      
    interpolation: {
        escapeValue: false,
      },
      
    detection: {
      order: ['localStorage', 'navigator'],
        lookupLocalStorage: 'language',
      caches: ['localStorage'],
    },
      
      react: {
        useSuspense: false,
      },
    });
}

export default i18n
