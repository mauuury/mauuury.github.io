"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, type MouseEvent, type ReactNode } from "react";

export default function GlassCard({
  children,
  className = "",
  hover = true,
  tilt = false,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  tilt?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const active = tilt && !reduce;

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(py, [0, 1], [6, -6]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(px, [0, 1], [-6, 6]), {
    stiffness: 150,
    damping: 20,
  });

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    el.style.setProperty("--my", `${event.clientY - rect.top}px`);
    if (active) {
      px.set((event.clientX - rect.left) / rect.width);
      py.set((event.clientY - rect.top) / rect.height);
    }
  };

  const handleLeave = () => {
    if (!active) return;
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={
        active ? { rotateX, rotateY, transformPerspective: 900 } : undefined
      }
      whileHover={hover && !reduce ? { y: -6 } : undefined}
      transition={{ type: "spring", stiffness: 150, damping: 20 }}
      className={`glass ${className}`}
    >
      <span aria-hidden className="glass-liquid" />
      <span aria-hidden className="glass-spotlight" />
      <span aria-hidden className="glass-sheen" />
      <div className="relative z-10 flex h-full w-full flex-col">{children}</div>
    </motion.div>
  );
}
