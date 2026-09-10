import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Manrope } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://adobzone.vercel.app"),
  title: {
    default: "Adobzone | Complete Branding & Printing Solutions",
    template: "%s | Adobzone",
  },
  description:
    "Adobzone delivers branding, printing, signage, ID cards, brochures, mugs, and custom print solutions for businesses and institutions.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Adobzone | Complete Branding & Printing Solutions",
    description:
      "Branding, design, and print services for schools, retail stores, restaurants, and growing businesses.",
    url: "/",
    siteName: "Adobzone",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://placehold.co/1200x630/003E4C/F9851C?text=Adobzone",
        width: 1200,
        height: 630,
        alt: "Adobzone branding and print studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adobzone",
    description:
      "Complete branding and printing solutions for local businesses and institutions.",
    images: ["https://placehold.co/1200x630/003E4C/F9851C?text=Adobzone"],
  },
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
