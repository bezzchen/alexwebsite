import Image from "next/image";

export default function News() {
    return (
      <main className="pt-4">
        <Image
          src="/images/0.jpg"
          alt="newshero"
          width={1600}
          height={800}
          className="w-full object-cover h-[640px]"
        />
        <h1 className="text-4xl">
          NEWS
        </h1>
      </main>
    );
  }