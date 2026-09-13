"use client";

import Section from "./Section";
import GlassCard from "./GlassCard";
import { Stagger, StaggerItem } from "./Stagger";
import { useApp } from "@/lib/app-context";

const spans = [
  "md:col-span-6 lg:col-span-4",
  "md:col-span-6 lg:col-span-2",
];

export default function Projects() {
  const { t } = useApp();

  return (
    <Section
      id="proyectos"
      index="04"
      eyebrow={t.projects.eyebrow}
      title={t.projects.title}
      description={t.projects.description}
    >
      <Stagger className="grid gap-6 md:grid-cols-6">
        {t.projects.items.map((project, index) => (
          <StaggerItem
            key={project.title}
            className={`h-full ${spans[index % spans.length]}`}
          >
            <GlassCard
              tilt
              className={`flex h-full flex-col rounded-3xl p-8 sm:p-10 ${
                index === 0 ? "glow-border" : ""
              }`}
            >
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <span className="shrink-0 text-xs text-white/35">
                  {project.period}
                </span>
              </div>
              <p className="mt-1 text-sm text-white/55">{project.context}</p>
              <p className="mt-5 flex-1 text-sm leading-relaxed text-white/60">
                {project.description}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs text-white/60"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
