import { ButtonLink } from "@/src/components/ButtonLink";
import { PageHero } from "@/src/components/PageHero";
import { SectionIntro } from "@/src/components/SectionIntro";
import { contactDetails, facilities, hotelAlert, officeHours } from "@/src/lib/site";

export default function Book() {
  return (
    <main>
      <PageHero
        eyebrow="Book your stay"
        title="Check availability direct with Alexander Inn."
        subtitle="Rooms and suites in Newmarket, Auckland."
        body="Use the stay details below, then contact reception for direct booking support, arrival questions, and parking availability."
        image="/images/2.jpg"
        imageAlt="Alexander Inn room"
      />

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[0.9fr_1.1fr] md:px-8">
        <div>
          <SectionIntro
            eyebrow="Direct booking"
            title="Call reception to confirm your stay."
            body="For urgent availability, late arrival, parking, and same-day accommodation questions, phone the hotel directly."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <a
              href={`tel:${contactDetails.freephone.replaceAll(" ", "")}`}
              className="ui-box bg-white p-6 transition hover:-translate-y-1"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--gold-dark)]">
                Freephone NZ
              </p>
              <p className="mt-3 text-2xl font-semibold">{contactDetails.freephone}</p>
            </a>
            <a
              href={`tel:${contactDetails.international.replaceAll(" ", "")}`}
              className="ui-box bg-white p-6 transition hover:-translate-y-1"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--gold-dark)]">
                International
              </p>
              <p className="mt-3 text-2xl font-semibold">{contactDetails.international}</p>
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/rooms" variant="ghost">
              View Rooms
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Contact
            </ButtonLink>
          </div>
        </div>

        <div className="grid gap-5">
          <section className="ui-box bg-white p-6 md:p-8">
            <h2 className="text-2xl font-semibold">Arrival details</h2>
            <ul className="mt-6 grid gap-3">
              {facilities.checkIn.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-black/68">
                  <span className="mt-2 h-1.5 w-1.5 bg-[var(--gold)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
          <section className="ui-box bg-white p-6 md:p-8">
            <h2 className="text-2xl font-semibold">Office hours</h2>
            <ul className="mt-6 grid gap-3">
              {officeHours.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-black/68">
                  <span className="mt-2 h-1.5 w-1.5 bg-[var(--gold)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
          <section className="ui-box bg-black p-6 text-white md:p-8">
            <h2 className="text-2xl font-semibold">Hotel alert</h2>
            <div className="mt-5 space-y-3 text-sm leading-6 text-white/70">
              {hotelAlert.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
