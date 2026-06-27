import type { Metadata } from "next";
import type { Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { RouteScrollReset } from "@/components/layout/RouteScrollReset";
import { GsapScrollEffects } from "@/components/ui/GsapScrollEffects";
import { profile, site } from "@/data/profile";

import "./globals.css";

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
        url: "/images/profile-placeholder.jpg",
        width: 1200,
        height: 1200,
        alt: `${profile.name} portfolio visual`,
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | Computer Science, Robotics, Trumpet`,
    description: site.description,
    images: ["/images/profile-placeholder.jpg"],
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
  themeColor: "#020617",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Navbar />
        <RouteScrollReset />
        <main id="main-content" className="flex-1">
          <GsapScrollEffects>{children}</GsapScrollEffects>
        </main>
        <Footer />
      </body>
    </html>
  );
}
