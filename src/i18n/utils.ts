import { ui, defaultLang, type Lang } from './ui';

export type { Lang };
export { defaultLang };

export function t(lang: Lang, key: string): string {
  return ui[lang]?.[key] || ui[defaultLang][key] || key;
}

export function getLocalizedPath(path: string, lang: Lang): string {
  if (lang === defaultLang) return path;
  return `/${lang}${path}`;
}

export function getAlternateLang(lang: Lang): Lang {
  return lang === 'fr' ? 'en' : 'fr';
}
