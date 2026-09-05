import type { Metadata } from "next";
import type { Viewport } from "next";
import {
  Geist,
  Geist_Mono,
  Big_Shoulders,
  Barlow_Condensed,
  Bebas_Neue,
} from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { RouteScrollReset } from "@/components/layout/RouteScrollReset";
import { GsapScrollEffects } from "@/components/ui/GsapScrollEffects";
import { LiquidGlassFilters } from "@/components/ui/LiquidGlassFilters";
import { PointerEffects } from "@/components/ui/PointerEffects";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { profile, site } from "@/data/profile";

import "./globals.css";

const heroDisplay = Bebas_Neue({
  variable: "--font-hero",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const display = Big_Shoulders({
  variable: "--font-display",
  adjustFontFallback: false,
  subsets: ["latin"],
  display: "swap",
});
const condensed = Barlow_Condensed({
  variable: "--font-condensed",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${profile.name} | Computer Science, Robotics, Trumpet`,
    template: `%s | ${profile.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: profile.name }],
  creator: profile.name,
  publisher: profile.name,
  category: "technology",
  keywords: [
    "Jonathan Graydon",
    "Computer Science",
    "McMaster University",
    "Robotics",
    "FRC",
    "Trumpet",
    "Portfolio",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${profile.name} | Computer Science, Robotics, Trumpet`,
    description: site.description,
    url: "/",
    siteName: site.name,
    images: [
      {
        url: profile.profileImage.src,
        width: 848,
        height: 1171,
        alt: profile.profileImage.alt,
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | Computer Science, Robotics, Trumpet`,
    description: site.description,
    images: [profile.profileImage.src],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#05070b",
  colorScheme: "dark",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: site.url,
  image: new URL(profile.profileImage.src, site.url).toString(),
  jobTitle: "Computer Science Student and Software Engineer",
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: "McMaster University",
  },
  sameAs: profile.contact.socials.map((social) => social.href),
  knowsAbout: [...profile.interests],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${display.variable} ${condensed.variable} ${heroDisplay.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script type="application/ld+json">
          {JSON.stringify(personJsonLd).replace(/</g, "\\u003c")}
        </script>
        <LiquidGlassFilters />
        <ScrollProgress />
        <PointerEffects />
        <Navbar />
        <RouteScrollReset />
        <main id="main-content" className="flex-1">
          <GsapScrollEffects>{children}</GsapScrollEffects>
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
