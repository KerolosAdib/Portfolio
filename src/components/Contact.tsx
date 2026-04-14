"use client";

import { useState, FormEvent } from "react";
import ScrollReveal from "./ScrollReveal";

const FORMSPREE_ID = "xnjlqror"; // Replace with your Formspree form ID

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-2">
            <span className="bg-gradient-to-br from-blue-500 to-cyan-400 bg-clip-text text-transparent">Get In Touch</span>
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mb-12" />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <ScrollReveal delay={200} direction="left">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-4 p-6 rounded-2xl bg-card-bg border border-card-border">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-8 h-8 text-accent"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Message Sent!</h3>
                <p className="text-muted">
                  Thanks for reaching out! I&apos;ll get back to you soon.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="px-6 py-2 rounded-lg bg-accent hover:bg-accent-hover text-white text-sm font-medium transition-colors duration-200"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" suppressHydrationWarning>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm text-muted mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    disabled={status === "loading"}
                    className="w-full px-4 py-3 rounded-xl bg-card-bg border border-card-border text-foreground placeholder-muted/50 focus:outline-none focus:border-accent transition-colors duration-200 disabled:opacity-50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-muted mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    disabled={status === "loading"}
                    className="w-full px-4 py-3 rounded-xl bg-card-bg border border-card-border text-foreground placeholder-muted/50 focus:outline-none focus:border-accent transition-colors duration-200 disabled:opacity-50"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm text-muted mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    disabled={status === "loading"}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-card-bg border border-card-border text-foreground placeholder-muted/50 focus:outline-none focus:border-accent transition-colors duration-200 resize-none disabled:opacity-50"
                    placeholder="What's on your mind?"
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-400 text-sm">
                    Something went wrong. Please try again or email me directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full px-8 py-3 rounded-xl bg-accent hover:bg-accent-hover text-white font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === "loading" ? (
                    <>
                      <svg
                        className="w-4 h-4 animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            )}
          </ScrollReveal>

          {/* Contact Info & Socials */}
          <ScrollReveal delay={400} direction="right">
            <div className="flex flex-col justify-center space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Let&apos;s work together
                </h3>
                <p className="text-muted leading-relaxed">
                  I&apos;m always open to discussing new projects, creative
                  ideas, or opportunities to be part of something great. Feel
                  free to reach out!
                </p>
              </div>

              <div className="space-y-4">
                {/* Email */}
                <a
                  href="mailto:KeroAdib@gmail.com"
                  className="flex items-center gap-4 text-muted hover:text-foreground transition-colors duration-200 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-card-bg border border-card-border flex items-center justify-center group-hover:border-accent/50 transition-colors duration-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                  <span className="text-sm">KeroAdib@gmail.com</span>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/KerolosAdib"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-muted hover:text-foreground transition-colors duration-200 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-card-bg border border-card-border flex items-center justify-center group-hover:border-accent/50 transition-colors duration-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                  <span className="text-sm">github.com/KerolosAdib</span>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/kero-adib"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-muted hover:text-foreground transition-colors duration-200 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-card-bg border border-card-border flex items-center justify-center group-hover:border-accent/50 transition-colors duration-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <span className="text-sm">linkedin.com/in/kero-adib</span>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
