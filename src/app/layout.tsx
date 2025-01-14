import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./ui/Navbar";
import Footer from "./ui/Footer";
import CTA from "./ui/CTA";
import GeneriConBanner from "./ui/GeneriConBanner";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";

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
  title: "Inartiva Studio | Diseño Web, SEO, Marketing Digital y Branding",
  description:
    "Inartiva Studio: Agencia creativa especializada en diseño web, SEO, marketing digital y branding. Creamos experiencias únicas y estrategias efectivas para potenciar tu marca.",
  keywords: [
    "diseño web",
    "SEO",
    "marketing digital",
    "branding",
    "agencia creativa",
    "estrategias digitales",
    "sitios web personalizados",
  ],
  openGraph: {
    url: "https://inartivastudio.com",
    type: "website",
    title: "Inartiva Studio | Diseño Web, SEO, Marketing Digital y Branding",
    description:
      "Inartiva Studio: Agencia creativa especializada en diseño web, SEO, marketing digital y branding. Creamos experiencias únicas y estrategias efectivas para potenciar tu marca.",
    images: [
      {
        url: "https://inartivastudio.com/images/home/thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "Inartiva Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Inartiva Studio | Diseño Web, SEO, Marketing Digital y Branding",
    description:
      "Inartiva Studio: Agencia creativa especializada en diseño web, SEO, marketing digital y branding. Creamos experiencias únicas y estrategias efectivas para potenciar tu marca.",
    creator: "@InartivaStudio",
    site: "@inartiva",
    images: [
      {
        url: "https://inartivastudio.com/images/home/thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "Inartiva Studio",
      },
    ],
  },
  alternates: {
    canonical: "https://inartiva.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
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
      <GoogleAnalytics gaId="G-TYHPYHHRH7" />
    </html>
  );
}
