"use client";

import Section from "./Section";
import GlassCard from "./GlassCard";
import SkillBars from "./SkillBars";
import { Stagger, StaggerItem } from "./Stagger";
import { useApp } from "@/lib/app-context";
import { skillGroups } from "@/data/portfolio";

export default function Skills() {
  const { t } = useApp();

  return (
    <Section
      id="habilidades"
      index="05"
      eyebrow={t.skills.eyebrow}
      title={t.skills.title}
      description={t.skills.description}
    >
      <Stagger className="grid gap-6 md:grid-cols-3">
        {skillGroups.map((group, index) => (
          <StaggerItem key={group.key} className="h-full">
            <GlassCard className="h-full rounded-3xl p-8">
              <h3 className="text-xs font-semibold tracking-widest text-white/40 uppercase">
                {t.skills.groups[index]}
              </h3>
              <ul className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/[0.06] px-3.5 py-1.5 text-sm text-white/75 transition-colors duration-300 hover:border-white/30 hover:bg-white/15"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </StaggerItem>
        ))}
      </Stagger>

      <div className="mx-auto mt-14 max-w-3xl rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl sm:p-10">
        <h3 className="text-xs font-semibold tracking-widest text-white/40 uppercase">
          {t.skills.barsTitle}
        </h3>
        <div className="mt-7">
          <SkillBars />
        </div>
      </div>
    </Section>
  );
}
