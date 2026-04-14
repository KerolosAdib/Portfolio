export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <p className="text-accent text-sm font-mono mb-4 animate-fade-in-up opacity-0">
          Hi, my name is
        </p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 animate-fade-in-up opacity-0 delay-200">
          Kero Adib
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-muted mb-6 animate-fade-in-up opacity-0 delay-400">
          Software Engineer
        </h2>
        <p className="text-muted text-lg max-w-xl mx-auto mb-10 animate-fade-in-up opacity-0 delay-600">
          Building scalable backend systems and AI-powered tools that solve
          real problems.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up opacity-0 delay-600">
          <a
            href="#projects"
            className="px-8 py-3 rounded-lg bg-accent hover:bg-accent-hover text-white font-medium transition-colors duration-200"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg border border-accent text-accent hover:bg-accent/10 font-medium transition-colors duration-200"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
