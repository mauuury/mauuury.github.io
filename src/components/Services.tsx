"use client";

import type { ReactNode } from "react";
import Section from "./Section";
import GlassCard from "./GlassCard";
import { Stagger, StaggerItem } from "./Stagger";
import { useApp } from "@/lib/app-context";

const iconProps = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const icons: ReactNode[] = [
  <svg key="web" {...iconProps}>
    <path d="m8 6-6 6 6 6M16 6l6 6-6 6M13 4l-2 16" />
  </svg>,
  <svg key="mobile" {...iconProps}>
    <rect x="6" y="2" width="12" height="20" rx="3" />
    <path d="M11 18h2" />
  </svg>,
  <svg key="backend" {...iconProps}>
    <rect x="3" y="3" width="18" height="7" rx="2" />
    <rect x="3" y="14" width="18" height="7" rx="2" />
    <path d="M7 6.5h.01M7 17.5h.01" />
  </svg>,
  <svg key="ui" {...iconProps}>
    <path d="m12 3 9 5-9 5-9-5 9-5Z" />
    <path d="m3 13 9 5 9-5" />
  </svg>,
];

export default function Services() {
  const { t } = useApp();

  return (
    <Section
      id="servicios"
      index="03"
      eyebrow={t.services.eyebrow}
      title={t.services.title}
      description={t.services.description}
    >
      <Stagger className="grid gap-6 md:grid-cols-2">
        {t.services.items.map((service, index) => (
          <StaggerItem key={service.title} className="h-full">
            <GlassCard
              tilt
              className="glow-border-hover h-full rounded-3xl p-8 sm:p-10"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-white/80">
                  {icons[index]}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {service.description}
                  </p>
                </div>
              </div>
            </GlassCard>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
