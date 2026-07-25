"use client";

import { useState, useEffect, useCallback } from "react";
import { ArrowUp } from "lucide-react";

/**
 * ScrollToTop — isolated client component (§11 server/client boundary).
 * Appears after scrolling 400px. Does not steal focus. Fade in/out only.
 * §14 approved motion: fade in/out.
 */
export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  const checkScroll = useCallback(() => {
    setVisible(window.scrollY > 400);
  }, []);

  useEffect(() => {
    // Passive scroll listener for performance (§18)
    window.addEventListener("scroll", checkScroll, { passive: true });
    return () => window.removeEventListener("scroll", checkScroll);
  }, [checkScroll]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Do NOT move focus — spec §16 "Scroll-to-top does not steal focus"
  }, []);

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top of page"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      style={{
        position: "fixed",
        bottom: "1.5rem",
        right: "1.5rem",
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "44px",
        height: "44px",
        backgroundColor: "var(--color-ink)",
        color: "var(--color-canvas)",
        border: "none",
        borderRadius: "50%",
        cursor: "pointer",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 220ms ease, background-color var(--transition-base)",
      }}
      onMouseOver={(e) => {
        (e.currentTarget as HTMLButtonElement).style.backgroundColor =
          "var(--color-accent)";
      }}
      onMouseOut={(e) => {
        (e.currentTarget as HTMLButtonElement).style.backgroundColor =
          "var(--color-ink)";
      }}
    >
      <ArrowUp size={18} aria-hidden="true" />
    </button>
  );
}
