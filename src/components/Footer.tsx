import ScrollReveal from "./ScrollReveal";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-card-border">
      <ScrollReveal>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Kero Adib. All rights reserved.
          </p>
          <p className="text-sm text-muted">
            Built with{" "}
            <span className="text-accent">Next.js</span> &{" "}
            <span className="text-accent">Tailwind CSS</span>
          </p>
        </div>
      </ScrollReveal>
    </footer>
  );
}
