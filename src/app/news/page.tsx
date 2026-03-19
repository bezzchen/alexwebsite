import Image from "next/image";

export default function News() {
    return (
      <main className="pt-4 bg-white">
        <Image
          src="/images/0.jpg"
          alt="newshero"
          width={1600}
          height={800}
          className="w-full object-cover h-[660px]"
        />
        <div className="pt-8 text-center max-w-4xl mx-auto space-y-8">
          <h1 className="text-6xl">
            NEWS
          </h1>
        </div>
      </main>
    );
  }