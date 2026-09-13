"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { dict, type Dict, type Lang } from "./i18n";

type Theme = "dark" | "light";

type AppContextValue = {
  lang: Lang;
  theme: Theme;
  t: Dict;
  setLang: (lang: Lang) => void;
  toggleTheme: () => void;
};

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const storedLang = localStorage.getItem("lang");
    const storedTheme = localStorage.getItem("theme");
    /* eslint-disable react-hooks/set-state-in-effect */
    if (storedLang === "en" || storedLang === "es") setLangState(storedLang);
    if (storedTheme === "light" || storedTheme === "dark") setTheme(storedTheme);
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("light", theme === "light");
    root.setAttribute("lang", lang);
    localStorage.setItem("theme", theme);
    localStorage.setItem("lang", lang);
  }, [theme, lang]);

  const setLang = useCallback((value: Lang) => setLangState(value), []);
  const toggleTheme = useCallback(
    () => setTheme((value) => (value === "dark" ? "light" : "dark")),
    [],
  );

  return (
    <AppContext.Provider
      value={{ lang, theme, t: dict[lang], setLang, toggleTheme }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within AppProvider");
  }
  return context;
}
