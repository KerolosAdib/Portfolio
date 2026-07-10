"use client";

import { useEffect, useRef } from "react";

/* Fills the timeline rule with amber as the reader scrolls through the roles.
   The fill tracks the vertical middle of the viewport: the line is complete
   exactly when the last role reaches the centre of the screen.

   Must be a direct child of the timeline's `relative` wrapper, since it measures
   `parentElement` to know how tall the timeline is. */
export default function TimelineProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = ref.current;
    const track = bar?.parentElement;
    if (!bar || !track) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let queued = false;

    const paint = () => {
      queued = false;
      const rect = track.getBoundingClientRect();
      if (rect.height === 0) return;

      const midpoint = window.innerHeight / 2;
      const progress = (midpoint - rect.top) / rect.height;
      const clamped = Math.min(1, Math.max(0, progress));

      bar.style.setProperty("--timeline-progress", `${clamped}`);
    };

    const onScroll = () => {
      if (!queued) {
        queued = true;
        requestAnimationFrame(paint);
      }
    };

    paint();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="timeline-progress absolute left-0 md:left-8 top-0 bottom-0 w-px"
    />
  );
}
