"use client";

import { useEffect, useRef } from "react";

const contactLinks = [
  { icon: "✉️", label: "itopa1199@gmail.com", href: "mailto:itopa1199@gmail.com" },
  { icon: "💬", label: "WhatsApp", href: "https://wa.me/+2347065036195" },
  { icon: "🐦", label: "@n0mad00", href: "https://twitter.com/n0mad00" },
  { icon: "📸", label: "@ahmad__muneer__", href: "https://www.instagram.com/ahmad__muneer__/" },
];

export default function Contact() {
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
      id="contact"
      ref={sectionRef}
      className="px-6 md:px-12 py-24 md:py-32 border-t border-border grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center"
    >
      {/* Left */}
      <div>
        <div className="reveal flex items-center gap-3 text-accent text-xs font-medium uppercase tracking-widest mb-6">
          <span className="w-6 h-px bg-accent block" />
          Contact
        </div>
        <h2
          className="reveal font-display leading-none tracking-wide mb-4"
          style={{ fontSize: "clamp(3rem, 6vw, 6rem)" }}
        >
          LET'S<br />WORK.
        </h2>
        <p className="reveal text-muted text-base leading-relaxed mb-10">
          Got a project in mind? Looking for a developer who cares about the details?
          Let's build something together.
        </p>

        <div className="reveal space-y-3">
          {contactLinks.map((c) => (
            <a
              key={c.href}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-5 py-4 border border-border text-text text-sm no-underline transition-all duration-200 hover:border-accent hover:text-accent hover:translate-x-1.5 group"
            >
              <span className="text-lg">{c.icon}</span>
              <span className="flex-1">{c.label}</span>
              <span className="text-muted group-hover:text-accent transition-colors">→</span>
            </a>
          ))}
        </div>
      </div>

      {/* Right — big CTA text */}
      <div className="reveal">
        <div
          className="font-display leading-none tracking-wide text-text"
          style={{ fontSize: "clamp(3rem, 7vw, 7rem)" }}
        >
          READY
          <br />
          <span
            className="text-accent"
            style={{ fontFamily: "var(--font-instrument)", fontStyle: "italic" }}
          >
            to build
          </span>
          <br />
          SOMETHING?
        </div>
        <div className="mt-10">
          <a
            href="mailto:itopa1199@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-bg text-xs font-semibold uppercase tracking-widest no-underline transition-all duration-200 hover:bg-[#d4f755] hover:-translate-y-0.5"
          >
            Send a Message →
          </a>
        </div>
      </div>
    </section>
  );
}
