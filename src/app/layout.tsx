import "./globals.css";
import Header from "../components/Header";
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
      <body className="min-h-screen bg-white text-black">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
