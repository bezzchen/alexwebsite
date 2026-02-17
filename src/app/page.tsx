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
      </main>
    );
  }