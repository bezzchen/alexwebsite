import Image from "next/image";
import Link from "next/link";
import { AmenityIcon } from "./AmenityIcon";
import {
  contactDetails,
  hotelAlert,
  navItems,
  officeHours,
} from "@/src/lib/site";
import { ButtonLink } from "./ButtonLink";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr] md:px-8">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <Image
              src="/images/alexanderinnlogo.png"
              alt="Alexander Inn logo"
              width={54}
              height={57}
              className="h-12 w-auto bg-white"
            />
            <span>
              <span className="block text-lg font-semibold uppercase tracking-[0.12em]">
                Alexander Inn
              </span>
              <span className="text-xs uppercase tracking-[0.18em] text-white/55">
                Newmarket, Auckland
              </span>
            </span>
          </Link>
          <p className="mt-6 max-w-sm text-sm leading-7 text-white/65">
            Quiet, upmarket rooms and suites in the heart of Newmarket, a short
            walk from shopping, cafes, restaurants, transport, and central
            Auckland connections.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="/book" variant="secondary">
              Book Now
            </ButtonLink>
            <ButtonLink href="/contact" variant="ghost">
              Contact
            </ButtonLink>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--gold)]">
            Contact Details
          </h3>
          <div className="mt-5 space-y-4 text-sm leading-7 text-white/68">
            <p>
              {contactDetails.name}
              <br />
              {contactDetails.address}
            </p>
            <p>
              Freephone (NZ only)
              <br />
              <a className="text-white hover:text-[var(--gold)]" href={`tel:${contactDetails.freephone.replaceAll(" ", "")}`}>
                {contactDetails.freephone}
              </a>
            </p>
            <p>
              Internationally
              <br />
              <a className="text-white hover:text-[var(--gold)]" href={`tel:${contactDetails.international.replaceAll(" ", "")}`}>
                {contactDetails.international}
              </a>
            </p>
            <p>
              Mobile
              <br />
              <a className="text-white hover:text-[var(--gold)]" href={`tel:${contactDetails.mobile.replaceAll(" ", "")}`}>
                {contactDetails.mobile}
              </a>
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--gold)]">
            Useful Links
          </h3>
          <nav className="mt-5 grid gap-3 text-sm text-white/68">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
          </nav>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--gold)]">
            Office Hours
          </h3>
          <ul className="mt-5 space-y-3 text-sm leading-6 text-white/68">
            {officeHours.map((item) => (
              <li key={item} className="flex gap-3">
                <AmenityIcon label={item} className="bg-white/12 text-[var(--gold)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h3 className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--gold)]">
            Follow Us
          </h3>
          <div className="mt-4 flex gap-4 text-sm text-white/68">
            <a href={contactDetails.facebook} target="_blank" rel="noreferrer" className="hover:text-white">
              Facebook
            </a>
            <span>Instagram</span>
            <span>TikTok</span>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-6 text-xs leading-6 text-white/45 md:grid-cols-[1fr_auto] md:px-8">
          <p>{hotelAlert.join(" ")}</p>
          <p className="uppercase tracking-[0.12em]">Copyright 2026 Alexander Inn</p>
        </div>
      </div>
    </footer>
  );
}
