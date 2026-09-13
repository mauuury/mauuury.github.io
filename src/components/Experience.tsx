"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Section from "./Section";
import Reveal from "./Reveal";
import GlassCard from "./GlassCard";
import { useApp } from "@/lib/app-context";
import { experienceMeta } from "@/data/portfolio";

export default function Experience() {
  const { t } = useApp();
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.6"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <Section
      id="experiencia"
      index="02"
      eyebrow={t.experience.eyebrow}
      title={t.experience.title}
      description={t.experience.description}
    >
      <div ref={ref} className="relative mx-auto max-w-3xl pl-8 sm:pl-12">
        <div className="absolute top-0 left-0 h-full w-px bg-white/10" />
        <motion.div
          style={reduce ? undefined : { scaleY, transformOrigin: "top" }}
          className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-white/70 via-white/35 to-transparent"
        />

        <div className="space-y-6">
          <Reveal from="left">
            <div className="relative">
              <span className="absolute top-11 -left-8 flex h-2.5 w-2.5 -translate-x-1/2 items-center justify-center sm:-left-12">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <span className="absolute h-2.5 w-2.5 animate-ping rounded-full bg-emerald-400 opacity-70" />
              </span>

              <GlassCard className="rounded-3xl p-8 sm:p-10">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl font-semibold text-white">
                    {t.experience.role}
                  </h3>
                  <div className="flex items-center gap-2">
                    {experienceMeta.current && (
                      <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-0.5 text-[10px] font-semibold tracking-wider text-emerald-300 uppercase">
                        {t.experience.current}
                      </span>
                    )}
                    <span className="text-xs text-white/35">
                      {t.experience.period}
                    </span>
                  </div>
                </div>
                <p className="mt-1 text-sm text-white/55">
                  {experienceMeta.company} · {experienceMeta.location}
                </p>
                <ul className="mt-6 space-y-3">
                  {t.experience.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-sm leading-relaxed text-white/60"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/40" />
                      {point}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
