"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { setLocale } from "@/actions/set-locale";
import { LOCALES, type Locale } from "@/lib/i18n";

export function LanguageSwitcher({ current }: { current: Locale }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const change = (locale: Locale) =>
    startTransition(async () => {
      await setLocale(locale);
      router.refresh();
    });

  return (
    <div className="flex items-center gap-1">
      {(Object.keys(LOCALES) as Locale[]).map((locale) => (
        <Button
          key={locale}
          size="sm"
          variant={locale === current ? "default" : "ghost"}
          disabled={pending}
          onClick={() => change(locale)}
        >
          {locale.toUpperCase()}
        </Button>
      ))}
    </div>
  );
}
