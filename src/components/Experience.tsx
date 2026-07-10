import ScrollReveal from "./ScrollReveal";
import ParallaxLayer from "./ParallaxLayer";
import TimelineProgress from "./TimelineProgress";

/* `id` is a deep-link target. Skills.tsx links to these, so renaming one
   silently breaks a link rather than erroring. Grep before you change it. */
const experiences = [
  {
    id: "exp-zazmic",
    role: "AI Engineer",
    company: "Zazmic",
    location: "Remote",
    period: "Oct 2025 – Present",
    bullets: [
      "Design and deploy AI agents and MCP clients for automation, data analysis, and cybersecurity across a globally distributed team.",
      "Research and integrate large language models into production workflows, including prompt engineering and evaluation pipelines.",
      "Ship end-to-end AI-driven features across multiple client domains on rapid iteration cycles.",
    ],
    technologies: ["Python", "LangChain", "MCP", "OpenAI API", "Anthropic API", "Google ADK", "GCP", "Docker", "CI/CD"],
  },
  {
    id: "exp-google",
    role: "Software Engineer",
    company: "Google",
    location: "Kirkland, WA",
    period: "July 2022 – Oct 2023",
    bullets: [
      "Cut Google Assistant response times by roughly 30% in the testing tool vehicle manufacturers use to validate Android Auto.",
      "Drove code quality across the team through thorough code reviews and documentation updates.",
      "Owned task tracking and sprint coordination within an Agile Scrum workflow.",
    ],
    technologies: ["Kotlin", "Java", "GCP", "CI/CD", "Agile", "Android Auto"],
  },
  {
    id: "exp-mentorship",
    role: "Software Engineering Apprentice",
    company: "Mentorship Program",
    location: "Remote",
    period: "June 2024 – Present",
    bullets: [
      "Build secure, scalable web applications with JWT-based authentication, mentored by engineers at Amazon, Meta, Airbnb, Microsoft, and Google.",
      "Deepen frontend architecture, backend design, and data structures and algorithms through structured project work and code review.",
    ],
    technologies: ["React", "TypeScript", "C#", "JWT", "REST APIs", "Azure"],
  },
  {
    id: "exp-philips",
    role: "Software Engineer Intern",
    company: "Philips Healthcare",
    location: "Bothell, WA",
    period: "July 2021 – Sept 2021",
    bullets: [
      "Built Swift mobile features on REST APIs, enabling secure communication between MRI and CT operators and their technicians.",
      "Collaborated with design and QA to build intuitive UI components and validate usability across devices.",
      "Contributed implementation updates in daily standups and sprint reviews, incorporating feedback from senior engineers.",
    ],
    technologies: ["Swift", "REST APIs", "iOS", "Agile"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-clay relative overflow-hidden bg-background text-foreground py-24 px-6"
    >
      {/* Must be a direct child: it measures its parentElement. */}
      <ParallaxLayer />

      {/* Sits above the layer, below the content. h-40 clears the 96px of top
          padding plus the heading, so the texture reaches full strength just
          under the amber rule. */}
      <div
        aria-hidden="true"
        className="parallax-fade pointer-events-none absolute inset-x-0 top-0 h-40 z-0"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-2">
            <span className="bg-gradient-to-br from-accent to-ember bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mb-12" />
        </ScrollReveal>

        <div className="relative">
          {/* Timeline line: static track, then the amber fill that follows the
              scroll. TimelineProgress must stay a direct child of this div. */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-card-border" />
          <TimelineProgress />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <ScrollReveal key={exp.id} delay={index * 200}>
                <div className="relative pl-8 md:pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-8 -translate-x-1/2 w-3 h-3 rounded-full bg-accent border-2 border-background" />

                  <div
                    id={exp.id}
                    className="deep-link scroll-mt-28 p-6 rounded-2xl bg-card-bg border border-card-border shadow-[0_0_20px_var(--card-glow)] hover:shadow-[0_0_30px_var(--card-glow-hover)] transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-xl font-semibold">{exp.role}</h3>
                      <span className="text-sm text-accent font-mono">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-accent/80 font-medium mb-1">
                      {exp.company}
                    </p>
                    <p className="text-muted/60 text-sm mb-3">
                      {exp.location}
                    </p>
                    <ul className="mb-4 space-y-2">
                      {exp.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="relative pl-5 text-muted text-sm leading-relaxed"
                        >
                          <span
                            aria-hidden="true"
                            className="absolute left-0 top-[0.5rem] w-1.5 h-1.5 rounded-full bg-accent/70"
                          />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 rounded-md bg-accent/10 text-accent font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Education */}
        <ScrollReveal delay={100} className="mt-16">
          <h3 className="text-2xl font-bold mb-6">
            <span className="bg-gradient-to-br from-accent to-ember bg-clip-text text-transparent">Education</span>
          </h3>
          <div className="relative pl-8 md:pl-20">
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-card-border" />
            <TimelineProgress />
            <div className="absolute left-0 md:left-8 -translate-x-1/2 w-3 h-3 rounded-full bg-accent border-2 border-background" />
            <div
              id="edu-uw"
              className="deep-link scroll-mt-28 p-6 rounded-2xl bg-card-bg border border-card-border shadow-[0_0_20px_var(--card-glow)] hover:shadow-[0_0_30px_var(--card-glow-hover)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h4 className="text-xl font-semibold">University of Washington</h4>
                <span className="text-sm text-accent font-mono">2018 – 2021</span>
              </div>
              <p className="text-accent/80 font-medium mb-3">
                BS in Computer Science (Minor in Math)
              </p>
              <p className="text-muted text-sm">
                Relevant Coursework: Operating Systems, Databases, Algorithms, Network Security, much of it written in C++
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Certifications */}
        <ScrollReveal delay={200} className="mt-16">
          <h3 className="text-2xl font-bold mb-6">
            <span className="bg-gradient-to-br from-accent to-ember bg-clip-text text-transparent">Certifications</span>
          </h3>
          <div className="relative pl-8 md:pl-20">
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-card-border" />
            <TimelineProgress />
            <div className="absolute left-0 md:left-8 -translate-x-1/2 w-3 h-3 rounded-full bg-accent border-2 border-background" />
            <div
              id="cert-cybersecurity"
              className="deep-link scroll-mt-28 p-6 rounded-2xl bg-card-bg border border-card-border shadow-[0_0_20px_var(--card-glow)] hover:shadow-[0_0_30px_var(--card-glow-hover)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h4 className="text-xl font-semibold">Google Cybersecurity Certificate</h4>
                <span className="text-sm text-accent font-mono">June 2024 – Dec 2024</span>
              </div>
              <p className="text-accent/80 font-medium mb-3">
                Coursera
              </p>
              <p className="text-muted text-sm">
                Notable Coursework: Automate Tasks with Python, Tools of the Trade: Linux and SQL, Foundations of Cybersecurity, Sound the Alarm: Detection and Response, Assets, Threats, and Vulnerabilities, Play It Safe: Manage Security Risks, Connect and Protect: Networks and Network Security
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
