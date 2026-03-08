"use client";

import { useEffect, useRef } from "react";

const skills = [
  { icon: "⚛️", name: "React / Next.js", type: "Frontend" },
  { icon: "🟢", name: "Node.js / Express", type: "Backend" },
  { icon: "🍃", name: "MongoDB", type: "Database" },
  { icon: "🔷", name: "TypeScript", type: "Language" },
  { icon: "⚡", name: "Socket.io", type: "Realtime" },
  { icon: "🔥", name: "Firebase", type: "Auth & DB" },
  { icon: "💨", name: "Tailwind CSS", type: "Styling" },
  { icon: "🐙", name: "Git & GitHub", type: "Version Control" },
  { icon: "🌐", name: "REST APIs", type: "Integration" },
  { icon: "🐘", name: "PostgreSQL", type: "Database" },
  { icon: "🔐", name: "JWT Auth", type: "Security" },
  { icon: "🚀", name: "Vercel / Netlify", type: "Deployment" },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 60);
            });
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="px-6 md:px-12 py-24 md:py-32 border-t border-border"
    >
      <div className="reveal flex items-center gap-3 text-accent text-xs font-medium uppercase tracking-widest mb-4">
        <span className="w-6 h-px bg-accent block" />
        Technologies
      </div>
      <h2
        className="reveal font-display leading-none tracking-wide mb-14"
        style={{ fontSize: "clamp(3rem, 6vw, 6rem)" }}
      >
        WHAT I<br />WORK WITH
      </h2>

      {/* Grid */}
      <div
        className="reveal-stagger grid grid-cols-2 md:grid-cols-4 border border-border"
        style={{ gap: "1px", background: "#1e1e1c" }}
      >
        {skills.map((s) => (
          <div
            key={s.name}
            className="reveal bg-bg p-6 md:p-8 transition-colors duration-200 hover:bg-surface group"
          >
            <span className="block text-2xl mb-3">{s.icon}</span>
            <div className="text-text font-medium text-sm mb-1 group-hover:text-text transition-colors">{s.name}</div>
            <div className="text-accent text-xs uppercase tracking-widest">{s.type}</div>
          </div>
        ))}
      </div>

      {/* GitHub CTA */}
      <div className="reveal mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-10 border-t border-border">
        <div>
          <p className="text-text font-medium mb-1">Want to see these skills in action?</p>
          <p className="text-muted text-sm">All my work lives on GitHub — open source and transparent.</p>
        </div>
        <a
          href="https://github.com/itopa1199"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-7 py-3 bg-accent text-bg text-xs font-semibold uppercase tracking-widest no-underline transition-all duration-200 hover:bg-[#d4f755] hover:-translate-y-0.5 flex-shrink-0"
        >
          <GithubIcon />
          View GitHub ↗
        </a>
      </div>
    </section>
  );
}

function GithubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}
