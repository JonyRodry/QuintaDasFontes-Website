import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import pt from "./pt.json";
import en from "./en.json";
import es from "./es.json";
import fr from "./fr.json"

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false,
    },
    resources: {
        pt: {
			translation: pt,
		},
		en: {
			translation: en,
		},
    es: {
			translation: es,
		},
    fr: {
			translation: fr,
		},
	}
  });
export default i18n;