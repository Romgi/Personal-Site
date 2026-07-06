"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { navItems, profile } from "@/data/profile";
import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMusicPage = isActive(pathname, "/music");

  useGSAP(() => {
    const trigger = ScrollTrigger.create({
      start: 24,
      end: "max",
      onToggle: (self) => setIsScrolled(self.isActive),
    });

    return () => trigger.kill();
  });

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-blue-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to main content
      </a>
      <div
        className={cn(
          "liquid-glass-nav mx-auto rounded-lg border px-4 transition-[max-width] duration-500 ease-out",
          isMusicPage && "liquid-glass-nav--music",
          isScrolled ? "liquid-glass-nav--scrolled max-w-5xl" : "max-w-7xl",
        )}
      >
        <div
          className={cn(
            "flex items-center justify-between transition-[height] duration-500 ease-out",
            isScrolled ? "h-14" : "h-16",
          )}
        >
          <Link
            href="/"
            data-magnetic
            className={cn(
              "group flex items-center gap-3 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4",
              isMusicPage
                ? "focus-visible:outline-amber-700"
                : "focus-visible:outline-blue-300",
            )}
            aria-label="Jonathan Graydon home"
          >
            <span
              className={cn(
                "flex size-9 items-center justify-center overflow-hidden rounded-md border shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] transition",
                isMusicPage
                  ? "border-amber-900/20 bg-white/50 group-hover:border-amber-700/40 group-hover:bg-amber-100/60"
                  : "border-blue-200/25 bg-white/[0.08] group-hover:border-blue-300/50 group-hover:bg-blue-500/15",
              )}
            >
              <Image
                src="/images/JGLogo.png"
                alt=""
                width={36}
                height={36}
                className="size-full object-contain"
                preload
              />
            </span>
            <span
              className={cn(
                "hidden text-sm font-semibold tracking-tight sm:block",
                isMusicPage ? "text-[#302316]" : "text-white",
              )}
            >
              {profile.name}
            </span>
          </Link>

          <nav aria-label="Primary navigation" className="hidden md:block">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => {
                const active = isActive(pathname, item.href);

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "relative rounded-md px-3 py-2 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4",
                        isMusicPage
                          ? "focus-visible:outline-amber-700"
                          : "focus-visible:outline-blue-300",
                        active
                          ? isMusicPage
                            ? "text-[#302316]"
                            : "text-white"
                          : isMusicPage
                            ? "text-[#705c48] hover:bg-amber-900/[0.06] hover:text-[#302316]"
                            : "text-slate-400 hover:bg-white/[0.05] hover:text-white",
                      )}
                      aria-current={active ? "page" : undefined}
                    >
                      {item.label}
                      {active ? (
                        <span
                          className={cn(
                            "absolute inset-x-3 -bottom-px h-px",
                            isMusicPage
                              ? "bg-amber-700/70"
                              : "bg-gradient-to-r from-transparent via-blue-400 to-transparent",
                          )}
                        />
                      ) : null}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <button
            type="button"
            className={cn(
              "inline-flex size-10 items-center justify-center rounded-md border transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 md:hidden",
              isMusicPage
                ? "border-amber-900/20 bg-white/50 text-[#302316] hover:border-amber-700/40 hover:bg-amber-100/60 focus-visible:outline-amber-700"
                : "border-white/15 bg-white/[0.04] text-slate-200 hover:border-blue-300/40 hover:bg-blue-500/10 focus-visible:outline-blue-300",
            )}
            aria-label={
              isOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? (
              <X aria-hidden="true" size={20} />
            ) : (
              <Menu aria-hidden="true" size={20} />
            )}
          </button>
        </div>

        <div
          id="mobile-navigation"
          className={cn(
            "grid transition-[grid-template-rows] duration-200 md:hidden",
            isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
          )}
        >
          <nav
            aria-label="Mobile navigation"
            className="overflow-hidden"
            hidden={!isOpen}
          >
            <ul
              className={cn(
                "border-t py-3",
                isMusicPage ? "border-amber-900/15" : "border-white/10",
              )}
            >
              {navItems.map((item) => {
                const active = isActive(pathname, item.href);

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "block rounded-md px-3 py-3 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4",
                        isMusicPage
                          ? "focus-visible:outline-amber-700"
                          : "focus-visible:outline-blue-300",
                        active
                          ? isMusicPage
                            ? "bg-amber-900/[0.08] text-[#302316]"
                            : "bg-blue-600/20 text-white"
                          : isMusicPage
                            ? "text-[#705c48] hover:bg-amber-900/[0.06] hover:text-[#302316]"
                            : "text-slate-400 hover:bg-white/[0.05] hover:text-white",
                      )}
                      aria-current={active ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
