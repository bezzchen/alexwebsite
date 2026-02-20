import Image from "next/image";
import "./globals.css";
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
        <div className="flex flex-col gap-y-8">
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
        <div className="max-w-6xl h-[450px] mx-auto rounded-4xl overflow-hidden shadow-lg">
          <GoogleMapsEmbed 
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
            height={450}
            width="100%"
            mode="place"
            q="21+Alpers+AvenueEpsom,+Auckland+1023,+New+Zealand"
          />
        </div>
      </main>
    );
  }