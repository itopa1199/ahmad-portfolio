"use client";

import { useEffect, useRef, useState } from "react";
import { MdEmail, MdArrowForward } from "react-icons/md";
import { SiWhatsapp, SiX, SiInstagram } from "react-icons/si";
import type { IconType } from "react-icons";

const contactLinks: { icon: IconType; label: string; href: string }[] = [
  { icon: MdEmail,    label: "itopa1199@gmail.com",  href: "mailto:itopa1199@gmail.com" },
  { icon: SiWhatsapp, label: "WhatsApp",              href: "https://wa.me/+23490560038639" },
  { icon: SiX,        label: "@n0mad00",           href: "https://twitter.com/n0mad00" },
  { icon: SiInstagram,label: "@ahmad__muneer__",      href: "https://www.instagram.com/ahmad__muneer__/" },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

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

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="px-6 md:px-12 py-24 md:py-32 border-t border-border grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start"
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
          Got a project in mind? Fill in the form and I'll get back to you directly.
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
              <c.icon className="text-xl text-muted group-hover:text-accent transition-colors duration-200 flex-shrink-0" />
              <span className="flex-1">{c.label}</span>
              <MdArrowForward className="text-muted group-hover:text-accent transition-colors duration-200" />
            </a>
          ))}
        </div>
      </div>

      {/* Right — contact form */}
      <div className="reveal md:pt-16 space-y-4">
        <input
          type="text"
          placeholder="Your name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full bg-surface border border-border px-5 py-4 text-text text-sm placeholder:text-muted focus:outline-none focus:border-accent transition-colors duration-200"
        />
        <input
          type="email"
          placeholder="Your email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full bg-surface border border-border px-5 py-4 text-text text-sm placeholder:text-muted focus:outline-none focus:border-accent transition-colors duration-200"
        />
        <textarea
          placeholder="Your message"
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full bg-surface border border-border px-5 py-4 text-text text-sm placeholder:text-muted focus:outline-none focus:border-accent transition-colors duration-200 resize-none"
        />

        <button
          onClick={handleSubmit}
          disabled={status === "loading"}
          className="w-full py-4 bg-accent text-bg text-xs font-semibold uppercase tracking-widest transition-all duration-200 hover:bg-[#d4f755] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "Sending..." : "Send Message →"}
        </button>

        {status === "success" && (
          <p className="text-accent text-sm text-center">
            ✓ Message sent! I'll get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p className="text-red-400 text-sm text-center">
            Something went wrong. Try emailing me directly.
          </p>
        )}
      </div>
    </section>
  );
}