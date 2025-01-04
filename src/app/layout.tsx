import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./ui/Navbar";
import Footer from "./ui/Footer";
import CTA from "./ui/CTA";
import GeneriConBanner from "./ui/GeneriConBanner";
import { Analytics } from "@vercel/analytics/react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title:
    "Agencia de Diseño y Desarrollo Web | SEO, Marketing y BrandingInartiva | Diseño y Desarrollo Web, SEO y Marketing Digital",
  description:
    "Inartiva es tu agencia creativa para diseño web, SEO, marketing digital y branding. Creamos experiencias únicas para potenciar tu marca.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <GeneriConBanner />
        {children}
        <Analytics></Analytics>
        <CTA />
        <Footer />
      </body>
    </html>
  );
}
