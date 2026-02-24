import { GoogleMapsEmbed } from "@next/third-parties/google" 
export default function Location() {
    return (
      <main className="pt-4">
        <div className="w-full h-[450px] mx-auto overflow-hidden shadow-lg">
          <GoogleMapsEmbed 
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
            height={450}
            width="100%"
            mode="place"
            q="21+Alpers+AvenueEpsom,+Auckland+1023,+New+Zealand"
          />
        </div>
        <h1 className="pt-8 text-6xl">
            ALEXANDER INN
          </h1>
          <h2 className="text-3xl text-yellow-500">
            IN THE HEART OF NEWMARKET
          </h2>
      </main>
    );
  }