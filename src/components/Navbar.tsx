"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import NavControls from "./NavControls";
import { useApp } from "@/lib/app-context";
import { navLinks } from "@/data/portfolio";

export default function Navbar() {
  const { t } = useApp();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    const ids = navLinks.map((link) => link.href.slice(1));
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const pos = window.scrollY + 160;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= pos) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-3 z-50 px-4 sm:top-5"
    >
      <nav
        className={`mx-auto flex w-fit max-w-full items-center gap-2 rounded-2xl px-2 py-2 transition-all duration-500 ${
          scrolled ? "glass-nav" : "border border-transparent bg-transparent"
        }`}
      >
        <ul className="hidden items-center gap-1 text-sm text-white/60 lg:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative block rounded-full px-3 py-1.5 transition-colors ${
                    isActive ? "text-white" : "hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-white/10 ring-1 ring-white/10"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{t.nav[link.key]}</span>
                </a>
              </li>
            );
          })}
        </ul>

        <NavControls />

        <a
          href="#contacto"
          className="hidden rounded-full bg-white px-4 py-1.5 text-sm font-medium text-black transition-colors hover:bg-white/90 active:scale-[0.98] lg:inline-block"
        >
          {t.nav.contact}
        </a>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label="Menu"
          aria-expanded={open}
          className="flex h-8 w-8 items-center justify-center rounded-lg text-white/80 transition-colors hover:bg-white/10 active:scale-[0.98] lg:hidden"
        >
          <div className="flex w-4 flex-col items-center gap-1">
            <motion.span
              animate={open ? { rotate: 45, y: 3 } : { rotate: 0, y: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="block h-0.5 w-4 bg-current"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -3 } : { rotate: 0, y: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="block h-0.5 w-4 bg-current"
            />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -8, filter: "blur(6px)" }}
            transition={{ type: "spring", stiffness: 200, damping: 24 }}
            className="glass-nav mx-auto mt-2 w-fit min-w-56 max-w-full overflow-hidden rounded-2xl lg:hidden"
          >
            <ul className="p-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-2.5 text-sm text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    {t.nav[link.key]}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
