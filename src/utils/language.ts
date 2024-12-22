import { translations } from '../i18n/translations';

export type Language = 'en' | 'es';

export function getCurrentLanguage(t: typeof translations.en | typeof translations.es): Language {
  return t === translations.en ? 'en' : 'es';
}