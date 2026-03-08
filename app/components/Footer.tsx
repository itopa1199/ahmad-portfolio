export default function Footer() {
  return (
    <footer className="border-t border-border px-6 md:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <span className="text-muted text-xs tracking-widest uppercase">
        © {new Date().getFullYear()} Ahmad Muneer. Built with Next.js.
      </span>
      <div className="flex gap-6">
        {[
          { label: "Twitter", href: "https://twitter.com/n0mad00" },
          { label: "Instagram", href: "https://www.instagram.com/ahmad__muneer__/" },
          { label: "GitHub", href: "https://github.com/itopa1199" },
          { label: "WhatsApp", href: "https://wa.me/+2347065036195" },
        ].map((s) => (
          <a
            key={s.href}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted text-xs uppercase tracking-widest no-underline transition-colors duration-200 hover:text-accent"
          >
            {s.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
