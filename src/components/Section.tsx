import type { ReactNode } from "react";
import Reveal from "./Reveal";
import RevealText from "./RevealText";

export default function Section({
  id,
  index,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  index?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative px-6 py-24 sm:py-32">
      <div aria-hidden className="section-line absolute inset-x-0 top-0" />
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          {eyebrow && (
            <Reveal>
              <p className="flex items-center justify-center gap-3 text-sm font-medium tracking-wide text-white/40">
                {index && (
                  <span className="font-mono text-xs text-white/25">
                    {index}
                  </span>
                )}
                {eyebrow}
              </p>
            </Reveal>
          )}
          <h2 className="mt-3 text-3xl font-semibold tracking-tighter text-white sm:text-5xl">
            <RevealText text={title} />
          </h2>
          {description && (
            <Reveal delay={120}>
              <p className="mt-5 text-base font-light text-white/50 sm:text-lg">
                {description}
              </p>
            </Reveal>
          )}
        </div>
        <div className="mt-16">{children}</div>
      </div>
    </section>
  );
}
