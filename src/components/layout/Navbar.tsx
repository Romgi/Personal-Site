"use client";

import { ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navItems, profile } from "@/data/profile";

export function Navbar() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const isOpen = openPath === pathname;
  const toggle = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!isOpen) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenPath(null);
        toggle.current?.focus();
      }
    };
    const closeOutside = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !header.current?.contains(event.target)
      ) {
        setOpenPath(null);
      }
    };
    const desktop = window.matchMedia("(min-width: 900px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setOpenPath(null);
    };
    document.addEventListener("keydown", close);
    document.addEventListener("pointerdown", closeOutside);
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.removeEventListener("keydown", close);
      document.removeEventListener("pointerdown", closeOutside);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [isOpen]);
  return (
    <header
      ref={header}
      className="site-header"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setOpenPath(null);
        }
      }}
    >
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <div className="site-nav">
        <Link
          href="/"
          className="brand"
          aria-label="Jonathan Graydon home"
          onClick={() => setOpenPath(null)}
        >
          <Image
            src="/images/JGLogo.png"
            width={44}
            height={44}
            alt=""
            preload
          />
          <span className="brand-name">{profile.name}</span>
        </Link>
        <nav className="desktop-navigation" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              onClick={() => setOpenPath(null)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="nav-actions">
          <Link
            href="/resume#contact"
            className="nav-contact"
            onClick={() => setOpenPath(null)}
          >
            Contact <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
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
            <span>{isOpen ? "Close" : "Menu"}</span>
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
        <div className="mobile-navigation-links">
          {navItems.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              onClick={() => setOpenPath(null)}
            >
              {item.label}
              <ArrowRight size={22} aria-hidden="true" />
            </Link>
          ))}
        </div>
        <Link
          href="/resume#contact"
          className="mobile-contact"
          onClick={() => setOpenPath(null)}
        >
          Get in touch <ArrowUpRight size={20} aria-hidden="true" />
        </Link>
      </nav>
    </header>
  );
}
