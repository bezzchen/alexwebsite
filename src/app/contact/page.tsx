import { BookingPanel } from "@/src/components/BookingPanel";
import { ButtonLink } from "@/src/components/ButtonLink";
import { MapFrame } from "@/src/components/MapFrame";
import { PageHero } from "@/src/components/PageHero";
import { SectionIntro } from "@/src/components/SectionIntro";
import { contactDetails, hotelAlert, officeHours } from "@/src/lib/site";

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
      >
        <BookingPanel compact />
      </PageHero>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[0.9fr_1.1fr] md:px-8">
        <div>
          <SectionIntro
            eyebrow="Contact details"
            title="Alexander Inn, Newmarket."
            body="Direct phone contact is best for urgent arrival details, parking availability, and same-day accommodation questions."
          />
          <div className="mt-8 grid gap-4">
            <div className="bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--gold-dark)]">
                Address
              </p>
              <p className="mt-3 text-lg font-medium">{contactDetails.address}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href={`tel:${contactDetails.freephone.replaceAll(" ", "")}`}
                className="bg-white p-6 transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,0.12)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--gold-dark)]">
                  Freephone NZ
                </p>
                <p className="mt-3 text-2xl font-semibold">{contactDetails.freephone}</p>
              </a>
              <a
                href={`tel:${contactDetails.international.replaceAll(" ", "")}`}
                className="bg-white p-6 transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,0.12)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--gold-dark)]">
                  International
                </p>
                <p className="mt-3 text-2xl font-semibold">{contactDetails.international}</p>
              </a>
            </div>
          </div>
        </div>

        <form className="bg-white p-6 md:p-8">
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
                <li key={item} className="border-l-2 border-[var(--gold)] bg-[var(--page-bg)] p-5 text-sm font-medium">
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 bg-black p-6 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--gold)]">
                Hotel alert
              </p>
              <div className="mt-4 space-y-3 text-sm leading-6 text-white/70">
                {hotelAlert.map((item) => (
                  <p key={item}>{item}</p>
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
