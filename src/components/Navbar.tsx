"use client";

import { useState, useEffect, useRef } from "react";

const navLinks = [
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Contact", href: "#contact", id: "contact" },
];

/* Tokens copied from the band under the bar onto the nav's own `--nav-*` vars. */
const TOKEN_MAP = [
  ["--color-background", "--nav-bg"],
  ["--color-foreground", "--nav-fg"],
  ["--color-accent", "--nav-ac"],
  ["--color-accent-hover", "--nav-ac-hover"],
  ["--color-ember", "--nav-em"],
] as const;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((link) =>
      document.getElementById(link.id)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px -40% 0px" }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  /* Recolor the bar to whatever band sits beneath it. This asks a different
     question than the scrollspy above, which fires at 30% visibility. Here we
     need the single section occupying the bar's own strip of the viewport, so
     we probe a point inside it rather than observe intersections. */
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const bands = Array.from(
      document.querySelectorAll<HTMLElement>("main section[id]")
    );
    if (bands.length === 0) return;

    let queued = false;

    const paint = () => {
      queued = false;
      const probe = nav.getBoundingClientRect().height / 2;

      let active: HTMLElement | undefined;
      for (const band of bands) {
        const { top, bottom } = band.getBoundingClientRect();
        if (top <= probe && bottom > probe) {
          active = band;
          break;
        }
      }
      // Above the first band (rubber-band scroll) or past the last one.
      if (!active) {
        active = probe < bands[0].getBoundingClientRect().top
          ? bands[0]
          : bands[bands.length - 1];
      }

      const styles = getComputedStyle(active);
      for (const [from, to] of TOKEN_MAP) {
        const value = styles.getPropertyValue(from).trim();
        if (value) nav.style.setProperty(to, value);
      }
    };

    const onScroll = () => {
      if (!queued) {
        queued = true;
        requestAnimationFrame(paint);
      }
    };

    paint();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      data-scrolled={scrolled}
      className="site-nav fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="site-nav__logo text-xl font-bold font-display bg-clip-text text-transparent tracking-tight"
        >
          KA
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                data-active={activeSection === link.id}
                className="site-nav__link text-sm transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/Kero_Adib_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="site-nav__cta text-sm px-4 py-2 rounded-lg transition-colors duration-200"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span
            className={`site-nav__bar block w-6 h-0.5 transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`site-nav__bar block w-6 h-0.5 transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`site-nav__bar block w-6 h-0.5 transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="site-nav__menu px-6 pb-6 flex flex-col gap-4 backdrop-blur-md">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                data-active={activeSection === link.id}
                className="site-nav__link text-sm transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/Kero_Adib_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="site-nav__cta inline-block text-sm px-4 py-2 rounded-lg transition-colors duration-200"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
