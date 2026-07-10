"use client";

import { useEffect, useRef, ReactNode } from "react";

/* Past about 8 degrees the text visibly softens, because the card is being
   resampled at an angle. 6 is the most you can take before a paragraph starts
   to look blurry rather than tilted. */
const MAX_DEG = 6;

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function TiltCard({ children, className = "", id }: TiltCardProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const card = cardRef.current;
    if (!wrap || !card) return;

    /* A touch device fires pointermove once on tap, which would leave the card
       tilted with no way to reset it. Never attach there. */
    const coarse = window.matchMedia("(hover: none), (pointer: coarse)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (coarse.matches || reduced.matches) return;

    let queued = false;
    let px = 0;
    let py = 0;

    const paint = () => {
      queued = false;
      const rect = wrap.getBoundingClientRect();
      const nx = (px - rect.left) / rect.width - 0.5;
      const ny = (py - rect.top) / rect.height - 0.5;

      // Cursor right of centre tilts the right edge away, so rotateY follows nx.
      // Cursor below centre tilts the bottom away, so rotateX is negated.
      card.style.setProperty("--tilt-y", `${(nx * MAX_DEG * 2).toFixed(2)}deg`);
      card.style.setProperty("--tilt-x", `${(-ny * MAX_DEG * 2).toFixed(2)}deg`);
    };

    const onMove = (e: PointerEvent) => {
      px = e.clientX;
      py = e.clientY;
      if (!queued) {
        queued = true;
        requestAnimationFrame(paint);
      }
    };

    const onLeave = () => {
      card.style.setProperty("--tilt-x", "0deg");
      card.style.setProperty("--tilt-y", "0deg");
    };

    wrap.addEventListener("pointermove", onMove);
    wrap.addEventListener("pointerleave", onLeave);
    return () => {
      wrap.removeEventListener("pointermove", onMove);
      wrap.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div ref={wrapRef} className="tilt-perspective h-full">
      <div ref={cardRef} id={id} className={`tilt-card ${className}`}>
        {children}
      </div>
    </div>
  );
}
