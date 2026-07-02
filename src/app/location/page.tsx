import { AmenityIcon } from "@/src/components/AmenityIcon";
import { ButtonLink } from "@/src/components/ButtonLink";
import { MapFrame } from "@/src/components/MapFrame";
import { PageHero } from "@/src/components/PageHero";
import { SectionIntro } from "@/src/components/SectionIntro";
import {
  contactDetails,
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
        image="/images/0.jpg"
        imageAlt="Alexander Inn exterior in Newmarket"
      />

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-start md:px-8">
        <div>
          <SectionIntro
            eyebrow="Find us"
            title="21 Alpers Avenue, Newmarket."
          />
          <div className="mt-6 space-y-4 text-base leading-8 text-black/68">
            {locationIntro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="ui-box-soft mt-6 flex gap-3 border-l-2 border-[var(--gold)] bg-white p-5 text-sm leading-6 text-black/68">
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
              <div key={fact} className="ui-box-soft flex gap-3 border-l-2 border-[var(--gold)] bg-[var(--page-bg)] p-5 text-sm font-medium leading-6">
                <AmenityIcon label={fact} />
                <span>{fact}</span>
              </div>
            ))}
          </div>
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
              <article key={section.title} className="ui-box bg-white p-6 md:p-8">
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
