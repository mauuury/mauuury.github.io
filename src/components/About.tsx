"use client";

import Section from "./Section";
import Reveal from "./Reveal";
import GlassCard from "./GlassCard";
import { useApp } from "@/lib/app-context";

export default function About() {
  const { t } = useApp();

  return (
    <Section
      id="sobre-mi"
      index="01"
      eyebrow={t.about.eyebrow}
      title={t.about.title}
      description={t.about.description}
    >
      <div className="grid gap-6 lg:grid-cols-5">
        <Reveal from="left" className="lg:col-span-3">
          <GlassCard className="h-full rounded-3xl p-8 sm:p-10">
            <p className="text-lg leading-relaxed text-white/80">
              {t.about.summary}
            </p>
            <p className="mt-6 leading-relaxed text-white/50">
              {t.about.summaryExtra}
            </p>
          </GlassCard>
        </Reveal>

        <Reveal from="right" delay={120} className="lg:col-span-2">
          <GlassCard className="h-full rounded-3xl p-8">
            <h3 className="text-xs font-semibold tracking-widest text-white/40 uppercase">
              {t.about.languagesTitle}
            </h3>
            <ul className="mt-6 space-y-4">
              <li className="flex items-center justify-between text-sm">
                <span className="text-white/80">{t.about.spanish}</span>
                <span className="text-white/40">{t.about.native}</span>
              </li>
              <li className="flex items-center justify-between text-sm">
                <span className="text-white/80">{t.about.english}</span>
                <span className="text-white/40">B1+</span>
              </li>
            </ul>
          </GlassCard>
        </Reveal>
      </div>
    </Section>
  );
}
