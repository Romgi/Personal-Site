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

function GitHubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 0 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 2.9.9.1-.7.4-1.1.7-1.3-2.2-.3-4.6-1.1-4.6-5A3.9 3.9 0 0 1 6.8 9c-.1-.3-.5-1.3.1-2.7 0 0 .9-.3 2.8 1.1a9.4 9.4 0 0 1 5.1 0c1.9-1.4 2.8-1.1 2.8-1.1.6 1.4.2 2.4.1 2.7a3.9 3.9 0 0 1 1.1 2.8c0 3.8-2.3 4.7-4.6 4.9.4.3.7 1 .7 2.1V21c0 .3.2.6.7.5A10 10 0 0 0 12 2Z" />
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

  if (label === "GitHub") {
    return <GitHubIcon {...props} />;
  }

  if (label === "Phone") {
    return <Phone aria-hidden="true" {...props} />;
  }

  return <Mail aria-hidden="true" {...props} />;
}
