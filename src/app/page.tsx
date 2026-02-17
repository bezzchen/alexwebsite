import Image from "next/image";
import "./globals.css";
export default function Page() {
    return (
      <main className="pt-16">
        <Image 
          src="/image/0.jpg"
          alt="Hero photo"
          width={100}
          height={40}
        />
      </main>
    );
  }