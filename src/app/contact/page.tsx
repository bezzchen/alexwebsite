import { AmenityIcon } from "@/src/components/AmenityIcon";
import { ButtonLink } from "@/src/components/ButtonLink";
import { MapFrame } from "@/src/components/MapFrame";
import { PageHero } from "@/src/components/PageHero";
import { SectionIntro } from "@/src/components/SectionIntro";
import { contactDetails, hotelAlert, officeHours } from "@/src/lib/site";
import { createMetadata, seoPages } from "@/src/lib/seo";

export const metadata = createMetadata(seoPages.contact);

export default function Contact() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Talk to Alexander Inn."
        subtitle="Book direct or ask reception."
        body="Contact the hotel for room availability, parking questions, after-hours arrival details, and local Newmarket advice."
        image="/images/1.jpg"
        imageAlt="Alexander Inn guest arrival area"
      />

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[0.9fr_1.1fr] md:px-8">
        <div>
          <SectionIntro
            eyebrow="Contact details"
            title="Alexander Inn, Newmarket."
            body="Direct phone contact is best for urgent arrival details, parking availability, and same-day accommodation questions."
          />
          <div className="mt-8 grid gap-4">
            <div className="ui-box bg-white p-6">
              <div className="flex items-start gap-3">
                <AmenityIcon label={contactDetails.address} />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--gold-dark)]">
                    Address
                  </p>
                  <p className="mt-3 text-lg font-medium">{contactDetails.address}</p>
                </div>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href={`tel:${contactDetails.freephone.replaceAll(" ", "")}`}
                className="ui-box bg-white p-6 transition hover:-translate-y-1"
              >
                <div className="flex items-start gap-3">
                  <AmenityIcon label="Freephone NZ" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--gold-dark)]">
                      Freephone NZ
                    </p>
                    <p className="mt-3 text-2xl font-semibold">{contactDetails.freephone}</p>
                  </div>
                </div>
              </a>
              <a
                href={`tel:${contactDetails.international.replaceAll(" ", "")}`}
                className="ui-box bg-white p-6 transition hover:-translate-y-1"
              >
                <div className="flex items-start gap-3">
                  <AmenityIcon label="International phone" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--gold-dark)]">
                      International
                    </p>
                    <p className="mt-3 text-2xl font-semibold">{contactDetails.international}</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <form className="ui-box bg-white p-6 md:p-8">
          <h2 className="text-3xl font-semibold">Send an enquiry</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium">
              Name
              <input className="min-h-12 border border-black/15 bg-stone-50 px-3 outline-none focus:border-black" name="name" />
            </label>
            <label className="grid gap-2 text-sm font-medium">
              Email
              <input className="min-h-12 border border-black/15 bg-stone-50 px-3 outline-none focus:border-black" name="email" type="email" />
            </label>
            <label className="grid gap-2 text-sm font-medium">
              Phone
              <input className="min-h-12 border border-black/15 bg-stone-50 px-3 outline-none focus:border-black" name="phone" />
            </label>
            <label className="grid gap-2 text-sm font-medium">
              Topic
              <select className="min-h-12 border border-black/15 bg-stone-50 px-3 outline-none focus:border-black" name="topic" defaultValue="booking">
                <option value="booking">Booking</option>
                <option value="parking">Parking</option>
                <option value="arrival">Arrival</option>
                <option value="general">General enquiry</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm font-medium sm:col-span-2">
              Message
              <textarea className="min-h-36 border border-black/15 bg-stone-50 p-3 outline-none focus:border-black" name="message" />
            </label>
          </div>
          <div className="mt-6">
            <ButtonLink href="/book" variant="secondary">
              Book Now
            </ButtonLink>
          </div>
        </form>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.95fr_1.05fr] md:px-8">
          <div>
            <SectionIntro eyebrow="Office hours" title="Reception availability." />
            <ul className="mt-7 grid gap-4">
              {officeHours.map((item) => (
                <li key={item} className="ui-box-soft flex items-center gap-3 border-l-2 border-[var(--gold)] bg-[var(--page-bg)] p-5 text-sm font-medium">
                  <AmenityIcon label={item} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="ui-box mt-8 bg-black p-6 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--gold)]">
                Hotel alert
              </p>
              <div className="mt-4 space-y-3 text-sm leading-6 text-white/70">
                {hotelAlert.map((item) => (
                  <p key={item} className="flex gap-3">
                    <AmenityIcon label={item} className="bg-white/12 text-[var(--gold)]" />
                    <span>{item}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
          <MapFrame height={540} />
        </div>
      </section>
    </main>
  );
}
