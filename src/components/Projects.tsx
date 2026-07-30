import ScrollReveal from "./ScrollReveal";
import TiltCard from "./TiltCard";

type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  github: string | null;
  live: string | null;
  /* Path under /public. Optional: a card with no thumbnail falls back to a
     monogram panel (see ProjectThumb), so the grid stays uniform until every
     project has an image. Drop a file in /public and add its path here. */
  thumbnail?: string;
  /* How the image sits in the 3:2 box. "cover" (default) fills it edge to edge,
     cropping to fit: right for a full-bleed screenshot. "contain" letterboxes
     the whole image on the navy panel: right for a logo you must not crop. */
  thumbnailFit?: "cover" | "contain";
};

/* `id` is a deep-link target that Skills.tsx links to. See the note there. */
const projects: Project[] = [
  {
    id: "proj-flashkick",
    title: "Stats Retrieval Backend for flashkick.gg",
    description:
      "A modular backend pipeline that extracts and processes tournament data from Start.gg in real time. Enables reliable player and set association for Street Fighter 6 events, with architecture designed to scale across additional fighting game titles.",
    tags: ["JavaScript", "Node.js", "GraphQL", "PostgreSQL", "AWS"],
    github: "https://github.com/KerolosAdib",
    live: "https://flashkick.gg",
    thumbnail: "/flashkick.jpg",
    thumbnailFit: "contain",
  },
  {
    id: "proj-strike-bot",
    title: "Strike-Bot",
    description:
      "A Discord bot built to streamline server administration with an automated strike system for tracking and managing user infractions. Provides moderation tools for warnings, escalation, and record-keeping, all driven by event-based architecture.",
    tags: ["Java", "JDA", "Git", "Agile"],
    github: "https://github.com/KerolosAdib/StrikeBot",
    live: null,
    thumbnail: "/strikebot.png",
  },
  {
    id: "proj-corpses",
    title: "Corpses Are Forever",
    description:
      "A 2D puzzle game built in a 3-person team where players strategically use fallen characters to solve increasingly complex challenges. Playable in the browser, designed with creative problem-solving mechanics and developed using Agile workflows.",
    tags: ["HTML", "CSS", "JavaScript", "Agile"],
    github: "https://github.com/RemoteControlFisher/CorpsesForeverGame",
    live: "https://remotecontrolfisher.github.io/CorpsesForeverGame/",
    thumbnail: "/corpses.png",
  },
];

/* The preview panel above each card. Fixed 3:2 box so every card is the same
   height regardless of the image's own ratio. The backdrop is #0d1524, the
   navy the Flashkick logo already sits on, so that mark letterboxes with no
   visible seam; cover images fill the box and never show it.
   Fit is per project (see thumbnailFit): "contain" pads a logo onto the panel
   so it is never cropped, "cover" fills the box with a full-bleed screenshot.
   Raw <img>, matching About.tsx: these are below the fold, so next/image's
   optimization buys little and its config costs more than it saves. */
function ProjectThumb({ project }: { project: Project }) {
  const contain = project.thumbnailFit === "contain";
  return (
    <div className="relative aspect-[3/2] overflow-hidden rounded-xl bg-[#0d1524] border border-card-border mb-4">
      {project.thumbnail ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={project.thumbnail}
          alt={`${project.title} preview`}
          className={`w-full h-full ${
            contain ? "object-contain p-4" : "object-cover"
          }`}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent/10 to-ember/10">
          <span
            aria-hidden="true"
            className="font-mono text-4xl font-bold bg-gradient-to-br from-accent to-ember bg-clip-text text-transparent"
          >
            {project.title
              .replace(/[^a-zA-Z ]/g, "")
              .split(" ")
              .filter(Boolean)
              .slice(0, 2)
              .map((w) => w[0].toUpperCase())
              .join("")}
          </span>
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-sand bg-background text-foreground py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-2">
            <span className="bg-gradient-to-br from-accent to-ember bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mb-12" />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ScrollReveal
              key={project.id}
              delay={index * 150}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              {/* The lift is now `translateZ` inside .tilt-card, not
                  `hover:-translate-y-1`. Two rules writing `transform` on one
                  element means one of them silently loses. */}
              <TiltCard
                id={project.id}
                className="deep-link scroll-mt-28 group p-6 rounded-2xl bg-card-bg border border-card-border shadow-[0_0_20px_var(--card-glow)] hover:shadow-[0_0_30px_var(--card-glow-hover)] flex flex-col h-full"
              >
                <ProjectThumb project={project} />
                <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-muted text-sm mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-md bg-accent/10 text-accent font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-foreground transition-colors duration-200 flex items-center gap-1.5 text-sm"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4"
                      >
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                      Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-foreground transition-colors duration-200 flex items-center gap-1.5 text-sm"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                        />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
