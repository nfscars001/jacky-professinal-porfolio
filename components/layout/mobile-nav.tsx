"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { X, Menu } from "lucide-react";

interface NavLink {
  href: string;
  label: string;
}

interface MobileNavProps {
  navLinks: readonly NavLink[];
  artPracticeUrl: string;
  githubUrl: string;
}

/**
 * MobileNav — accessible disclosure mobile menu.
 * §6.2 requirements:
 *  - aria-expanded + aria-controls on trigger
 *  - Escape closes menu
 *  - Focus moves into menu on open, returns to trigger on close
 *  - Body scroll locked while open
 *  - Menu closes on link selection
 *  - Opaque background overlay using createPortal to prevent page bleed-through
 */
export function MobileNav({ navLinks, artPracticeUrl, githubUrl }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const openMenu = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    // Return focus to trigger after state update
    requestAnimationFrame(() => triggerRef.current?.focus());
  }, []);

  // Focus first focusable element in menu when opened
  useEffect(() => {
    if (isOpen) {
      const firstLink = menuRef.current?.querySelector<HTMLElement>("a, button");
      firstLink?.focus();
    }
  }, [isOpen]);

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Escape key handler
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeMenu]);

  const menuContent = isOpen ? (
    <div
      id="mobile-menu"
      ref={menuRef}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100vw",
        height: "100dvh",
        zIndex: 99999,
        backgroundColor: "#f7f4f1",
        background: "var(--color-canvas, #f7f4f1)",
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
      }}
    >
      {/* Top bar inside mobile menu overlay */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "4rem",
          paddingInline: "var(--gutter-tablet, 1.5rem)",
          borderBottom: "1px solid var(--color-line)",
          backgroundColor: "#f7f4f1",
          background: "var(--color-canvas, #f7f4f1)",
        }}
      >
        <Link
          href="/"
          onClick={closeMenu}
          aria-label="Jacky Ho — home"
          style={{
            fontFamily: "var(--font-syne)",
            fontWeight: 800,
            fontSize: "1.125rem",
            color: "var(--color-ink)",
            textDecoration: "none",
            letterSpacing: "-0.02em",
            whiteSpace: "nowrap",
          }}
        >
          Jacky Ho
        </Link>
        <button
          onClick={closeMenu}
          aria-label="Close navigation menu"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "44px",
            height: "44px",
            background: "none",
            border: "1px solid var(--color-line)",
            borderRadius: "var(--radius-sm)",
            color: "var(--color-ink)",
            cursor: "pointer",
          }}
        >
          <X size={20} aria-hidden="true" />
        </button>
      </div>

      {/* Nav links */}
      <nav
        aria-label="Mobile navigation"
        style={{
          padding: "2rem var(--gutter-tablet, 1.5rem)",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={closeMenu}
                style={{
                  display: "block",
                  padding: "1rem 0.5rem",
                  fontFamily: "var(--font-syne)",
                  fontWeight: 700,
                  fontSize: "clamp(1.75rem, 7vw, 2.5rem)",
                  color: "var(--color-ink)",
                  textDecoration: "none",
                  borderBottom: "1px solid var(--color-line)",
                }}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={artPracticeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Art Practice, opens in a new tab"
              onClick={closeMenu}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "1rem 0.5rem",
                fontFamily: "var(--font-syne)",
                fontWeight: 700,
                fontSize: "clamp(1.75rem, 7vw, 2.5rem)",
                color: "var(--color-ink)",
                textDecoration: "none",
                borderBottom: "1px solid var(--color-line)",
              }}
            >
              Art Practice
              <svg
                aria-hidden="true"
                width="20"
                height="20"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 10L10 2M5 2h5v5" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile, opens in a new tab"
              onClick={closeMenu}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "1rem 0.5rem",
                fontFamily: "var(--font-syne)",
                fontWeight: 700,
                fontSize: "clamp(1.75rem, 7vw, 2.5rem)",
                color: "var(--color-ink)",
                textDecoration: "none",
                borderBottom: "1px solid var(--color-line)",
              }}
            >
              GitHub
              <svg
                aria-hidden="true"
                width="20"
                height="20"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 10L10 2M5 2h5v5" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  ) : null;

  return (
    <>
      {/* Hamburger trigger — hidden on desktop via CSS in site-header.tsx */}
      <button
        ref={triggerRef}
        className="mobile-nav-trigger"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        onClick={isOpen ? closeMenu : openMenu}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "44px",
          height: "44px",
          background: "none",
          border: "1px solid var(--color-line)",
          borderRadius: "var(--radius-sm)",
          color: "var(--color-ink)",
          cursor: "pointer",
        }}
      >
        {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
      </button>

      {/* Render overlay portal when open */}
      {mounted && menuContent ? createPortal(menuContent, document.body) : null}
    </>
  );
}

