import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en/translation.json';
import translationJP from './locales/jp/translation.json';
import translationVI from './locales/vi/translation.json';

const resources = {
    en: {
        translation: translationEN
    },
    jp: {
        translation: translationJP
    },
    vi: {
        translation: translationVI
    }
};

i18n
    .use(Backend)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'vi',
        debug: true,
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
