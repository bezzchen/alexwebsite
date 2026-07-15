import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "./ButtonLink";
import { MobileMenu } from "./MobileMenu";
import { bookingUrl, navItems } from "@/src/lib/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur">
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

        <div className="hidden lg:block">
          <ButtonLink href={bookingUrl} variant="secondary">
            Book
          </ButtonLink>
        </div>

        <MobileMenu items={navItems} />
      </div>
    </header>
  );
}
