export const LOCALES = {
  en: { label: "English", intl: "en-US", currency: "USD", rate: 1 },
  // rate: 1 USD ≈ 25,000 VND
  vi: { label: "Tiếng Việt", intl: "vi-VN", currency: "VND", rate: 25000 },
} as const;

export type Locale = keyof typeof LOCALES;

export const DEFAULT_LOCALE: Locale = "en";
export const LOCALE_COOKIE = "locale";

export const isLocale = (value: string | undefined): value is Locale => !!value && value in LOCALES;
