import type { Metadata } from "next";
import {
  contactDetails,
  facilities,
  homeHighlights,
  navItems,
  roomTypes,
} from "./site";

export const siteName = "Alexander Inn";

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.alexanderinn.co.nz"
).replace(/\/$/, "");

export const defaultDescription =
  "Quiet upmarket rooms and suites in Newmarket, Auckland, with luxury beds, free Wi-Fi, onsite parking subject to availability, and easy city access.";

export const defaultImage = "/images/0.jpg";

export const defaultKeywords = [
  "Alexander Inn",
  "Newmarket accommodation",
  "Auckland accommodation",
  "Newmarket motel",
  "Auckland motel",
  "Newmarket hotel",
  "Auckland rooms",
];

export type PageSeo = {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
};

export const seoPages = {
  home: {
    title: "Newmarket Auckland Accommodation",
    description: defaultDescription,
    path: "/",
    image: "/images/0.jpg",
    keywords: defaultKeywords,
  },
  rooms: {
    title: "Rooms & Suites in Newmarket",
    description:
      "Explore Alexander Inn rooms and self-contained suites with luxury beds, double glazing, marble tiled bathrooms, free Wi-Fi, and central Auckland access.",
    path: "/rooms",
    image: "/images/2.jpg",
    keywords: [
      "Newmarket rooms",
      "Auckland suites",
      "self-contained suites Auckland",
      "spa suite Newmarket",
    ],
  },
  facilities: {
    title: "Hotel Facilities",
    description:
      "Review Alexander Inn facilities including free Wi-Fi, onsite parking subject to availability, daily servicing, secure entry, lift access, and reception support.",
    path: "/facilities",
    image: "/images/1.jpg",
    keywords: [
      "Newmarket accommodation facilities",
      "Auckland motel parking",
      "free Wi-Fi Auckland accommodation",
    ],
  },
  location: {
    title: "Newmarket Location",
    description:
      "Find Alexander Inn at 21 Alpers Avenue, Newmarket, close to Auckland shopping, cafes, hospitals, public transport, State Highway 1, and the CBD.",
    path: "/location",
    image: "/images/0.jpg",
    keywords: [
      "Newmarket location",
      "21 Alpers Avenue",
      "accommodation near Newmarket train station",
      "central Auckland accommodation",
    ],
  },
  reviews: {
    title: "Guest Reviews",
    description:
      "Read guest comments about Alexander Inn's clean rooms, quiet setting, comfortable beds, helpful staff, free parking, and Newmarket convenience.",
    path: "/reviews",
    image: "/images/0.jpg",
    keywords: [
      "Alexander Inn reviews",
      "Newmarket accommodation reviews",
      "Auckland motel reviews",
    ],
  },
  contact: {
    title: "Contact Alexander Inn",
    description:
      "Contact Alexander Inn in Newmarket for room availability, booking support, arrival details, parking questions, and local Auckland accommodation advice.",
    path: "/contact",
    image: "/images/1.jpg",
    keywords: [
      "contact Alexander Inn",
      "Newmarket accommodation phone",
      "book Alexander Inn",
    ],
  },
  book: {
    title: "Book Direct",
    description:
      "Check Alexander Inn availability direct with reception for Newmarket rooms, suites, arrival support, and parking details before your Auckland stay.",
    path: "/book",
    image: "/images/2.jpg",
    keywords: [
      "book Alexander Inn",
      "book Newmarket accommodation",
      "Auckland direct booking",
    ],
  },
  news: {
    title: "Newmarket Stay Notes",
    description:
      "Read useful Alexander Inn updates about Newmarket location, quiet room comforts, parking, reception hours, and Auckland transport access.",
    path: "/news",
    image: "/images/0.jpg",
    keywords: [
      "Newmarket accommodation news",
      "Auckland stay tips",
      "Alexander Inn updates",
    ],
  },
  privacy: {
    title: "Privacy Policy",
    description:
      "Read how Alexander Inn collects, uses, stores, and protects personal information submitted through this website.",
    path: "/privacy",
    image: "/images/1.jpg",
    keywords: [
      "Alexander Inn privacy policy",
      "Newmarket accommodation privacy",
      "website personal information",
    ],
  },
} satisfies Record<string, PageSeo>;

export const sitemapPages = Object.values(seoPages);

export function absoluteUrl(path = "/") {
  return new URL(path, `${siteUrl}/`).toString();
}

export function createMetadata({
  title,
  description,
  path,
  image = defaultImage,
  keywords = [],
}: PageSeo): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title,
    description,
    keywords: Array.from(new Set([...defaultKeywords, ...keywords])),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      url,
      siteName,
      locale: "en_NZ",
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 800,
          alt: `${siteName} in Newmarket, Auckland`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteName}`,
      description,
      images: [imageUrl],
    },
  };
}

export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: siteName,
      url: absoluteUrl("/"),
      description: defaultDescription,
      publisher: {
        "@id": `${siteUrl}/#hotel`,
      },
      inLanguage: "en-NZ",
    },
    {
      "@type": "Hotel",
      "@id": `${siteUrl}/#hotel`,
      name: contactDetails.name,
      url: absoluteUrl("/"),
      logo: absoluteUrl("/images/alexanderinnlogo.png"),
      image: [
        absoluteUrl("/images/0.jpg"),
        absoluteUrl("/images/1.jpg"),
        absoluteUrl("/images/2.jpg"),
        absoluteUrl("/images/3.jpg"),
      ],
      description: defaultDescription,
      telephone: [
        contactDetails.freephone,
        contactDetails.international,
        contactDetails.mobile,
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "21 Alpers Avenue",
        addressLocality: "Newmarket",
        addressRegion: "Auckland",
        postalCode: "1023",
        addressCountry: "NZ",
      },
      sameAs: [contactDetails.facebook],
      hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactDetails.address)}`,
      amenityFeature: [
        ...facilities.essential.slice(0, 6),
        ...homeHighlights.map((item) => item.title),
      ].map((name) => ({
        "@type": "LocationFeatureSpecification",
        name,
        value: true,
      })),
      containsPlace: roomTypes.map((room) => ({
        "@type": "HotelRoom",
        name: room.name,
        description: room.description,
      })),
    },
    {
      "@type": "ItemList",
      "@id": `${siteUrl}/#site-navigation`,
      name: "Primary navigation",
      itemListElement: [
        { label: "Home", href: "/" },
        ...navItems,
      ].map((item, index) => ({
        "@type": "SiteNavigationElement",
        position: index + 1,
        name: item.label,
        url: absoluteUrl(item.href),
      })),
    },
  ],
};

export function stringifyJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export const stringifiedStructuredData = stringifyJsonLd(structuredData);
