import Image from "next/image";
import { AmenityIcon } from "@/src/components/AmenityIcon";
import type { LocationCard } from "@/src/lib/site";

type LocationCardTileProps = {
  card: LocationCard;
  category: string;
};

export function LocationCardTile({ card, category }: LocationCardTileProps) {
  const isFeatured = Boolean(card.featured);
  const size = card.size ?? (isFeatured ? "wide" : "standard");
  const sizeClass =
    size === "feature"
      ? "min-h-[420px] lg:col-span-2 lg:row-span-2"
      : size === "wide"
        ? "min-h-[310px] lg:col-span-2"
        : "min-h-[280px]";

  return (
    <article
      className={`ui-box group relative isolate flex h-full flex-col overflow-hidden bg-black text-white transition duration-300 hover:-translate-y-1 ${sizeClass}`}
      data-reveal
    >
      <Image
        src={card.image}
        alt={`${card.title} near Alexander Inn`}
        fill
        sizes={
          size === "feature"
            ? "(min-width: 1024px) 50vw, 100vw"
            : size === "wide"
              ? "(min-width: 1024px) 50vw, (min-width: 768px) 50vw, 100vw"
              : "(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
        }
        className="object-cover transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/86 via-black/35 to-black/24" />
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/72 to-transparent" />

      <div className="relative z-10 flex items-start justify-between gap-4 p-5 md:p-6">
        <p className="max-w-[75%] text-xs font-semibold uppercase tracking-[0.16em] text-[var(--gold)]">
          {category}
        </p>
        <AmenityIcon
          label={`${card.title} ${card.travel}`}
          className="shrink-0 bg-white/12 text-[var(--gold)]"
        />
      </div>

      <div className="relative z-10 mt-auto flex flex-col p-5 pt-16 md:p-6">
        <h3 className={`break-words font-semibold leading-tight ${size === "feature" ? "text-4xl md:text-5xl" : "text-2xl md:text-3xl"}`}>
          {card.title}
        </h3>
        <p className="mt-3 max-w-xl text-sm leading-6 text-white/78">
          {card.description}
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg bg-white/12 p-3 backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/58">
              Distance
            </p>
            <p className="mt-1 text-base font-semibold">{card.distance}</p>
          </div>
          <div className="rounded-lg bg-white/12 p-3 backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/58">
              Travel
            </p>
            <p className="mt-1 text-base font-semibold">{card.travel}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
