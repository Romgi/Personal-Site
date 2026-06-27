import type { Metadata } from "next";

import { profile, site } from "@/data/profile";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadataOptions): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: `${title} | ${profile.name}`,
      description,
      url: path,
      siteName: site.name,
      locale: "en_CA",
      type: "website",
      images: [
        {
          url: "/images/profile-placeholder.jpg",
          width: 1200,
          height: 1200,
          alt: `${profile.name} portfolio visual`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${profile.name}`,
      description,
      images: ["/images/profile-placeholder.jpg"],
    },
  };
}
