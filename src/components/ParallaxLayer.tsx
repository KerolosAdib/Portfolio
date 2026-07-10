"use client";

import { useEffect, useRef } from "react";

/* Fraction of scroll distance the layer travels. The layer lives inside the
   section, so it already moves at 1x with the page. Translating it *down* by
   `SPEED` of the scrolled distance nets out to (1 - SPEED) apparent speed,
   which is what reads as "slower than the foreground". Above ~0.35 it stops
   looking like depth and starts looking like a bug.

   Note that raising this does far less for perceptibility than giving the layer
   trackable edges. At 0.15 with only soft gradients the effect was invisible;
   the fix was the three-scale texture in `.parallax-layer`, not the speed. */
const SPEED = 0.25;

export default function ParallaxLayer() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = ref.current;
    const section = layer?.parentElement;
    if (!layer || !section) return;

    // Respect the same preference globals.css honors. No listener at all,
    // rather than a listener whose output is thrown away.
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return;

    let queued = false;

    const paint = () => {
      queued = false;
      const rect = section.getBoundingClientRect();

      // Nothing to do while the section is far off screen.
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;

      // Distance scrolled since the section's top crossed the viewport bottom.
      const progress = window.innerHeight - rect.top;
      layer.style.setProperty("--parallax-y", `${progress * SPEED}px`);
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

  return <div ref={ref} className="parallax-layer" aria-hidden="true" />;
}
