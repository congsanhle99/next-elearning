import { DEFAULT_LOCALE, LOCALES, type Locale } from "@/lib/i18n";

// `price` defaults to 0 if not provided, and `locale` defaults to `DEFAULT_LOCALE` if not provided. The function formats the price according to the specified locale and currency, applying the appropriate exchange rate.
export const formatPrice = (price: number, locale: Locale = DEFAULT_LOCALE): string => {
  const { intl, currency, rate } = LOCALES[locale];
  return Intl.NumberFormat(intl, {
    style: "currency",
    currency,
    maximumFractionDigits: currency === "VND" ? 0 : 2,
  }).format(price * rate);
};
