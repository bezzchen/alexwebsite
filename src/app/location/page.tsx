import { AmenityIcon } from "@/src/components/AmenityIcon";
import { ButtonLink } from "@/src/components/ButtonLink";
import { LocationCardTile } from "@/src/components/LocationCardTile";
import { MapFrame } from "@/src/components/MapFrame";
import { PageHero } from "@/src/components/PageHero";
import { SectionIntro } from "@/src/components/SectionIntro";
import {
  contactDetails,
  locationCardSections,
  locationIntro,
  locationQuickFacts,
  transportDirections,
} from "@/src/lib/site";
import { createMetadata, seoPages } from "@/src/lib/seo";

export const metadata = createMetadata(seoPages.location);

export default function Location() {
  return (
    <main>
      <PageHero
        eyebrow="Newmarket location"
        title="Close and convenient."
        subtitle="A practical Auckland base."
        body="Alexander Inn is conveniently situated at 21 Alpers Avenue, Newmarket, Auckland Central, New Zealand."
        image="/images/westfield.webp"
        imageAlt="Westfield Newmarket near Alexander Inn"
      />

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-start md:px-8">
        <div>
          <SectionIntro
            eyebrow="Find us"
            title="21 Alpers Avenue, Newmarket."
          />
          <div className="mt-6 space-y-4 text-base leading-8 text-black/68" data-reveal>
            {locationIntro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="ui-box-soft mt-6 flex gap-3 border-l-2 border-[var(--gold)] bg-white p-5 text-sm leading-6 text-black/68" data-reveal>
            <AmenityIcon label={contactDetails.address} />
            <p>{contactDetails.address}</p>
          </div>
          <div className="mt-8">
            <ButtonLink href="/contact" variant="ghost">
              Contact Reception
            </ButtonLink>
          </div>
        </div>
        <MapFrame height={560} />
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionIntro
            eyebrow="Nearby"
            title="Minutes from shopping, transport, hospitals, and central Auckland."
            align="center"
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {locationQuickFacts.map((fact) => (
              <div key={fact} className="ui-box-soft flex gap-3 border-l-2 border-[var(--gold)] bg-[var(--page-bg)] p-5 text-sm font-medium leading-6" data-reveal>
                <AmenityIcon label={fact} />
                <span>{fact}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <SectionIntro
          eyebrow="Explore nearby"
          title="Landmarks, venues, schools, and services from Alexander Inn."
          body="These cards adapt the nearby-place set from the Newmarket location reference, with distances and travel times estimated from 21 Alpers Avenue."
          align="center"
        />
        <div className="mt-14 space-y-16">
          {locationCardSections.map((section) => (
            <div key={section.title}>
              <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between" data-reveal-group>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--gold-dark)]" data-reveal>
                    {section.title}
                  </p>
                  <h2 className="mt-2 text-3xl font-semibold" data-reveal>{section.title}</h2>
                </div>
                <p className="max-w-2xl text-sm leading-6 text-black/62" data-reveal>{section.intro}</p>
              </div>
              <div className="mt-7 grid grid-flow-dense auto-rows-[minmax(280px,auto)] gap-5 md:grid-cols-2 lg:grid-cols-4">
                {section.cards.map((card) => (
                  <LocationCardTile key={card.title} card={card} category={section.title} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionIntro
            eyebrow="Directions"
            title="Arrive by car, train, bus, or taxi."
            body="Alpers Avenue is a one-way street, so driving directions depend on whether you are travelling north or south on State Highway 1."
          />
          <div className="grid gap-5">
            {transportDirections.map((section) => (
              <article key={section.title} className="ui-box bg-white p-6 md:p-8" data-reveal>
                <h2 className="flex items-center gap-3 text-2xl font-semibold">
                  <AmenityIcon label={section.title} />
                  <span>{section.title}</span>
                </h2>
                <div className="mt-5 space-y-4 text-sm leading-7 text-black/68">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
