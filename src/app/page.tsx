import Image from "next/image";
import "./globals.css";
export default function Page() {
    return (
      <main>
        <Image 
          src="/images/0.jpg"
          alt="Hero photo"
          width={1600}
          height={900}
          className="w-full h-auto"
        />
        <p>
        Alexander Inn
        IN THE HEART OF NEWMARKET
        Our upmarket rooms and suites located at Newmarket offer high quality modern décor and luxury beds.

        We have quiet rooms with double glazing, marble tiled bathrooms, balconies and sun seats to relax on… a quiet night's sleep… and yet… only a four-minute flat walk from your accommodation to the bustling fashion and shopping capital of Newmarket, Auckland and the many chic cafes and restaurants, just a stroll away.

        Remuera, Epsom, Sky City Casino, Vector Arena, The Museum and Domain, Alexandra Park Raceway, Public Hospitals and Parnell Art Galleries are all a five-minute drive. We are en-route and only 13km from the Auckland International Airport.
        </p>
      </main>
    );
  }