import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Manrope } from "next/font/google";

import { Navbar } from "@/components/layout/Navbar";
import { JsonLd } from "@/components/seo/JsonLd";

import "./globals.css";
import { Footer } from "@/components/layout/Footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const siteUrl = "https://www.adobzone.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Adobzone | Branding, Design & Printing Solutions",
    template: "%s | Adobzone",
  },

  description:
    "Adobzone provides branding, graphic design, printing, signage, ID cards, brochures, packaging, promotional products, and custom print solutions for businesses and institutions.",

  keywords: [
    "Adobzone",
    "Adobzone Kerala",
    "Adobzone branding",
    "branding services",
    "graphic design",
    "printing services",
    "digital printing",
    "signage",
    "ID card printing",
    "brochure printing",
    "packaging design",
    "business branding",
    "promotional products",
    "custom printing",
  ],

  applicationName: "Adobzone",

  authors: [
    {
      name: "Adobzone",
      url: siteUrl,
    },
  ],

  creator: "Adobzone",
  publisher: "Adobzone",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: [
      {
        url: "/logo-icon.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/logo-icon.svg",
    apple: "/logo-icon.svg",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Adobzone",

    title: "Adobzone | Branding, Design & Printing Solutions",

    description:
      "Creative branding, design, printing, signage, packaging, and custom print solutions for businesses and institutions.",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Adobzone - Branding, Design & Printing Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Adobzone | Branding, Design & Printing Solutions",

    description:
      "Creative branding, design, printing, signage, packaging, and custom print solutions by Adobzone.",

    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
      <body>
        <JsonLd />

        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
