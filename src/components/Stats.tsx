"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { memo, useEffect, useRef, useState } from "react";
import { useApp } from "@/lib/app-context";
import { stats } from "@/data/portfolio";

const Counter = memo(function Counter({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: reduce ? 0 : 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, reduce]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
});

export default function Stats() {
  const { t } = useApp();

  return (
    <section className="relative px-6 pb-8">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl sm:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.key}
            className="flex flex-col items-center gap-1 bg-white/[0.01] px-6 py-8 text-center"
          >
            <span className="text-3xl font-semibold tracking-tighter text-white sm:text-4xl">
              <Counter value={stat.value} suffix={stat.suffix} />
            </span>
            <span className="text-xs tracking-wide text-white/40 uppercase">
              {t.stats[stat.key]}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
