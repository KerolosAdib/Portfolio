import ScrollReveal from "./ScrollReveal";

const experiences = [
  {
    role: "AI Engineer",
    company: "Zazmic",
    location: "Remote",
    period: "Oct 2025 — Present",
    description:
      "Designing and deploying AI agents and MCP clients for automation, data analysis, and cybersecurity use cases across a globally distributed team. Researching and integrating large language models (LLMs) into production workflows, including prompt engineering and evaluation pipelines. Shipping end-to-end AI-driven features across multiple client domains with rapid iteration cycles.",
    technologies: ["Python", "LangChain", "MCP", "OpenAI API", "Anthropic API", "Google ADK"],
  },
  {
    role: "Software Engineer",
    company: "Google",
    location: "Kirkland, WA",
    period: "July 2022 — Oct 2023",
    description:
      "Built and optimized a testing tool used by vehicle manufacturers to validate Google Assistant functionality in Android Auto, delivering performance improvements that reduced response times by ~30%. Drove code quality across the team through thorough code reviews and documentation updates. Operated within an Agile Scrum workflow, owning task tracking and sprint coordination.",
    technologies: ["Kotlin", "Java", "GCP", "Agile", "Android Auto"],
  },
  {
    role: "Software Engineering Apprentice",
    company: "Mentorship Program",
    location: "Remote",
    period: "June 2024 — Present",
    description:
      "Building secure, scalable web applications with JWT-based authentication under mentorship from engineers at Amazon, Meta, Airbnb, Microsoft, and Google. Deepening proficiency in frontend architecture, backend design, and data structures & algorithms through structured project work and code review.",
    technologies: ["React", "TypeScript", "C#", "JWT", "REST APIs"],
  },
  {
    role: "Software Engineer Intern",
    company: "Philips Healthcare",
    location: "Bothell, WA",
    period: "July 2021 — Sept 2021",
    description:
      "Developed Swift-based mobile app features integrating REST APIs to enable secure communication between MRI/CT operators and technicians. Collaborated with design and QA teams to build intuitive UI components and validate usability across devices. Participated in daily standups and sprint reviews, contributing implementation updates and incorporating feedback from senior engineers.",
    technologies: ["Swift", "REST APIs", "iOS", "Agile"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-2">
            <span className="bg-gradient-to-br from-blue-500 to-cyan-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mb-12" />
        </ScrollReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-card-border" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <ScrollReveal key={index} delay={index * 200}>
                <div className="relative pl-8 md:pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-8 -translate-x-1/2 w-3 h-3 rounded-full bg-accent border-2 border-background" />

                  <div className="p-6 rounded-2xl bg-card-bg border border-card-border shadow-[0_0_20px_rgba(59,130,246,0.15)] hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300 hover:-translate-y-1">
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
                    <p className="text-muted text-sm mb-4">{exp.description}</p>
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
            <span className="bg-gradient-to-br from-blue-500 to-cyan-400 bg-clip-text text-transparent">Education</span>
          </h3>
          <div className="relative pl-8 md:pl-20">
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-card-border" />
            <div className="absolute left-0 md:left-8 -translate-x-1/2 w-3 h-3 rounded-full bg-accent border-2 border-background" />
            <div className="p-6 rounded-2xl bg-card-bg border border-card-border shadow-[0_0_20px_rgba(59,130,246,0.15)] hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300 hover:-translate-y-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h4 className="text-xl font-semibold">University of Washington</h4>
                <span className="text-sm text-accent font-mono">2018 — 2021</span>
              </div>
              <p className="text-accent/80 font-medium mb-3">
                BS in Computer Science (Minor in Math)
              </p>
              <p className="text-muted text-sm">
                Relevant Coursework: Operating Systems, Databases, Algorithms, Network Security
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Certifications */}
        <ScrollReveal delay={200} className="mt-16">
          <h3 className="text-2xl font-bold mb-6">
            <span className="bg-gradient-to-br from-blue-500 to-cyan-400 bg-clip-text text-transparent">Certifications</span>
          </h3>
          <div className="relative pl-8 md:pl-20">
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-card-border" />
            <div className="absolute left-0 md:left-8 -translate-x-1/2 w-3 h-3 rounded-full bg-accent border-2 border-background" />
            <div className="p-6 rounded-2xl bg-card-bg border border-card-border shadow-[0_0_20px_rgba(59,130,246,0.15)] hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300 hover:-translate-y-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h4 className="text-xl font-semibold">Google Cybersecurity Certificate</h4>
                <span className="text-sm text-accent font-mono">June 2024 — Dec 2024</span>
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
