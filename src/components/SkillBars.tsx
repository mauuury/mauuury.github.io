"use client";

import { motion, useReducedMotion } from "framer-motion";
import { skillLevels } from "@/data/portfolio";

export default function SkillBars() {
  const reduce = useReducedMotion();

  return (
    <div className="grid gap-x-12 gap-y-6 sm:grid-cols-2">
      {skillLevels.map((skill, index) => (
        <div key={skill.name}>
          <div className="flex items-center justify-between text-sm">
            <span className="text-white/75">{skill.name}</span>
            <span className="font-mono text-xs text-white/35">
              {skill.value}%
            </span>
          </div>
          <div className="mt-2.5 h-1 w-full overflow-hidden rounded-full bg-white/10">
            <motion.div
              initial={reduce ? { scaleX: skill.value / 100 } : { scaleX: 0 }}
              whileInView={{ scaleX: skill.value / 100 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                type: "spring",
                stiffness: 90,
                damping: 20,
                delay: index * 0.06,
              }}
              style={{ transformOrigin: "left" }}
              className="h-full rounded-full bg-gradient-to-r from-white/50 to-white"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
