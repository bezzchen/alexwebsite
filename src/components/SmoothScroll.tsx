"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export function SmoothScroll() {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      return;
    }

    const lenis = new Lenis({
      anchors: true,
      autoRaf: true,
      lerp: 0.085,
      smoothWheel: true,
      stopInertiaOnNavigate: true,
      wheelMultiplier: 0.9,
    });

    lenisRef.current = lenis;

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (window.location.hash) {
      return;
    }

    lenisRef.current?.scrollTo(0, { immediate: true });
  }, [pathname]);

  return null;
}
