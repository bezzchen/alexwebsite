import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import {
  createMetadata,
  seoPages,
  siteName,
  siteUrl,
  stringifiedStructuredData,
} from "@/src/lib/seo";

const homeMetadata = createMetadata(seoPages.home);

export const metadata: Metadata = {
  ...homeMetadata,
  metadataBase: new URL(siteUrl),
  title: {
    default: "Alexander Inn | Newmarket Auckland Accommodation",
    template: `%s | ${siteName}`,
  },
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: "travel",
  referrer: "strict-origin-when-cross-origin",
  icons: {
    icon: "/favicon.ico",
    apple: "/images/alexanderinnlogo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-[var(--page-bg)] text-black antialiased">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: stringifiedStructuredData }}
        />
        <Header />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-RD0TBM8QSE" />
    </html>
  );
}
