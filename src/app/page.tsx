import Image from "next/image";
import Link from "next/link";
import { AmenityIcon } from "@/src/components/AmenityIcon";
import { ButtonLink } from "@/src/components/ButtonLink";
import { LocationCardTile } from "@/src/components/LocationCardTile";
import { MapFrame } from "@/src/components/MapFrame";
import { PageHero } from "@/src/components/PageHero";
import { SectionIntro } from "@/src/components/SectionIntro";
import {
  discoverCards,
  homeHighlights,
  homeIntro,
  homeLocationCards,
  reviews,
  roomTypes,
} from "@/src/lib/site";
import { createMetadata, seoPages } from "@/src/lib/seo";

export const metadata = createMetadata(seoPages.home);

export default function Page() {
  return (
    <main>
      <PageHero
        eyebrow="Newmarket Auckland accommodation"
        title="ALEXANDER INN"
        subtitle="IN THE HEART OF NEWMARKET"
        body="Quiet upmarket rooms and suites, a four-minute flat walk from Newmarket shopping, cafes, restaurants, and transport."
        image="/images/0.jpg"
        imageAlt="Alexander Inn exterior"
        priority
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-[0.95fr_1.05fr] md:items-center md:px-8">
        <div className="ui-box relative min-h-[460px] bg-black" data-reveal>
          <Image
            src="/images/1.jpg"
            alt="Alexander Inn guest area"
            fill
            sizes="(min-width: 768px) 46vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <SectionIntro
            eyebrow="Welcome"
            title="Modern comfort within minutes of central Auckland."
          />
          <div className="mt-7 space-y-5 text-base leading-8 text-black/68" data-reveal>
            {homeIntro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              ["4 min", "flat walk to Newmarket"],
              ["13 km", "to Auckland International Airport"],
              ["24/7", "free Wi-Fi Broadband"],
            ].map(([value, label]) => (
              <div key={value} className="ui-box-soft border-l-2 border-[var(--gold)] bg-white p-4" data-reveal>
                <div className="flex items-start gap-3">
                  <AmenityIcon label={label} />
                  <div>
                    <p className="text-3xl font-semibold">{value}</p>
                    <p className="mt-1 text-sm text-black/60">{label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionIntro
            eyebrow="Discover our hotel"
            title="Everything close, everything calm."
            body="Start with the details that matter most: practical facilities, quiet rooms, easy transport, guest feedback, and direct ways to plan your stay."
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {discoverCards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="ui-box group relative min-h-[420px] bg-black text-white"
                data-reveal
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/35 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                    Explore
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold">{card.title}</h3>
                  <p className="mt-3 max-w-lg text-sm leading-6 text-white/76">{card.text}</p>
                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.12em]">
                    More info
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionIntro
            eyebrow="Nearby Auckland"
            title="Popular stops from a Newmarket base."
            body="A quick preview of major landmarks, shopping, venues, and campus destinations near Alexander Inn."
          />
          <ButtonLink href="/location" variant="ghost">
            View All Locations
          </ButtonLink>
        </div>
        <div className="mt-10 grid grid-flow-dense auto-rows-[minmax(280px,auto)] gap-5 md:grid-cols-2 lg:grid-cols-4">
          {homeLocationCards.slice(0, 6).map((card) => (
            <LocationCardTile key={card.title} card={card} category="Nearby" />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionIntro
            eyebrow="Stay with us"
            title="Rooms and suites for quiet Auckland stays."
            body="Explore modern rooms, self-contained suites, spa options, and accessible stays with the practical comforts guests mention most often."
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {roomTypes.map((room) => (
              <article key={room.name} className="ui-box bg-white" data-reveal>
                <div className="relative h-56 overflow-hidden bg-black">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-2xl font-semibold">{room.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-black/65">{room.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[0.9fr_1.1fr] md:items-center md:px-8">
          <div data-reveal-group>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]" data-reveal>
              Find us
            </p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl" data-reveal>
              A Newmarket base near the places guests need.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-8 text-white/68">
              {homeHighlights.map((item) => (
                <div key={item.title} data-reveal>
                  <h3 className="flex items-center gap-3 font-semibold text-white">
                    <AmenityIcon label={`${item.title} ${item.text}`} className="bg-white/12 text-[var(--gold)]" />
                    <span>{item.title}</span>
                  </h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <ButtonLink href="/location" variant="secondary">
                Explore Auckland
              </ButtonLink>
            </div>
          </div>
          <MapFrame height={460} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionIntro
            eyebrow="What our guests say"
            title="Clean, quiet, comfortable, and close."
          />
          <ButtonLink href="/reviews" variant="ghost">
            Read Reviews
          </ButtonLink>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {reviews.slice(0, 3).map((review) => (
            <article key={review.meta} className="ui-box bg-white p-6" data-reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--gold-dark)]">
                {review.meta}
              </p>
              <p className="mt-4 text-base leading-7 text-black/68">{review.quote}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
