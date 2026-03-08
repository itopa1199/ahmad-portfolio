"use client";

import { useEffect, useRef } from "react";

const experience = [
  {
    year: "2023 — Present",
    role: "Freelance Developer",
    org: "Independent",
    desc: "Delivering fullstack web & app development services to clients across different industries.",
  },
  {
    year: "2022 — 2023",
    role: "Remote Fullstack Developer",
    org: "Gateway Computers Training Institute",
    desc: "Built collaborative projects with PHP on the backend and HTML, CSS, JS, and Bootstrap on the frontend.",
  },
  {
    year: "2021",
    role: "Senior Frontend Developer",
    org: "Gateway Computers Training Institute",
    desc: "Managed front-end design cycles from conception to completion.",
  },
  {
    year: "2019",
    role: "Web Development Tutor",
    org: "Gateway Computers Training Institute",
    desc: "Taught students HTML, CSS, and JavaScript from ground up.",
  },
];

const tags = [
  "Fullstack Dev", "UI/UX Thinking", "Freelancer",
  "Anime Fan", "Forex Analyst", "Open Source",
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 90);
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
      id="about"
      ref={sectionRef}
      className="px-6 md:px-12 py-24 md:py-32 border-t border-border grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24"
    >
      {/* Left */}
      <div>
        <div className="reveal flex items-center gap-3 text-accent text-xs font-medium uppercase tracking-widest mb-10">
          <span className="w-6 h-px bg-accent block" />
          About Me
        </div>
        <h2
          className="reveal font-display text-muted leading-none tracking-wide mb-8"
          style={{ fontSize: "clamp(3rem, 6vw, 6rem)" }}
        >
          BUILDER.<br />PROBLEM<br />SOLVER.
        </h2>
        <div className="reveal flex flex-wrap gap-2 mt-6">
          {tags.map((t) => (
            <span
              key={t}
              className="px-3.5 py-1.5 border border-border text-muted text-xs uppercase tracking-widest transition-all duration-200 hover:border-accent hover:text-accent"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Right */}
      <div className="md:pt-16">
        <p className="reveal text-muted leading-loose mb-4" style={{ fontSize: "1.02rem" }}>
          I'm <strong className="text-text font-medium">Ahmadmuneer Abdulqudus</strong>, a fullstack developer with 4 years of experience shipping web applications that are fast, scalable, and actually pleasant to use.
        </p>
        <p className="reveal text-muted leading-loose mb-4" style={{ fontSize: "1.02rem" }}>
          I specialise in <strong className="text-text font-medium">React, Next.js, Node.js, and MongoDB</strong> — the full picture, from pixel-perfect UI to database design.
        </p>
        <p className="reveal text-muted leading-loose mb-10" style={{ fontSize: "1.02rem" }}>
          Outside of code, I'm studying <strong className="text-text font-medium">Applied Geophysics</strong> at Federal University of Technology Minna, watching anime, and analysing the Forex market.
        </p>

        {/* Timeline */}
        <div className="reveal flex items-center gap-3 text-accent text-xs font-medium uppercase tracking-widest mb-6">
          <span className="w-6 h-px bg-accent block" />
          Experience
        </div>
        <div className="reveal relative pl-6 border-l border-border space-y-8">
          {experience.map((e, i) => (
            <div key={i} className="relative">
              <span className="absolute -left-[1.65rem] top-1.5 w-2 h-2 rounded-full bg-accent block" />
              <div className="text-accent text-xs uppercase tracking-widest mb-1">{e.year}</div>
              <div className="text-text font-medium text-sm mb-0.5">{e.role}</div>
              <div className="text-muted text-xs mb-1.5">{e.org}</div>
              <div className="text-muted text-sm leading-relaxed">{e.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
