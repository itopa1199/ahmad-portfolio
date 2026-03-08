"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-5 backdrop-blur-md bg-bg/70 transition-all duration-300 ${
        scrolled ? "border-b border-border" : "border-b border-transparent"
      }`}
    >
      <a href="#hero" className="font-display text-2xl tracking-widest text-text no-underline">
        AHMAD<span className="text-accent">.</span>
      </a>

      <ul className="hidden md:flex gap-10 list-none">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="text-xs font-medium uppercase tracking-widest text-muted hover:text-text transition-colors duration-200 no-underline relative group"
            >
              {l.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          </li>
        ))}
      </ul>

      <a
        href="https://docs.google.com/document/d/1R65ZbtLjS9W-hZLdS-HfEIjDdqa-fbL3cs4hqPlo6Uo/edit?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 border border-border text-text text-xs uppercase tracking-widest font-medium no-underline transition-all duration-200 hover:border-accent hover:text-accent"
      >
        Resume ↗
      </a>
    </nav>
  );
}
