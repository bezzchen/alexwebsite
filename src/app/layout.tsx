import "./globals.css";
import Header from "../components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-black">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
