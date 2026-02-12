import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/alexanderinnlogo.png"
            alt="Hotel Logo"
            width={40}
            height={40}
            priority
          />
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-8 text-sm font-medium">
          <Link
            href="/rooms"
            className="text-gray-700 hover:text-black transition-colors"
          >
            Rooms
          </Link>

          <Link
            href="/news"
            className="text-gray-700 hover:text-black transition-colors"
          >
            News
          </Link>

          <Link
            href="/facilities"
            className="text-gray-700 hover:text-black transition-colors"
          >
            facilities
          </Link>

          <Link
            href="/location"
            className="text-gray-700 hover:text-black transition-colors"
          >
            Location
          </Link>

          <Link
            href="/reviews"
            className="text-gray-700 hover:text-black transition-colors"
          >
            Reviews
          </Link>

          <Link
            href="/contact"
            className="text-gray-700 hover:text-black transition-colors"
          >
            Contact
          </Link>

          <Link
            href="/book"
            className="rounded-md bg-black px-5 py-2 text-white transition hover:bg-gray-800"
          >
            Book
          </Link>
        </nav>
      </div>
    </header>
  );
}
