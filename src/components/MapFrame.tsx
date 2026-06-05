import { GoogleMapsEmbed } from "@next/third-parties/google";
import { contactDetails } from "@/src/lib/site";

export function MapFrame({ height = 520 }: { height?: number }) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactDetails.address)}`;

  if (!apiKey) {
    return (
      <div className="flex min-h-[360px] flex-col justify-between border border-black/10 bg-white p-8 shadow-[0_24px_80px_rgba(0,0,0,0.12)]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--gold-dark)]">
            Map
          </p>
          <h2 className="mt-4 text-3xl font-semibold">Alexander Inn</h2>
          <p className="mt-4 max-w-md text-base leading-7 text-black/68">
            {contactDetails.address}
          </p>
        </div>
        <a
          href={mapHref}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex min-h-11 w-fit items-center justify-center rounded-sm bg-black px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-stone-800"
        >
          Open Map
        </a>
      </div>
    );
  }

  return (
    <div className="overflow-hidden border border-black/10 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.12)]">
      <GoogleMapsEmbed
        apiKey={apiKey}
        height={height}
        width="100%"
        mode="place"
        q={contactDetails.mapQuery}
      />
    </div>
  );
}
