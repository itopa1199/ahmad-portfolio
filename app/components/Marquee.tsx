const TECHS = [
  "React.js", "Next.js", "Node.js", "Express", "MongoDB",
  "Socket.io", "TypeScript", "Tailwind CSS", "Firebase",
  "PostgreSQL", "REST APIs", "Git & GitHub",
];

export default function Marquee() {
  const doubled = [...TECHS, ...TECHS];

  return (
    <div className="border-t border-b border-border bg-surface py-3.5 overflow-hidden">
      <div className="marquee-track flex gap-12 whitespace-nowrap w-max">
        {doubled.map((t, i) => (
          <span
            key={i}
            className="flex items-center gap-3 font-display text-lg tracking-widest text-muted flex-shrink-0"
          >
            <span className="w-1 h-1 rounded-full bg-accent block" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
