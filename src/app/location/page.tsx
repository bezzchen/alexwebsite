import { GoogleMapsEmbed } from "@next/third-parties/google" 
export default function Location() {
    return (
      <main className="pt-16">
        <div className="w-full h-[450px] mx-auto overflow-hidden shadow-lg pt-0">
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