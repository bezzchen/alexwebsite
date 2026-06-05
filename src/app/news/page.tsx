import Image from "next/image";
import { ButtonLink } from "@/src/components/ButtonLink";
import { PageHero } from "@/src/components/PageHero";
import { SectionIntro } from "@/src/components/SectionIntro";
import { newsItems } from "@/src/lib/site";

export default function News() {
  return (
    <main>
      <PageHero
        eyebrow="News"
        title="Newmarket stay notes."
        subtitle="Local access, guest comforts, and arrival details."
        body="Plan around the parts of the stay guests ask about most: location, room comfort, parking, reception hours, and transport."
        image="/images/0.jpg"
        imageAlt="Alexander Inn exterior"
      />

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <SectionIntro
          eyebrow="Updates"
          title="Useful details for your Auckland visit."
          body="A quick place for accommodation notes, practical reminders, and nearby Newmarket highlights."
          align="center"
        />
        <div className="mt-12 grid gap-7 md:grid-cols-3">
          {newsItems.map((item) => (
            <article key={item.title} className="ui-box bg-white">
              <div className="relative h-64 overflow-hidden bg-black">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition duration-700 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--gold-dark)]">
                  {item.tag}
                </p>
                <h2 className="mt-3 text-2xl font-semibold leading-tight">{item.title}</h2>
                <p className="mt-4 text-sm leading-7 text-black/68">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-black py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[1fr_auto] md:items-center md:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
              Plan your stay
            </p>
            <h2 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
              Stay close to Newmarket shopping, cafes, hospitals, and central Auckland.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/rooms" variant="secondary">
              View Rooms
            </ButtonLink>
            <ButtonLink href="/location" variant="ghost">
              View Location
            </ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
