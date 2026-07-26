"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const filters = [
  { label: "All Work", value: "all" },
  { label: "Digital Products", value: "digital-products" },
  { label: "AI & Automation", value: "ai-automation" },
  { label: "Physical Innovation", value: "physical-innovation" },
  { label: "Brand Experience", value: "brand-experience" },
];

function FilterButtons() {
  const searchParams = useSearchParams();
  const currentFilter = searchParams.get("filter") || "all";

  return (
    <div
      style={{
        display: "flex",
        gap: "0.5rem",
        overflowX: "auto",
        paddingBottom: "0.5rem",
        // Visual affordance for horizontal scrolling on mobile
        maskImage: "linear-gradient(to right, black 90%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to right, black 90%, transparent 100%)",
      }}
      className="scrollbar-hide"
      role="group"
      aria-label="Project filters"
    >
      {filters.map((filter) => {
        const isActive = currentFilter === filter.value;
        return (
          <Link
            key={filter.value}
            href={filter.value === "all" ? "/work" : `/work?filter=${filter.value}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              whiteSpace: "nowrap",
              padding: "0.5rem 1rem",
              borderRadius: "999px",
              fontSize: "var(--step-small)",
              fontWeight: isActive ? 600 : 500,
              backgroundColor: isActive ? "var(--color-ink)" : "transparent",
              color: isActive ? "var(--color-canvas)" : "var(--color-muted)",
              border: isActive ? "1px solid var(--color-ink)" : "1px solid var(--color-line)",
              textDecoration: "none",
              transition: "all var(--transition-base)",
            }}
            aria-pressed={isActive}
            scroll={false} // Prevent jumping to top on filter change
          >
            {filter.label}
          </Link>
        );
      })}

      <style>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        .scrollbar-hide {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        @media (hover: hover) and (pointer: fine) {
          a[aria-pressed="false"]:hover {
            border-color: var(--color-ink) !important;
            color: var(--color-ink) !important;
          }
        }
      `}</style>
    </div>
  );
}

/**
 * Client component for filtering projects.
 * Suspense is required when using useSearchParams in Next.js App Router
 * to ensure the page doesn't de-opt to completely client-side rendering.
 */
export function ProjectFilters() {
  return (
    <Suspense fallback={<div style={{ height: "40px" }} aria-hidden="true" />}>
      <FilterButtons />
    </Suspense>
  );
}
