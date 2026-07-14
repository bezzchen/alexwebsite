type IconName =
  | "alert"
  | "baby"
  | "bed"
  | "bus"
  | "calendar"
  | "car"
  | "city"
  | "clean"
  | "copy"
  | "elevator"
  | "hair"
  | "key"
  | "kitchen"
  | "laundry"
  | "lock"
  | "map"
  | "phone"
  | "plane"
  | "shield"
  | "shopping"
  | "spa"
  | "train"
  | "wifi";

type AmenityIconProps = {
  label: string;
  className?: string;
};

const iconPaths: Record<IconName, string[]> = {
  alert: [
    "M12 3 2.5 20h19L12 3Z",
    "M12 9v5",
    "M12 17h.01",
  ],
  baby: [
    "M8.5 8.5a3.5 3.5 0 1 1 7 0",
    "M7 14h10l-1 6H8l-1-6Z",
    "M9 17h.01M15 17h.01",
  ],
  bed: [
    "M3 7v11",
    "M21 12v6",
    "M3 13h18",
    "M5 13V9h6a3 3 0 0 1 3 3v1",
    "M14 13v-2h4a3 3 0 0 1 3 3",
  ],
  bus: [
    "M6 4h12a3 3 0 0 1 3 3v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a3 3 0 0 1 3-3Z",
    "M6 9h12",
    "M7 18v2M17 18v2",
    "M7 14h.01M17 14h.01",
  ],
  calendar: [
    "M7 3v4M17 3v4",
    "M4 7h16",
    "M5 5h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z",
  ],
  car: [
    "M5 17h14",
    "M7 17v2M17 17v2",
    "M4 13l2-5a3 3 0 0 1 3-2h6a3 3 0 0 1 3 2l2 5",
    "M5 13h14a2 2 0 0 1 2 2v2H3v-2a2 2 0 0 1 2-2Z",
    "M7 15h.01M17 15h.01",
  ],
  city: [
    "M4 21V7l6-3v17",
    "M10 9h10v12",
    "M7 10h.01M7 14h.01M7 18h.01",
    "M14 13h.01M17 13h.01M14 17h.01M17 17h.01",
  ],
  clean: [
    "M12 3l1.6 4.2L18 9l-4.4 1.8L12 15l-1.6-4.2L6 9l4.4-1.8L12 3Z",
    "M5 14l.8 2.2L8 17l-2.2.8L5 20l-.8-2.2L2 17l2.2-.8L5 14Z",
    "M19 14l.6 1.4L21 16l-1.4.6L19 18l-.6-1.4L17 16l1.4-.6L19 14Z",
  ],
  copy: [
    "M8 8h10a2 2 0 0 1 2 2v10H8V8Z",
    "M4 16V4h10",
    "M12 13h4M12 17h4",
  ],
  elevator: [
    "M7 21h10",
    "M8 3h8v18H8V3Z",
    "M12 7v10",
    "M10 9l2-2 2 2",
    "M10 15l2 2 2-2",
  ],
  hair: [
    "M8 3h8v4a4 4 0 0 1-8 0V3Z",
    "M12 11v10",
    "M9 16h6",
  ],
  key: [
    "M15 7a4 4 0 1 0-3 6.9",
    "M12 14l8-8",
    "M17 9l2 2",
    "M15 11l2 2",
  ],
  kitchen: [
    "M5 3v18",
    "M9 3v18",
    "M5 9h4",
    "M15 3v18",
    "M13 3h6v8h-6V3Z",
  ],
  laundry: [
    "M6 3h12a2 2 0 0 1 2 2v16H4V5a2 2 0 0 1 2-2Z",
    "M8 7h.01M11 7h.01",
    "M8 15a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z",
    "M10 15c1.2-1 2.8-1 4 0s2.8 1 4 0",
  ],
  lock: [
    "M7 11V8a5 5 0 0 1 10 0v3",
    "M6 11h12v10H6V11Z",
    "M12 15v2",
  ],
  map: [
    "M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z",
    "M12 10.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
  ],
  phone: [
    "M6.5 3.5 9 6l-2 3c1.2 2.4 3.1 4.3 5.5 5.5l3-2 2.5 2.5-1.5 3.5c-.4.9-1.3 1.4-2.3 1.2-7.2-1.2-12.7-6.7-14-14-.2-1 .3-1.9 1.2-2.3l3.1-1.4Z",
  ],
  plane: [
    "M2 16l20-8-20-8 5 8-5 8Z",
    "M7 8h8",
  ],
  shield: [
    "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z",
    "M9 12l2 2 4-5",
  ],
  shopping: [
    "M6 8h12l-1 13H7L6 8Z",
    "M9 8a3 3 0 0 1 6 0",
    "M9 12h.01M15 12h.01",
  ],
  spa: [
    "M12 21c4-3 6-6.4 6-10a6 6 0 0 0-12 0c0 3.6 2 7 6 10Z",
    "M12 7v10",
    "M8.5 11.5 12 15l3.5-3.5",
  ],
  train: [
    "M7 3h10a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Z",
    "M8 7h8",
    "M8 12h8",
    "M8 21l3-3M16 21l-3-3",
  ],
  wifi: [
    "M4 9a12 12 0 0 1 16 0",
    "M7.5 12.5a7 7 0 0 1 9 0",
    "M10.5 16a3 3 0 0 1 3 0",
    "M12 20h.01",
  ],
};

export function iconNameForLabel(label: string): IconName {
  const text = label.toLowerCase();

  if (text.includes("wi-fi") || text.includes("wifi") || text.includes("broadband")) return "wifi";
  if (text.includes("alert") || text.includes("fee") || text.includes("smoke") || text.includes("fire")) return "alert";
  if (text.includes("parking") || text.includes("car") || text.includes("drive") || text.includes("taxi")) return "car";
  if (text.includes("airport")) return "plane";
  if (text.includes("train")) return "train";
  if (text.includes("bus")) return "bus";
  if (text.includes("check in") || text.includes("check out") || text.includes("hours") || text.includes("reception")) return "calendar";
  if (text.includes("phone") || text.includes("freephone") || text.includes("international") || text.includes("mobile")) return "phone";
  if (text.includes("location") || text.includes("avenue") || text.includes("central") || text.includes("near") || text.includes("walk")) return "map";
  if (text.includes("shopping") || text.includes("restaurants") || text.includes("cafes") || text.includes("cinemas")) return "shopping";
  if (text.includes("security") || text.includes("secure") || text.includes("safe")) return "shield";
  if (text.includes("key")) return "key";
  if (text.includes("lift") || text.includes("elevator") || text.includes("stairway")) return "elevator";
  if (text.includes("wheelchair")) return "shield";
  if (text.includes("serviced") || text.includes("daily") || text.includes("clean")) return "clean";
  if (text.includes("room") || text.includes("bed") || text.includes("sleep") || text.includes("double glazing")) return "bed";
  if (text.includes("kitchen") || text.includes("self-contained")) return "kitchen";
  if (text.includes("spa") || text.includes("bath") || text.includes("soap") || text.includes("shaver") || text.includes("toothbrush")) return "spa";
  if (text.includes("laundry")) return "laundry";
  if (text.includes("hair dryer")) return "hair";
  if (text.includes("baby") || text.includes("cot") || text.includes("highchair")) return "baby";
  if (text.includes("photocopy") || text.includes("scanner") || text.includes("postal") || text.includes("courier")) return "copy";

  return "map";
}

export function AmenityIcon({ label, className = "" }: AmenityIconProps) {
  const iconName = iconNameForLabel(label);

  return (
    <span
      className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[rgba(214,164,55,0.16)] text-[var(--gold-dark)] ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        className="h-[18px] w-[18px]"
      >
        {iconPaths[iconName].map((path) => (
          <path key={path} d={path} />
        ))}
      </svg>
    </span>
  );
}
