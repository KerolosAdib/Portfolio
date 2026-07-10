function Arrow() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="w-[1.05em] h-[1.05em] shrink-0 transition-transform duration-300 group-hover:translate-x-1"
    >
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient orbs. Amber sits next to the warm ground on the
          color wheel, so it needs far more alpha than the old blue did to read
          at all. Where the center wash and a side orb overlap the alphas
          compound: 5% + 16% is the brightest pair that keeps muted text at
          4.59:1. Raising either one drops it below 4.5:1. */}
      {/* Both anchored to the same axis. top-1/4 vs bottom-1/4 only share a
          vertical center when the orb height equals half the section height,
          so they drift apart as the orbs resize. */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-40 w-[40rem] h-[40rem] bg-ember/16 rounded-full blur-[90px]" />
      <div className="absolute top-1/2 -translate-y-1/2 -right-40 w-[40rem] h-[40rem] bg-ember/16 rounded-full blur-[90px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[46rem] h-[46rem] bg-accent/5 rounded-full blur-[130px]" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <p className="text-accent text-sm font-mono mb-4 animate-fade-in-up opacity-0">
          Hi, my name is
        </p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 animate-fade-in-up opacity-0 [animation-delay:200ms]">
          <span className="bg-gradient-to-br from-accent to-ember bg-clip-text text-transparent">
            Kero Adib
          </span>
        </h1>
        {/* Separators live in their own spans so a wrap never orphans a "·" */}
        <h2 className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-2xl sm:text-3xl md:text-4xl font-bold text-muted mb-4 animate-fade-in-up opacity-0 [animation-delay:400ms]">
          <span>Curious</span>
          <span aria-hidden="true" className="text-accent/40">
            &middot;
          </span>
          <span>Pragmatic</span>
          <span aria-hidden="true" className="text-accent/40">
            &middot;
          </span>
          <span>Relentless</span>
        </h2>
        <p className="text-accent text-sm sm:text-base font-mono mb-6 text-balance animate-fade-in-up opacity-0 [animation-delay:600ms]">
          ex-Google &middot; Building agentic systems at Zazmic
        </p>
        <p className="text-muted text-lg max-w-2xl mx-auto mb-10 text-pretty animate-fade-in-up opacity-0 [animation-delay:800ms]">
          I&apos;ve built software for cars, hospitals, and fighting game
          tournaments. Backend systems, AI agents, and whatever else the
          problem needs.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 animate-fade-in-up opacity-0 [animation-delay:800ms]">
          {/* Primary and secondary must not share size, radius, and hue, or the
              pair reads as a segmented control rather than a call to action. */}
          <a
            href="#projects"
            className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-gradient-to-br from-accent to-ember text-background font-semibold shadow-[0_0_0_rgba(255,176,32,0)] transition-[box-shadow] duration-300 hover:shadow-[0_6px_32px_rgba(255,176,32,0.42)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
          >
            View My Work
            <Arrow />
          </a>
          {/* Link, not a button. py-3 keeps the tap target near 44px. */}
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 px-1 py-3 font-medium text-muted transition-colors duration-200 hover:text-accent after:absolute after:left-1 after:right-1 after:bottom-2 after:h-px after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
          >
            Contact Me
            <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}
