import { AmenityIcon } from "@/src/components/AmenityIcon";
import type { LocationCard } from "@/src/lib/site";

type LocationCardTileProps = {
  card: LocationCard;
  category: string;
};

export function LocationCardTile({ card, category }: LocationCardTileProps) {
  const isFeatured = Boolean(card.featured);

  return (
    <article
      className={`ui-box-soft flex h-full min-h-[260px] flex-col p-5 transition duration-300 hover:-translate-y-1 md:p-6 ${
        isFeatured
          ? "bg-black text-white lg:col-span-2"
          : "border border-black/5 bg-white text-black"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <p
          className={`text-xs font-semibold uppercase tracking-[0.16em] ${
            isFeatured ? "text-[var(--gold)]" : "text-[var(--gold-dark)]"
          }`}
        >
          {category}
        </p>
        <AmenityIcon
          label={`${card.title} ${card.travel}`}
          className={isFeatured ? "bg-white/12 text-[var(--gold)]" : ""}
        />
      </div>

      <div className="mt-6 flex flex-1 flex-col">
        <h3 className={isFeatured ? "text-3xl font-semibold leading-tight" : "text-2xl font-semibold leading-tight"}>
          {card.title}
        </h3>
        <p className={`mt-4 text-sm leading-6 ${isFeatured ? "text-white/72" : "text-black/64"}`}>
          {card.description}
        </p>

        <div className="mt-auto grid gap-3 pt-7 sm:grid-cols-2">
          <div className={`rounded-lg p-3 ${isFeatured ? "bg-white/10" : "bg-[var(--page-bg)]"}`}>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] opacity-60">
              Distance
            </p>
            <p className="mt-1 text-base font-semibold">{card.distance}</p>
          </div>
          <div className={`rounded-lg p-3 ${isFeatured ? "bg-white/10" : "bg-[var(--page-bg)]"}`}>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] opacity-60">
              Travel
            </p>
            <p className="mt-1 text-base font-semibold">{card.travel}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
