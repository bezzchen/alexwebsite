import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/our-rooms",
        destination: "/rooms",
        permanent: true,
      },
      {
        source: "/newmarket-location",
        destination: "/location",
        permanent: true,
      },
      {
        source: "/hotel-facilities",
        destination: "/facilities",
        permanent: true,
      },
      {
        source: "/events",
        destination: "/news",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
