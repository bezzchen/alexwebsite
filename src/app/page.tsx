import Image from "next/image";
import "./globals.css";
import Link from "next/link"
import { GoogleMapsEmbed } from '@next/third-parties/google';

export default function Page() {
    return (
      <main className="text-center">
        <Image 
          src="/images/0.jpg"
          alt="Hero photo"
          width={1600}
          height={900}
          className="w-full h-[690px] object-cover"
        />
        <div className="flex flex-col gap-y-24">
          <div className="flex flex-col gap-y-4">
            <h1 className="pt-8 text-6xl">
              ALEXANDER INN
            </h1>
            <h2 className="text-3xl text-yellow-500">
              IN THE HEART OF NEWMARKET
            </h2>
            <p className="max-w-2xl mx-auto text-lg">
            Our upmarket rooms and suites located at Newmarket offer high quality modern décor and luxury beds.

            We have quiet rooms with double glazing, marble tiled bathrooms, balconies and sun seats to relax on… a quiet night's sleep… and yet… only a four-minute flat walk from your accommodation to the bustling fashion and shopping capital of Newmarket, Auckland and the many chic cafes and restaurants, just a stroll away.

            Remuera, Epsom, Sky City Casino, Vector Arena, The Museum and Domain, Alexandra Park Raceway, Public Hospitals and Parnell Art Galleries are all a five-minute drive. We are en-route and only 13km from the Auckland International Airport.
            </p>
          </div>
          <h1 className="pt-8 text-6xl">
              DISCOVER OUR HOTEL
          </h1>
          <div className="flex flex-wrap justify-center gap-30">
            <Link href="/facilities" className="group relative w-[500px] h-[500px] overflow-hidden rounded-4xl cursor-pointer">
              <Image
                src="/images/1.jpg"
                alt="box1" 
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/60" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h3 className="text-3xl font-bold">OUR FACILITIES</h3>
                <p className="opacity-0 translate-y-4 transtition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">MORE INFO</p>
              </div>
            </Link>
            <Link href="/rooms" className="group relative w-[500px] h-[500px] overflow-hidden rounded-4xl cursor-pointer">
              <Image
                src="/images/2.jpg"
                alt="box1" 
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/60" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h3 className="text-3xl font-bold">OUR ROOMS</h3>
                <p className="opacity-0 translate-y-4 transtition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">MORE INFO</p>
              </div>
            </Link>
          </div>
          <div>
            <h1 className="text-6xl">
              FIND US
            </h1>
            <h2 className="text-2xl pt-2 pb-4">
              Discover all the amazing attractions, services, and destinations near our hotel
            </h2>
            <Link href="/location" className="rounded-2xl bg-black text-white px-2 py-2">
              Explore Auckland
            </Link>
          </div>
          <div className="max-w-6xl w-full h-[450px] mx-auto rounded-4xl overflow-hidden shadow-lg">
            <GoogleMapsEmbed 
              apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
              height={450}
              width="100%"
              mode="place"
              q="21+Alpers+AvenueEpsom,+Auckland+1023,+New+Zealand"
            />
          </div>
        </div>
      </main>
    );
  }