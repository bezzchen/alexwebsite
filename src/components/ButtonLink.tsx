import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variants = {
  primary: "bg-black text-white hover:bg-stone-800",
  secondary: "bg-[var(--gold)] text-black hover:bg-[var(--gold-dark)]",
  ghost: "border border-black/15 bg-white/80 text-black hover:border-black hover:bg-white",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] shadow-[0_10px_22px_rgba(0,0,0,0.12)] transition ${variants[variant]} ${className}`}
      data-reveal
    >
      {children}
    </Link>
  );
}
