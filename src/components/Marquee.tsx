"use client";

import { memo } from "react";
import { allSkills } from "@/data/portfolio";

const Marquee = memo(function Marquee() {
  const items = [...allSkills, ...allSkills];

  return (
    <div
      className="relative overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
      aria-hidden
    >
      <div className="flex w-max animate-marquee gap-3">
        {items.map((skill, i) => (
          <span
            key={`${skill}-${i}`}
            className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/50 backdrop-blur-md"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
});

export default Marquee;
