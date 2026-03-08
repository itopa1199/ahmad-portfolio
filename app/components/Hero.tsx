"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen grid px-6 md:px-12 relative overflow-hidden"
      style={{ gridTemplateRows: "1fr auto" }}
    >
      {/* Big BG text */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 font-display leading-none pointer-events-none select-none whitespace-nowrap"
        style={{
          fontSize: "clamp(9rem, 22vw, 22rem)",
          color: "transparent",
          WebkitTextStroke: "1px rgba(255,255,255,0.035)",
        }}
      >
        AHMAD
      </div>

      {/* Main content */}
      <div className="flex flex-col justify-end pb-12 pt-32 relative z-10 max-w-4xl">
        {/* Eyebrow */}
        <div
          className="flex items-center gap-3 text-accent text-xs font-medium uppercase tracking-widest mb-6"
          style={{ animation: "fadeUp 0.8s 0.2s both" }}
        >
          <span className="w-8 h-px bg-accent block" />
          Fullstack Developer — Lagos, NG
        </div>

        {/* Title */}
        <h1
          className="font-display leading-none tracking-wide text-text"
          style={{
            fontSize: "clamp(4.5rem, 11vw, 11rem)",
            animation: "fadeUp 0.9s 0.35s both",
          }}
        >
          I BUILD
          <br />
          <span
            className="text-accent"
            style={{ fontFamily: "var(--font-instrument)", fontStyle: "italic", fontSize: "0.85em" }}
          >
            things
          </span>
          <br />
          FOR THE WEB
        </h1>

        {/* Sub */}
        <p
          className="mt-6 max-w-lg text-base text-muted leading-relaxed"
          style={{ animation: "fadeUp 0.9s 0.5s both" }}
        >
          Crafting modern web experiences with React, Next.js, Node.js, and everything
          in between. 4+ years turning ideas into fast, scalable products.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap gap-3 mt-8"
          style={{ animation: "fadeUp 0.9s 0.65s both" }}
        >
          <a
            href="https://github.com/itopa1199"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 bg-accent text-bg text-xs font-semibold uppercase tracking-widest no-underline transition-all duration-200 hover:bg-[#d4f755] hover:-translate-y-0.5"
          >
            <GithubIcon /> GitHub ↗
          </a>
          <a
            href="https://docs.google.com/document/d/1R65ZbtLjS9W-hZLdS-HfEIjDdqa-fbL3cs4hqPlo6Uo/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 border border-border text-text text-xs font-medium uppercase tracking-widest no-underline transition-all duration-200 hover:border-accent hover:text-accent hover:-translate-y-0.5"
          >
            View Resume ↗
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3 border border-border text-muted text-xs font-medium uppercase tracking-widest no-underline transition-all duration-200 hover:border-accent hover:text-accent hover:-translate-y-0.5"
          >
            Let's Talk →
          </a>
        </div>
      </div>

      {/* Footer strip */}
      <div
        className="flex items-center justify-between py-5 border-t border-border relative z-10"
        style={{ animation: "fadeUp 0.9s 0.8s both" }}
      >
        <div className="flex gap-10 md:gap-14">
          {[
            { num: "4+", label: "Years Exp." },
            { num: "6+", label: "Projects" },
            { num: "FS", label: "Fullstack" },
          ].map((s) => (
            <div key={s.label}>
              <span className="block font-display text-3xl tracking-wide text-text">{s.num}</span>
              <span className="text-xs uppercase tracking-widest text-muted">{s.label}</span>
            </div>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest text-muted">
          <div className="w-px h-8 bg-gradient-to-b from-transparent to-muted" />
          Scroll
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
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
