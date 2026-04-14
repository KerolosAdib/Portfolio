import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-2">
            <span className="bg-gradient-to-br from-blue-500 to-cyan-400 bg-clip-text text-transparent">About Me</span>
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mb-12" />
        </ScrollReveal>

        <div className="grid md:grid-cols-5 gap-12 items-center">
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
                My path into engineering started with a simple curiosity — I
                wanted to understand how things work under the hood. That led me
                through a CS degree at the University of Washington, an
                internship building healthcare communication tools at Philips,
                and eventually to working on systems at scale. Along the way,
                I&apos;ve developed a deep appreciation for clean architecture,
                reliable APIs, and code that other people can actually read.
              </p>
              <p>
                Right now, I&apos;m especially excited about the intersection of
                AI and backend engineering — integrating LLMs into production
                workflows, building agentic systems, and figuring out how to
                make these tools genuinely useful. When I&apos;m not coding,
                I&apos;m probably exploring a new framework, tinkering with a
                side project, or deep in a fighting game tournament bracket.
              </p>
            </div>
          </ScrollReveal>

          {/* Photo Placeholder */}
          <ScrollReveal className="md:col-span-2 flex justify-center" delay={400} direction="right">
            <div className="relative group">
              <div className="w-64 h-64 rounded-2xl bg-card-bg border-2 border-card-border overflow-hidden transition-transform duration-300 group-hover:scale-105">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/image0.jpg"
                  alt="Kero Adib"
                  className="w-full h-full object-cover"
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
