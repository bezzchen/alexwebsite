import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "./ButtonLink";
import { contactDetails, navItems } from "@/src/lib/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur">
      <div className="bg-black px-4 py-2 text-xs font-medium uppercase tracking-[0.12em] text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-x-3 gap-y-1 sm:flex-row">
          <span className="text-[var(--gold)]">Newmarket Auckland</span>
          <span className="hidden text-white/35 sm:inline">|</span>
          <span>Freephone {contactDetails.freephone}</span>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-3 md:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <Image
            src="/images/alexanderinnlogo.png"
            alt="Alexander Inn logo"
            width={52}
            height={55}
            priority
            className="h-12 w-auto"
          />
          <span className="min-w-0">
            <span className="block text-base font-semibold uppercase leading-tight tracking-[0.12em]">
              Alexander Inn
            </span>
            <span className="hidden text-xs uppercase tracking-[0.18em] text-black/55 sm:block">
              In the heart of Newmarket
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-semibold uppercase tracking-[0.1em] lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-black/68 transition hover:text-black"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <ButtonLink href="/book" variant="secondary">
            Book
          </ButtonLink>
        </div>
      </div>

      <div className="border-t border-black/10 lg:hidden">
        <nav className="mx-auto flex max-w-7xl gap-6 overflow-x-auto px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] md:px-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 text-black/68 transition hover:text-black"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/book" className="shrink-0 text-[var(--gold-dark)]">
            Book
          </Link>
        </nav>
      </div>
    </header>
  );
}
