"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "Problem" },
  { id: "architecture", label: "Architecture" },
  { id: "flows", label: "Flows" },
  { id: "trust", label: "Trust" },
  { id: "innovation", label: "Innovation" },
  { id: "impact", label: "Impact" },
  { id: "plan", label: "Plan" },
];

export function Navigation() {
  const [activeId, setActiveId] = useState<string>("overview");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Choose the entry closest to the top of the viewport
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          const id = visible[0].target.id;
          if (id) setActiveId(id);
        }
      },
      {
        rootMargin: "-80px 0px -60% 0px",
        threshold: [0, 0.1, 0.5],
      }
    );

    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Top ribbon */}
      <div aria-hidden="true" className="no-print">
        <div className="h-[6px] bg-navy-700" />
        <div className="h-[3px] bg-gold-500" />
      </div>

      <nav
        className={`sticky top-0 z-50 border-b transition-all duration-200 no-print ${
          scrolled
            ? "border-ink-200 bg-cream/92 backdrop-blur-md"
            : "border-transparent bg-cream"
        }`}
      >
        <div className="container-wide flex items-center justify-between gap-6 py-4">
          {/* Brand */}
          <a href="#overview" className="flex items-center gap-3 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-md border-2 border-gold-500 bg-navy-700 text-[13px] font-bold tracking-wide text-gold-300 transition-transform group-hover:scale-105">
              TF
            </div>
            <div className="leading-tight">
              <div className="text-[14px] font-bold text-navy-700">
                GLO TrustFlow AI
              </div>
              <div className="text-[10px] uppercase tracking-wide text-ink-500">
                Solution Reference · v1.0
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-7 lg:flex">
            {NAV_ITEMS.map((item) => {
              const isActive = activeId === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`relative pb-1 text-[13px] font-medium transition-colors ${
                      isActive
                        ? "text-navy-700"
                        : "text-ink-600 hover:text-navy-700"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute -bottom-px left-0 right-0 h-[2px] origin-left transition-transform duration-200 ${
                        isActive
                          ? "scale-x-100 bg-gold-500"
                          : "scale-x-0 bg-gold-400"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Doc ref - desktop */}
          <div className="hidden text-[10px] font-semibold uppercase tracking-widest text-tag lg:block">
            TRF-DOC-001
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label="Toggle navigation"
            className="lg:hidden flex h-9 w-9 items-center justify-center rounded-md border border-ink-200 bg-white text-navy-700"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {mobileOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-ink-200 bg-white lg:hidden">
            <ul className="container-page grid grid-cols-2 gap-2 py-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setMobileOpen(false)}
                    className={`block rounded-sm px-3 py-2 text-sm font-medium transition-colors ${
                      activeId === item.id
                        ? "bg-navy-50 text-navy-700"
                        : "text-ink-600 hover:bg-cream-100"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}
