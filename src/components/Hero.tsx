"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import MagneticButton from "./MagneticButton";
import ParticleField from "./ParticleField";
import TextScramble from "./TextScramble";
import { useApp } from "@/lib/app-context";
import { profile } from "@/data/portfolio";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.028, delayChildren: 0.2 } },
};

const letter = {
  hidden: { opacity: 0, y: 60, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring" as const, stiffness: 120, damping: 18 },
  },
};

export default function Hero() {
  const { t, theme } = useApp();
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const words = profile.shortName.split(" ");

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);

  return (
    <section
      ref={ref}
      id="inicio"
      className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden px-6 pt-32 pb-24"
    >
      <ParticleField light={theme === "light"} />

      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,var(--hero-glow),transparent_65%)] blur-3xl animate-pulse-soft"
      />

      <motion.div
        style={reduce ? undefined : { y, opacity, scale, willChange: "transform" }}
        className="relative mx-auto max-w-4xl text-center"
      >
        <motion.span
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex animate-float items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-medium text-white/70 backdrop-blur-xl [box-shadow:inset_0_1px_0_0_rgba(255,255,255,0.2)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          {t.hero.badge}
        </motion.span>

        <motion.h1
          variants={container}
          initial="hidden"
          animate="visible"
          className="mt-8 text-5xl font-semibold tracking-tighter text-white sm:text-7xl md:text-8xl"
        >
          {words.map((w, wi) => (
            <span
              key={`${w}-${wi}`}
              className="mr-3 inline-block whitespace-nowrap sm:mr-5"
            >
              {w.split("").map((char, ci) => (
                <motion.span key={ci} variants={letter} className="inline-block">
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-6 text-sm font-medium tracking-[0.2em] text-white/50 uppercase"
        >
          <TextScramble key={t.hero.role} text={t.hero.role} />
        </motion.p>

        <motion.p
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-6 max-w-[65ch] text-lg font-light text-white/60 sm:text-xl"
        >
          {t.hero.tagline}
        </motion.p>

        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <MagneticButton
            href="#contacto"
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black shadow-[0_0_30px_-8px_rgba(255,255,255,0.45)] transition-colors duration-300 hover:bg-white/90"
          >
            {t.hero.ctaPrimary}
          </MagneticButton>
          <MagneticButton
            href="#proyectos"
            className="rounded-full border border-white/15 bg-white/[0.06] px-6 py-3 text-sm font-medium text-white backdrop-blur-xl transition-colors duration-300 hover:border-white/30 hover:bg-white/10"
          >
            {t.hero.ctaSecondary}
          </MagneticButton>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.15 }}
          className="mt-12 text-sm text-white/35"
        >
          {t.hero.location}
        </motion.p>
      </motion.div>

      <div
        aria-hidden
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 sm:block"
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/15 p-1.5 backdrop-blur-md">
          <span className="h-1.5 w-1 animate-float rounded-full bg-white/60" />
        </div>
      </div>
    </section>
  );
}
