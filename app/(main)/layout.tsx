import React from "react";
import { LanguageSwitcher } from "@/components/language-switcher";
import { getLocale } from "@/lib/get-locale";

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  const locale = await getLocale();

  return (
    <>
      <div className="container flex justify-end py-2">
        <LanguageSwitcher current={locale} />
      </div>
      <main>{children}</main>
    </>
  );
};

export default MainLayout;
