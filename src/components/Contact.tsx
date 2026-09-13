"use client";

import Section from "./Section";
import Reveal from "./Reveal";
import GlassCard from "./GlassCard";
import MagneticButton from "./MagneticButton";
import CopyEmail from "./CopyEmail";
import { useApp } from "@/lib/app-context";
import { profile } from "@/data/portfolio";

export default function Contact() {
  const { t } = useApp();

  return (
    <Section
      id="contacto"
      index="06"
      eyebrow={t.contact.eyebrow}
      title={t.contact.title}
      description={t.contact.description}
    >
      <Reveal from="scale">
        <GlassCard
          hover={false}
          className="glow-border mx-auto max-w-3xl rounded-[2rem] p-10 text-center sm:p-14"
        >
          <p className="text-xs font-semibold tracking-widest text-white/40 uppercase">
            {t.contact.emailLabel}
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-3 inline-block text-lg font-medium break-all text-white transition-colors hover:text-white/70 sm:text-2xl"
          >
            {profile.email}
          </a>

          <div className="mt-5 flex justify-center">
            <CopyEmail email={profile.email} />
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <MagneticButton
              href={`mailto:${profile.email}`}
              className="w-full rounded-full bg-white px-6 py-3 text-sm font-medium text-black shadow-[0_0_30px_-8px_rgba(255,255,255,0.45)] transition-colors duration-300 hover:bg-white/90 sm:w-auto"
            >
              {t.contact.sendEmail}
            </MagneticButton>
            <MagneticButton
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="w-full rounded-full border border-white/15 bg-white/[0.06] px-6 py-3 text-sm font-medium text-white backdrop-blur-xl transition-colors duration-300 hover:border-white/30 hover:bg-white/10 sm:w-auto"
            >
              {profile.phone}
            </MagneticButton>
          </div>

          <p className="mt-8 text-sm text-white/40">{t.contact.location}</p>
        </GlassCard>
      </Reveal>
    </Section>
  );
}
