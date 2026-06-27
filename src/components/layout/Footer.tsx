import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { navItems, profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <Container className="py-10">
        <div className="grid gap-8 md:grid-cols-[1.3fr_0.7fr] md:items-start">
          <div>
            <p className="text-lg font-semibold text-white">{profile.name}</p>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
              {profile.tagline}
            </p>
            <div className="mt-5 flex flex-wrap gap-3 text-sm">
              {profile.contact.emails.map((email) => (
                <a
                  key={email.value}
                  href={email.href}
                  className="inline-flex items-center gap-1 text-slate-300 transition hover:text-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
                >
                  {email.value}
                  <ArrowUpRight aria-hidden="true" size={14} />
                </a>
              ))}
            </div>
          </div>
          <nav aria-label="Footer navigation" className="md:justify-self-end">
            <ul className="grid grid-cols-2 gap-2 text-sm sm:flex sm:flex-wrap md:justify-end">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-slate-400 transition hover:bg-white/[0.04] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Jonathan Graydon. Built with Next.js.
          </p>
          <p>No contact form, no trackers, no exposed secrets.</p>
        </div>
      </Container>
    </footer>
  );
}
