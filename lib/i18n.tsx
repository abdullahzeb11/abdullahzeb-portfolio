"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations, type Dictionary, type Locale } from "./translations";

const LocaleContext = createContext<{
  locale: Locale;
  setLocale: (l: Locale) => void;
  toggle: () => void;
  t: Dictionary;
  dir: "ltr" | "rtl";
} | null>(null);

function applyDocAttrs(locale: Locale) {
  const html = document.documentElement;
  html.setAttribute("lang", locale);
  html.setAttribute("dir", locale === "ar" ? "rtl" : "ltr");
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const stored =
      typeof window !== "undefined"
        ? (localStorage.getItem("locale") as Locale | null)
        : null;
    const initial: Locale = stored === "ar" || stored === "en" ? stored : "en";
    setLocaleState(initial);
    applyDocAttrs(initial);
  }, []);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    applyDocAttrs(next);
    try {
      localStorage.setItem("locale", next);
    } catch {}
  };

  const toggle = () => setLocale(locale === "en" ? "ar" : "en");

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      toggle,
      t: translations[locale] as Dictionary,
      dir: (locale === "ar" ? "rtl" : "ltr") as "ltr" | "rtl",
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [locale]
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used inside LocaleProvider");
  return ctx;
}

export function useT() {
  return useLocale().t;
}
