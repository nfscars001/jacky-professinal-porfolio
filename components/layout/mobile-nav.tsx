"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { X, Menu } from "lucide-react";

interface NavLink {
  href: string;
  label: string;
}

interface MobileNavProps {
  navLinks: readonly NavLink[];
  artPracticeUrl: string;
}

/**
 * MobileNav — accessible disclosure mobile menu.
 * §6.2 requirements:
 *  - aria-expanded + aria-controls on trigger
 *  - Escape closes menu
 *  - Focus moves into menu on open, returns to trigger on close
 *  - Body scroll locked while open
 *  - Menu closes on link selection
 */
export function MobileNav({ navLinks, artPracticeUrl }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

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

      {/* Menu panel */}
      {isOpen && (
        <div
          id="mobile-menu"
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 200,
            backgroundColor: "var(--color-canvas)",
            display: "flex",
            flexDirection: "column",
            padding: "1.5rem",
          }}
        >
          {/* Close button at top */}
          <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "2rem" }}>
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
          <nav aria-label="Mobile navigation">
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "0.25rem",
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
                      fontSize: "clamp(1.5rem, 6vw, 2.25rem)",
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
                    fontSize: "clamp(1.5rem, 6vw, 2.25rem)",
                    color: "var(--color-ink)",
                    textDecoration: "none",
                    borderBottom: "1px solid var(--color-line)",
                  }}
                >
                  Art Practice
                  <svg
                    aria-hidden="true"
                    width="18"
                    height="18"
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

          {/* Résumé CTA at bottom */}
          <div style={{ marginTop: "auto", paddingTop: "2rem" }}>
            <a
              href="/documents/jacky-ho-resume.pdf"
              download="Jacky-Ho-Resume.pdf"
              onClick={closeMenu}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.875rem 1.5rem",
                backgroundColor: "var(--color-ink)",
                color: "var(--color-canvas)",
                fontWeight: 600,
                fontSize: "var(--step-small)",
                textDecoration: "none",
                borderRadius: "var(--radius-sm)",
              }}
            >
              Download Résumé ↓
            </a>
          </div>
        </div>
      )}
    </>
  );
}
