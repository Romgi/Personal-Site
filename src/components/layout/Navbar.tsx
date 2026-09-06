"use client";

import { Menu, X, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navItems } from "@/data/profile";
import { observeNavRefraction } from "@/lib/nav-refraction";
import { setNavigationGlass, useNavigationGlass } from "@/lib/navigation-glass";

export function Navbar() {
  const pathname = usePathname();
  const glassEnabled = useNavigationGlass();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const isOpen = openPath === pathname;
  const toggle = useRef<HTMLButtonElement>(null);
  const bar = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (glassEnabled) return observeNavRefraction(bar.current);
  }, [glassEnabled]);
  useEffect(() => {
    if (!isOpen) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenPath(null);
        toggle.current?.focus();
      }
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [isOpen]);
  return (
    <header className="site-header">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <div
        ref={bar}
        className={`site-nav ${glassEnabled ? "liquid-glass-nav" : "site-nav--solid"}`}
      >
        <Link
          href="/"
          className="brand"
          aria-label="Jonathan Graydon home"
          onClick={() => setOpenPath(null)}
        >
          <Image
            src="/images/JGLogo.png"
            width={54}
            height={44}
            alt=""
            preload
          />
        </Link>
        <nav className="desktop-navigation" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="nav-actions">
          <button
            type="button"
            role="switch"
            aria-checked={glassEnabled}
            aria-label="Liquid glass navigation"
            className="nav-glass-toggle"
            onClick={() => setNavigationGlass(!glassEnabled)}
          >
            <span>Glass</span>
            <span className="nav-glass-track" aria-hidden="true">
              <span className="nav-glass-thumb" />
            </span>
          </button>
          <button
            ref={toggle}
            type="button"
            className="nav-toggle"
            aria-label={
              isOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setOpenPath(isOpen ? null : pathname)}
          >
            {isOpen ? (
              <X aria-hidden size={22} />
            ) : (
              <Menu aria-hidden size={22} />
            )}
          </button>
        </div>
      </div>
      <nav
        id="mobile-navigation"
        className="mobile-navigation"
        aria-label="Mobile navigation"
        hidden={!isOpen}
      >
        {navItems.map((item) => (
          <Link
            href={item.href}
            key={item.href}
            aria-current={pathname === item.href ? "page" : undefined}
            onClick={() => setOpenPath(null)}
          >
            {item.label}
            <ArrowUpRight size={24} aria-hidden />
          </Link>
        ))}
      </nav>
    </header>
  );
}
