import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex flex-col min-h-screen bg-white text-black">
        <Header />
        <main className="pt-14">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
