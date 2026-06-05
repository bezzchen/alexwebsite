import { ButtonLink } from "./ButtonLink";

export function BookingPanel({ compact = false }: { compact?: boolean }) {
  return (
    <section
      aria-label="Book your stay"
      className={`mx-auto w-full max-w-6xl border border-black/10 bg-white shadow-[0_24px_70px_rgba(0,0,0,0.16)] ${
        compact ? "p-5" : "p-5 md:p-6"
      }`}
    >
      <div className="grid gap-4 md:grid-cols-[1fr_1fr_0.8fr_0.8fr_auto] md:items-end">
        <label className="grid gap-2 text-left">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-black/55">
            Check in
          </span>
          <input
            type="date"
            name="check-in"
            className="min-h-12 border border-black/15 bg-stone-50 px-3 text-sm outline-none transition focus:border-black"
          />
        </label>
        <label className="grid gap-2 text-left">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-black/55">
            Check out
          </span>
          <input
            type="date"
            name="check-out"
            className="min-h-12 border border-black/15 bg-stone-50 px-3 text-sm outline-none transition focus:border-black"
          />
        </label>
        <label className="grid gap-2 text-left">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-black/55">
            Guests
          </span>
          <select
            name="guests"
            defaultValue="1"
            className="min-h-12 border border-black/15 bg-stone-50 px-3 text-sm outline-none transition focus:border-black"
          >
            <option value="1">1 guest</option>
            <option value="2">2 guests</option>
            <option value="3">3 guests</option>
          </select>
        </label>
        <label className="grid gap-2 text-left">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-black/55">
            Rooms
          </span>
          <select
            name="rooms"
            defaultValue="1"
            className="min-h-12 border border-black/15 bg-stone-50 px-3 text-sm outline-none transition focus:border-black"
          >
            <option value="1">1 room</option>
            <option value="2">2 rooms</option>
            <option value="3">3 rooms</option>
          </select>
        </label>
        <ButtonLink href="/book" variant="secondary" className="w-full md:w-auto">
          Book Now
        </ButtonLink>
      </div>
    </section>
  );
}
