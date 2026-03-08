import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ahmad Muneer — Fullstack Developer",
  description:
    "Ahmad Muneer is a fullstack developer specialising in React, Next.js, Node.js and MongoDB. 4+ years building modern web applications.",
  keywords: ["Ahmad Muneer", "fullstack developer", "React", "Next.js", "Nigeria"],
  openGraph: {
    title: "Ahmad Muneer — Fullstack Developer",
    description: "Building modern web experiences with React, Next.js, and everything in between.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
