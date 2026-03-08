"use client";

import { useEffect, useRef } from "react";
import { SiReact, SiNodedotjs, SiMongodb, SiTypescript, SiSocketdotio, SiFirebase, SiTailwindcss, SiGithub, SiPostgresql, SiVercel } from "react-icons/si";
import { TbApi, TbLock } from "react-icons/tb";

const skills = [
  { icon: SiReact,       name: "React / Next.js",   type: "Frontend" },
  { icon: SiNodedotjs,   name: "Node.js / Express",  type: "Backend" },
  { icon: SiMongodb,     name: "MongoDB",             type: "Database" },
  { icon: SiTypescript,  name: "TypeScript",          type: "Language" },
  { icon: SiSocketdotio, name: "Socket.io",           type: "Realtime" },
  { icon: SiFirebase,    name: "Firebase",            type: "Auth & DB" },
  { icon: SiTailwindcss, name: "Tailwind CSS",        type: "Styling" },
  { icon: SiGithub,      name: "Git & GitHub",        type: "Version Control" },
  { icon: TbApi,         name: "REST APIs",           type: "Integration" },
  { icon: SiPostgresql,  name: "PostgreSQL",          type: "Database" },
  { icon: TbLock,        name: "JWT Auth",            type: "Security" },
  { icon: SiVercel,      name: "Vercel / Netlify",    type: "Deployment" },
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
            <s.icon className="text-2xl mb-3 text-muted group-hover:text-accent transition-colors duration-200" />
            <div className="text-text font-medium text-sm mb-1">{s.name}</div>
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
          <SiGithub className="text-sm" />
          View GitHub ↗
        </a>
      </div>
    </section>
  );
}