"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type NavItem = {
  label: string;
  href: string;
};

type MobileMenuProps = {
  items: NavItem[];
};

export function MobileMenu({ items }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  return (
    <div className="relative lg:hidden">
      <button
        type="button"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((current) => !current)}
        className="flex h-12 w-12 items-center justify-center rounded-lg border border-black/10 bg-white shadow-[0_10px_22px_rgba(0,0,0,0.12)] transition hover:border-black/25"
      >
        <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
        <span className="flex w-5 flex-col gap-1.5">
          <span
            className={`h-0.5 w-full bg-black transition ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-full bg-black transition ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-full bg-black transition ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      {isOpen ? (
        <nav
          id="mobile-navigation"
          className="ui-box absolute right-0 top-[calc(100%+0.75rem)] z-50 w-[min(20rem,calc(100vw-2.5rem))] border border-black/10 bg-white p-3"
          aria-label="Mobile navigation"
        >
          <div className="grid gap-1">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-black/68 transition hover:bg-[var(--page-bg)] hover:text-black"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/book"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-lg bg-[var(--gold)] px-4 py-3 text-center text-sm font-semibold uppercase tracking-[0.12em] text-black shadow-[0_10px_22px_rgba(0,0,0,0.12)] transition hover:bg-[var(--gold-dark)]"
            >
              Book
            </Link>
          </div>
        </nav>
      ) : null}
    </div>
  );
}
