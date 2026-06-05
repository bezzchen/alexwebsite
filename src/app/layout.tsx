import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alexander Inn | Newmarket Auckland Accommodation",
  description:
    "Quiet upmarket rooms and suites in the heart of Newmarket, Auckland.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-[var(--page-bg)] text-black antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
