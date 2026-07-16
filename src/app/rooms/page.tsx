import Image from "next/image";
import { AmenityIcon } from "@/src/components/AmenityIcon";
import { ButtonLink } from "@/src/components/ButtonLink";
import { PageHero } from "@/src/components/PageHero";
import { SectionIntro } from "@/src/components/SectionIntro";
import { bookingUrl, homeIntro, roomTypes } from "@/src/lib/site";
import { createMetadata, seoPages } from "@/src/lib/seo";

export const metadata = createMetadata(seoPages.rooms);

export default function Rooms() {
  return (
    <main>
      <PageHero
        eyebrow="Rooms & suites"
        title="Quiet rooms in the heart of Newmarket."
        subtitle="Modern decor, luxury beds, and practical comforts."
        body="Choose upmarket rooms or self-contained suites close to Newmarket shopping, dining, hospitals, transport, and central Auckland."
        image="/images/3.jpg"
        imageAlt="Alexander Inn guest room"
      />

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionIntro
            eyebrow="Accommodation"
            title="A quiet night's sleep, minutes from the city."
            body={homeIntro[1]}
          />
          <div className="grid gap-5 sm:grid-cols-3">
            {["Double glazing", "Marble tiled bathrooms", "Balconies and sun seats"].map((item) => (
              <div key={item} className="ui-box-soft flex items-center gap-3 border-l-2 border-[var(--gold)] bg-white p-5" data-reveal>
                <AmenityIcon label={item} />
                <p className="text-lg font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionIntro
            eyebrow="Stay options"
            title="Rooms and suites for short stays, work trips, and longer visits."
            align="center"
          />
          <div className="mt-12 grid gap-7 md:grid-cols-2">
            {roomTypes.map((room) => (
              <article key={room.name} className="ui-box grid border border-black/10 bg-[var(--paper)] lg:grid-cols-[0.95fr_1.05fr]" data-reveal>
                <div className="relative min-h-[280px] bg-black">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    sizes="(min-width: 1024px) 25vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-between p-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--gold-dark)]">
                      Alexander Inn
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold">{room.name}</h2>
                    <p className="mt-4 text-sm leading-7 text-black/68">
                      {room.description}
                    </p>
                  </div>
                  <ul className="mt-6 grid gap-2">
                    {room.features.map((feature) => (
                      <li key={feature} className="flex gap-3 text-sm text-black/68">
                        <AmenityIcon label={feature} className="-mt-1" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center md:px-8">
        <div className="ui-box relative min-h-[420px] bg-black" data-reveal>
          <Image
            src="/images/3.jpg"
            alt="Alexander Inn suite interior"
            fill
            sizes="(min-width: 768px) 55vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <SectionIntro
            eyebrow="Close and convenient"
            title="Stay near Newmarket, Remuera, Epsom, Parnell, and the CBD."
            body={homeIntro[2]}
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={bookingUrl} variant="secondary">
              Book Now
            </ButtonLink>
            <ButtonLink href="/facilities" variant="ghost">
              View Facilities
            </ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
