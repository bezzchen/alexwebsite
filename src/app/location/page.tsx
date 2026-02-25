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
        <div className="flex flex-col text-center gap-y-8 max-w-4xl mx-auto">
          <h1 className="pt-8 text-6xl">
              ALEXANDER INN
          </h1>
          <h2 className="text-3xl text-yellow-500">
            IN THE HEART OF NEWMARKET
          </h2>
          <h2 className="text-3xl">
            Newmarket Accommodation
          </h2>
          <div>
            Alexander Inn is conveniently situated at 21 Alpers Avenue, Newmarket, Auckland Central, New Zealand. Read on for the directions to reach our accommodation by various means of transport. <br /> <br />

            When driving, please note that Alpers Avenue is a one-way street, and is: <br /><br />

            - 1 minute drive from the main arterial route to State Highway 1 and central Auckland City <br />
            - 15 minutes' drive to the central city <br />
            - Enroute to the airport (30 mins drive) <br />
            - 10 minutes' walk to the train station in Newmarket <br />
            - 10 minutes' walk to Auckland’s fashion capital, restaurants, cafes and cinemas <br />
            - 5 min walk to the city link bus system
          </div>
          <h2 className="text-3xl">
            By Car
          </h2>
          <div>
            Quality Suites Alexander Inn is at 21 Alpers Avenue, Newmarket. It is a one-way street, so you will have to enter from the Broadway (southern end) of the road or Manukau Road or Great South Road and we are on the right-hand side of the street. <br /><br />

            From State Highway 1 (Motorway) Heading North <br />
            Exit the motorway at the Market Road <br />
            Turn left at the top of the off ramp following the Epsom sign to traffic lights (100 metres) <br />
            Turn right into Great South Road <br />
            Drive down Great South Road to the next major intersection with lights (about 1km) and drive straight through the lights (with Honda Cars on your right-hand side) and you are now in Alpers Avenue. <br />
            The motel is on the right-hand side of the street, and we have a red coloured sign. <br />
            From State Highway 1 (Motorway) Heading South <br />
            Exit the motorway at Gillies Avenue <br />
            Turn left at bottom of off ramp, and then very first right-hand road into Mortimers Pass <br />
            At the traffic lights at the bottom of Mortimers Pass turn right into Broadway. <br />
            Drive approx 200m. <br />
            Turn right at the traffic lights (Honda should be on your right) into Alpers Avenue <br />
            The motel is on the right-hand side of the street, and we have a red colored sign. <br />
          </div>
          <h2 className="text-3xl">
            By Train
          </h2>
          <div>
            We are 10-minute walk to the Newmarket train station.
          </div>
          <h2 className="text-3xl">
            By Bus
          </h2>
          <div>
            Walk 10 minutes to the Westfield Mall from the motel and you are on the main central city bus loop with leaves every 10 minutes.
            </div>
          <h2 className="text-3xl">
            By Taxi
          </h2>
          <div>
            We are 15-30 minutes from the airport by taxi and about 15 minutes from the city.
          </div>
        </div>
      </main>
    );
  }