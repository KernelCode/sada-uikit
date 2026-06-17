import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { ar } from "./ar";
import { en, type Dict } from "./en";

export type Lang = "en" | "ar";

interface I18nValue {
  lang: Lang;
  dir: "ltr" | "rtl";
  t: Dict;
  setLang: (l: Lang) => void;
}

const dictionaries: Record<Lang, Dict> = { en, ar };
const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    // Sada is an Arabic-first kit, so Arabic (+ RTL) is the default; visitors
    // can switch to English, and the choice persists in localStorage.
    if (typeof localStorage === "undefined") return "ar";
    return (localStorage.getItem("base-lang") as Lang) ?? "ar";
  });
  const dir = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    localStorage.setItem("base-lang", lang);
  }, [lang, dir]);

  return (
    <I18nContext.Provider value={{ lang, dir, t: dictionaries[lang], setLang }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within <I18nProvider>");
  return ctx;
}
