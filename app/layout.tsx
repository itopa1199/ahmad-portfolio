import type { Metadata } from "next";
import { Bebas_Neue, Instrument_Serif, DM_Sans } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const instrument = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const dm = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ahmad Muneer — Fullstack Developer",
  description: "Ahmad Muneer is a fullstack developer specialising in React, Next.js, Node.js and MongoDB. 4+ years building modern web applications.",
  keywords: ["Ahmad Muneer", "fullstack developer", "React", "Next.js", "Nigeria"],
  openGraph: {
    title: "Ahmad Muneer — Fullstack Developer",
    description: "Building modern web experiences with React, Next.js, and everything in between.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bebas.variable} ${instrument.variable} ${dm.variable}`}>
      <body>{children}</body>
    </html>
  );
}