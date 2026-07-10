import ScrollReveal from "./ScrollReveal";

type SkillRef = { label: string; href: string };
type Skill = { name: string; why: string; usedIn: SkillRef[] };
type SkillCategory = { title: string; skills: Skill[]; also: string[] };

/* Each `why` is grounded in work described elsewhere on this page, and `usedIn`
   deep-links to the card that proves it. The hrefs point at `id`s defined in
   Experience.tsx and Projects.tsx: renaming one there breaks a link here
   silently, with no build error. Grep for the id before changing it.

   `also` holds skills with no card to point at, rendered as plain chips with no
   claim attached. It is empty today because every skill is backed. Keep it:
   it is where an unearned skill goes, rather than getting an invented reason. */
const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      {
        name: "Python",
        why: "Every AI agent and MCP client I ship at Zazmic is written in it.",
        usedIn: [{ label: "Zazmic", href: "#exp-zazmic" }],
      },
      {
        name: "Kotlin",
        why: "The Android Auto testing tool at Google, used by vehicle manufacturers to validate Assistant.",
        usedIn: [{ label: "Google", href: "#exp-google" }],
      },
      {
        name: "Java",
        why: "Strike-Bot's event-driven moderation, and the JVM half of my work at Google.",
        usedIn: [
          { label: "Google", href: "#exp-google" },
          { label: "Strike-Bot", href: "#proj-strike-bot" },
        ],
      },
      {
        name: "TypeScript",
        why: "Catches at compile time the mistakes that tests never get around to.",
        usedIn: [{ label: "Mentorship Program", href: "#exp-mentorship" }],
      },
      {
        name: "JavaScript",
        why: "Runs the flashkick.gg pipeline that pulls Street Fighter tournament data in real time.",
        usedIn: [
          { label: "flashkick.gg", href: "#proj-flashkick" },
          { label: "Corpses Are Forever", href: "#proj-corpses" },
        ],
      },
      {
        name: "C#",
        why: "Built JWT-authenticated web apps with it under mentorship from Amazon and Meta engineers.",
        usedIn: [{ label: "Mentorship Program", href: "#exp-mentorship" }],
      },
      {
        name: "C++",
        why: "Systems coursework at UW, where I learned what the abstractions are hiding.",
        usedIn: [{ label: "University of Washington", href: "#edu-uw" }],
      },
    ],
    also: [],
  },
  {
    title: "AI & Agents",
    skills: [
      {
        name: "LangChain",
        why: "Orchestrates the multi-step agent workflows behind Zazmic's automation work.",
        usedIn: [{ label: "Zazmic", href: "#exp-zazmic" }],
      },
      {
        name: "Google ADK",
        why: "Google's agent framework. What I reach for when an agent has to reach production.",
        usedIn: [{ label: "Zazmic", href: "#exp-zazmic" }],
      },
      {
        name: "MCP",
        why: "How a model gets real tools and real data. I build the clients that hand them over.",
        usedIn: [{ label: "Zazmic", href: "#exp-zazmic" }],
      },
      {
        name: "OpenAI API",
        why: "One of two model providers behind the agents. Choosing between them is part of the job.",
        usedIn: [{ label: "Zazmic", href: "#exp-zazmic" }],
      },
      {
        name: "Anthropic API",
        why: "The other one. Different strengths, different prompts, the same evaluation pipeline.",
        usedIn: [{ label: "Zazmic", href: "#exp-zazmic" }],
      },
    ],
    also: [],
  },
  {
    title: "Backend & Web",
    skills: [
      {
        name: "Node.js",
        why: "The runtime under the flashkick.gg stats backend.",
        usedIn: [{ label: "flashkick.gg", href: "#proj-flashkick" }],
      },
      {
        name: "GraphQL",
        why: "Start.gg exposes tournament data through it. The pipeline consumes it.",
        usedIn: [{ label: "flashkick.gg", href: "#proj-flashkick" }],
      },
      {
        name: "REST",
        why: "Moved data between MRI operators and technicians in the Philips app.",
        usedIn: [
          { label: "Philips Healthcare", href: "#exp-philips" },
          { label: "Mentorship Program", href: "#exp-mentorship" },
        ],
      },
      {
        name: "React",
        why: "The mentorship-program apps, and the site you are reading right now.",
        usedIn: [{ label: "Mentorship Program", href: "#exp-mentorship" }],
      },
    ],
    also: [],
  },
  {
    title: "Cloud & Infrastructure",
    skills: [
      {
        name: "GCP",
        why: "Two years building inside it at Google, and the platform underneath the agents at Zazmic.",
        usedIn: [
          { label: "Google", href: "#exp-google" },
          { label: "Zazmic", href: "#exp-zazmic" },
        ],
      },
      {
        name: "Azure",
        why: "Hosts the secure, JWT-authenticated web apps I build in the apprenticeship.",
        usedIn: [{ label: "Mentorship Program", href: "#exp-mentorship" }],
      },
      {
        name: "AWS",
        why: "The infrastructure the flashkick.gg stats pipeline runs on.",
        usedIn: [{ label: "flashkick.gg", href: "#proj-flashkick" }],
      },
      {
        name: "Docker",
        why: "Packages the agents at Zazmic, so what ran on my laptop is what runs in production.",
        usedIn: [{ label: "Zazmic", href: "#exp-zazmic" }],
      },
      {
        name: "CI/CD",
        why: "Build, test, deploy. The part of shipping nobody sees until it stops working.",
        usedIn: [
          { label: "Google", href: "#exp-google" },
          { label: "Zazmic", href: "#exp-zazmic" },
        ],
      },
      {
        /* Deliberately links to the two sections rather than to cards. Seven
           card links would be noise, and "everywhere" is the actual claim. */
        name: "Git",
        why: "Every job and every project on this page runs through it. That ubiquity is the point.",
        usedIn: [
          { label: "Experience", href: "#experience" },
          { label: "Projects", href: "#projects" },
        ],
      },
      {
        name: "PostgreSQL",
        why: "Holds every player, set, and tournament that flashkick.gg tracks.",
        usedIn: [{ label: "flashkick.gg", href: "#proj-flashkick" }],
      },
      {
        name: "Linux",
        why: "Where the servers live, and half of the Google Cybersecurity certificate.",
        usedIn: [{ label: "Google Cybersecurity Certificate", href: "#cert-cybersecurity" }],
      },
    ],
    also: [],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-raised bg-background text-foreground py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-2">
            <span className="bg-gradient-to-br from-accent to-ember bg-clip-text text-transparent">Skills & Technologies</span>
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mb-4" />
          <p className="text-muted mb-12 max-w-2xl">
            Not a checklist. Each of these earned its place on a project that
            shipped, and links to it.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <ScrollReveal key={category.title} delay={index * 150}>
              <div className="p-6 rounded-2xl bg-card-bg border border-card-border shadow-[0_0_20px_var(--card-glow)] hover:shadow-[0_0_30px_var(--card-glow-hover)] transition-all duration-300 hover:-translate-y-1 h-full">
                <h3 className="text-xl font-semibold mb-6 text-accent">
                  {category.title}
                </h3>

                <dl className="space-y-5">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <dt className="font-mono text-sm text-accent">
                        {skill.name}
                      </dt>
                      <dd className="text-muted text-sm mt-1 leading-relaxed">
                        {skill.why}
                        <span className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1">
                          {skill.usedIn.map((ref) => (
                            <a
                              key={ref.href}
                              href={ref.href}
                              aria-label={`${skill.name}, used in ${ref.label}`}
                              className="text-xs font-mono text-muted/80 underline decoration-dotted decoration-muted/40 underline-offset-4 hover:text-accent hover:decoration-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors duration-200"
                            >
                              {ref.label}
                            </a>
                          ))}
                        </span>
                      </dd>
                    </div>
                  ))}
                </dl>

                {category.also.length > 0 && (
                  <div className="mt-6 pt-5 border-t border-card-border">
                    <p className="text-xs uppercase tracking-widest text-muted/70 mb-3">
                      Also
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {category.also.map((name) => (
                        <span
                          key={name}
                          className="px-3 py-1.5 text-sm rounded-lg bg-background border border-card-border text-muted"
                        >
                          {name}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
