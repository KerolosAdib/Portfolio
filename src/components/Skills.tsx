import ScrollReveal from "./ScrollReveal";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      "Python",
      "Kotlin",
      "Java",
      "TypeScript",
      "JavaScript",
      "C#",
      "C++",
    ],
  },
  {
    title: "Frameworks & Tools",
    skills: [
      "LangChain",
      "Google ADK",
      "MCP",
      "OpenAI API",
      "Anthropic API",
      "React",
      "Node.js",
      "REST",
      "GraphQL",
      "Docker",
      "Git",
      "Linux",
      "CI/CD",
    ],
  },
  {
    title: "Cloud & Databases",
    skills: [
      "GCP",
      "Azure",
      "AWS",
      "PostgreSQL",
      "Redis",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-2">
            <span className="bg-gradient-to-br from-blue-500 to-cyan-400 bg-clip-text text-transparent">Skills & Technologies</span>
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mb-12" />
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <ScrollReveal key={category.title} delay={index * 150}>
              <div className="p-6 rounded-2xl bg-card-bg border border-card-border shadow-[0_0_20px_rgba(59,130,246,0.15)] hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300 hover:-translate-y-1 h-full">
                <h3 className="text-xl font-semibold mb-6 text-accent">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-lg bg-background border border-card-border text-muted hover:text-foreground hover:border-accent/50 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
