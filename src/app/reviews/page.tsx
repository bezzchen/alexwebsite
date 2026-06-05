import { BookingPanel } from "@/src/components/BookingPanel";
import { ButtonLink } from "@/src/components/ButtonLink";
import { PageHero } from "@/src/components/PageHero";
import { SectionIntro } from "@/src/components/SectionIntro";
import { reviews } from "@/src/lib/site";

export default function Reviews() {
  const featured = reviews.slice(0, 4);
  const archive = reviews.slice(4);

  return (
    <main>
      <PageHero
        eyebrow="Reviews"
        title="What our guests say."
        subtitle="Clean, quiet, comfortable, and close."
        body="Alexander Inn guests regularly mention friendly service, spotless rooms, comfortable beds, free parking, and the convenience of Newmarket."
        image="/images/0.jpg"
        imageAlt="Alexander Inn exterior"
      >
        <BookingPanel compact />
      </PageHero>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <SectionIntro
          eyebrow="Guest feedback"
          title="Recent notes from guests."
          body="Selected reviews from guests who stayed for shopping, work trips, family visits, medical appointments, and Auckland stopovers."
          align="center"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {featured.map((review) => (
            <article key={review.meta} className="bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--gold-dark)]">
                {review.meta}
              </p>
              <p className="mt-5 text-sm leading-7 text-black/68">{review.quote}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionIntro
              eyebrow="Archive"
              title="More guest comments."
              body="More notes from guests who valued the location, room comfort, cleanliness, service, and quiet setting."
            />
            <ButtonLink href="/book" variant="secondary">
              Book Now
            </ButtonLink>
          </div>
          <div className="mt-12 columns-1 gap-5 md:columns-2 xl:columns-3">
            {archive.map((review) => (
              <article key={`${review.meta}-${review.quote.slice(0, 24)}`} className="mb-5 break-inside-avoid bg-[var(--page-bg)] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--gold-dark)]">
                  {review.meta}
                </p>
                <p className="mt-4 text-sm leading-7 text-black/68">{review.quote}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
