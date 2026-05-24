import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans_Thai, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const plexThai = IBM_Plex_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-plex-thai",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GLO TrustFlow AI · Solution Reference Document",
  description:
    "ระบบจัดการเคสอัจฉริยะของสำนักงานสลากกินแบ่งรัฐบาล — Intelligent Case-Management Platform. Solution Architecture, Context Diagram, Sequence Flows, Trust Stack, Innovation, Impact และ Compliance ฉบับทางการสำหรับ GLO Innovation Challenge 2026",
  keywords: [
    "GLO",
    "สำนักงานสลากกินแบ่งรัฐบาล",
    "TrustFlow AI",
    "Case Management",
    "AI Platform",
    "WLA-RGF",
    "Process Automation",
    "GLO Innovation Challenge 2026",
  ],
  authors: [{ name: "GLO TrustFlow AI Team" }],
  openGraph: {
    title: "GLO TrustFlow AI · Solution Reference",
    description:
      "แพลตฟอร์มจัดการเคสอัจฉริยะ — 5-Layer Architecture พร้อม Trust Stack สำหรับ GLO Innovation Challenge 2026",
    type: "website",
    locale: "th_TH",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B2545",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" className={`${plexThai.variable} ${plexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
