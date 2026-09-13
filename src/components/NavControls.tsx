"use client";

import { motion } from "framer-motion";
import { useApp } from "@/lib/app-context";
import type { Lang } from "@/lib/i18n";

export default function NavControls() {
  const { lang, setLang, theme, toggleTheme, t } = useApp();
  const langs: Lang[] = ["es", "en"];

  return (
    <div className="flex items-center gap-1.5">
      <div
        className="relative flex items-center rounded-full border border-white/10 bg-white/[0.06] p-0.5"
        role="group"
        aria-label={t.toggles.language}
      >
        {langs.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setLang(option)}
            aria-pressed={lang === option}
            className={`relative rounded-full px-2 py-1 text-[11px] font-semibold tracking-wide uppercase transition-colors ${
              lang === option ? "text-white" : "text-white/45 hover:text-white/70"
            }`}
          >
            {lang === option && (
              <motion.span
                layoutId="lang-pill"
                className="absolute inset-0 rounded-full bg-white/15"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{option}</span>
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={toggleTheme}
        aria-label={t.toggles.theme}
        className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white/70 transition-colors hover:bg-white/10 hover:text-white active:scale-[0.95]"
      >
        <motion.span
          key={theme}
          initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          className="flex items-center justify-center"
        >
          {theme === "dark" ? (
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
            </svg>
          ) : (
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
            </svg>
          )}
        </motion.span>
      </button>
    </div>
  );
}
