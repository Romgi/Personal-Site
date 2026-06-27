import type { SVGProps } from "react";

import { Mail, Phone } from "lucide-react";

type ContactIconProps = SVGProps<SVGSVGElement> & {
  label: string;
};

function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M5.1 8.7h3.4V19H5.1V8.7Zm1.7-5A1.9 1.9 0 1 1 6.8 7.5a1.9 1.9 0 0 1 0-3.8ZM10.4 8.7h3.2v1.4h.1a3.5 3.5 0 0 1 3.1-1.7c3.3 0 3.9 2.2 3.9 5V19h-3.4v-5c0-1.2 0-2.7-1.6-2.7s-1.9 1.3-1.9 2.6V19h-3.4V8.7Z" />
    </svg>
  );
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect
        width="15"
        height="15"
        x="4.5"
        y="4.5"
        rx="4.2"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="2" />
      <circle cx="16.7" cy="7.4" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function ContactIcon({ label, ...props }: ContactIconProps) {
  if (label === "LinkedIn") {
    return <LinkedInIcon {...props} />;
  }

  if (label === "Instagram") {
    return <InstagramIcon {...props} />;
  }

  if (label === "Phone") {
    return <Phone aria-hidden="true" {...props} />;
  }

  return <Mail aria-hidden="true" {...props} />;
}
