"use client";

import { useEffect, useRef, useState } from "react";

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789/<>*";

export default function TextScramble({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let frame = 0;
    let raf = 0;
    let started = false;

    const run = () => {
      const iteration = frame / 3;
      setDisplay(
        text
          .split("")
          .map((char, i) =>
            i < iteration
              ? char
              : chars[Math.floor(Math.random() * chars.length)],
          )
          .join(""),
      );
      frame += 1;
      if (iteration < text.length) {
        raf = requestAnimationFrame(run);
      } else {
        setDisplay(text);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true;
          raf = requestAnimationFrame(run);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, [text]);

  return (
    <span ref={ref} className={className} aria-label={text}>
      {display}
    </span>
  );
}
