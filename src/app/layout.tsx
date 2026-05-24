import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "PEN — Psyche Empowerment Network",
  description:
    "Psyche Empowerment Network (PEN) — Empowering minds, breaking stigma, and advocating for accessible mental health across Africa.",
  keywords: [
    "mental health",
    "psychology",
    "advocacy",
    "empowerment",
    "Africa",
    "therapy",
    "wellness",
    "PEN",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
