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
          url: profile.profileImage.src,
          width: 848,
          height: 1171,
          alt: profile.profileImage.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${profile.name}`,
      description,
      images: [profile.profileImage.src],
    },
  };
}
