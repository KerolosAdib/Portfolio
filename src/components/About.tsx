import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section
      id="about"
      className="section-light bg-background text-foreground py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-2">
            <span className="bg-gradient-to-br from-accent to-ember bg-clip-text text-transparent">About Me</span>
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mb-12" />
        </ScrollReveal>

        <div className="grid md:grid-cols-5 gap-12 md:gap-20 items-center">
          {/* Text */}
          <ScrollReveal className="md:col-span-3" delay={200}>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                I&apos;m a software engineer who thrives on building things
                that actually matter. At Google, I optimized tooling for Google
                Assistant in Android Auto, cutting response times by ~30% for
                vehicle manufacturers worldwide. Now at Zazmic, I&apos;m
                shipping AI agents and MCP clients that automate workflows
                across cybersecurity, data analysis, and more.
              </p>
              <p>
                My path into engineering started with a simple curiosity. I
                wanted to understand how things work under the hood. That led me
                through a CS degree at the University of Washington, an
                internship building healthcare communication tools at Philips,
                and eventually to working on systems at scale. Along the way,
                I&apos;ve developed a deep appreciation for clean architecture,
                reliable APIs, and code that other people can actually read.
              </p>
              <p>
                Right now, I&apos;m especially excited about the intersection of
                AI and backend engineering: integrating LLMs into production
                workflows, building agentic systems, and figuring out how to
                make these tools genuinely useful. When I&apos;m not coding,
                I&apos;m probably exploring a new framework, tinkering with a
                side project, or deep in a fighting game tournament bracket.
              </p>
            </div>
          </ScrollReveal>

          {/* Photo Placeholder */}
          <ScrollReveal className="md:col-span-2 flex justify-center md:justify-start" delay={400} direction="right">
            {/* Fluid below md so the photo never exceeds the phone's width and
                forces horizontal scroll; pinned back to a fixed 512px square from
                md up, which is the desktop layout unchanged. */}
            <div className="relative group w-full max-w-sm md:w-auto md:max-w-none">
              <div className="w-full aspect-square md:w-128 md:h-128 md:aspect-auto rounded-2xl bg-card-bg border-2 border-card-border overflow-hidden transition-transform duration-300 group-hover:scale-105">
                {/* The crimson backdrop is the most saturated block on the page
                    and outranks the amber accent. Pulling it back to 70% lets
                    the accent stay the loudest color. Full saturation returns
                    on hover, so the photo is muted, not washed out. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/image0.jpg"
                  alt="Kero Adib"
                  className="w-full h-full object-cover saturate-[0.70] transition-[filter] duration-300 group-hover:saturate-100"
                />
              </div>
              {/* Decorative border */}
              <div className="absolute -inset-2 rounded-2xl border-2 border-accent/20 -z-10 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
