"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function PageReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const items = Array.from(document.querySelectorAll("main > *")).filter(
      (item): item is HTMLElement => item instanceof HTMLElement,
    );

    items.forEach((item, index) => {
      item.classList.add("page-reveal-item");
      item.classList.remove("is-visible");
      item.style.setProperty("--reveal-delay", `${Math.min(index, 6) * 70}ms`);
    });

    document.body.classList.add("reveal-ready");

    if (reduceMotion || !("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return () => {
        items.forEach((item) => {
          item.classList.remove("page-reveal-item", "is-visible");
          item.style.removeProperty("--reveal-delay");
        });
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.12,
      },
    );

    items.forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
      items.forEach((item) => {
        item.classList.remove("page-reveal-item", "is-visible");
        item.style.removeProperty("--reveal-delay");
      });
    };
  }, [pathname]);

  return null;
}
