import Image from "next/image";
import { ButtonLink } from "@/src/components/ButtonLink";
import { PageHero } from "@/src/components/PageHero";
import { SectionIntro } from "@/src/components/SectionIntro";
import { facilities } from "@/src/lib/site";

const groups = [
  { title: "Guest Essentials", items: facilities.essential },
  { title: "Reception & Access", items: facilities.reception },
  { title: "On Request", items: facilities.onRequest },
  { title: "Check In / Check Out", items: facilities.checkIn },
];

export default function Facilities() {
  return (
    <main>
      <PageHero
        eyebrow="Hotel facilities"
        title="Everything you need for an easy Newmarket stay."
        subtitle="What we offer"
        body="Free Wi-Fi, central Auckland access, serviced rooms, secure entry, reception support, and practical guest extras."
        image="/images/0.jpg"
        imageAlt="Alexander Inn exterior"
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-start md:px-8">
        <div className="lg:sticky lg:top-36">
          <SectionIntro
            eyebrow="Facilities"
            title="Clear details before you arrive."
            body="Check parking, Wi-Fi, reception access, room services, guest extras, and arrival times before your stay."
          />
          <div className="mt-8">
            <ButtonLink href="/contact" variant="ghost">
              Ask a Question
            </ButtonLink>
          </div>
        </div>

        <div className="grid gap-6">
          {groups.map((group) => (
            <section key={group.title} className="ui-box bg-white p-6 md:p-8">
              <h2 className="text-2xl font-semibold">{group.title}</h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-black/68">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[var(--gold)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-2 md:items-center md:px-8">
          <div className="ui-box relative min-h-[420px] bg-black">
            <Image
              src="/images/1.jpg"
              alt="Alexander Inn facilities"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionIntro
              eyebrow="Guest support"
              title="Practical comforts, close to the city."
              body="Daily servicing, Mandarin and English-speaking staff, secure key card access, lift access, and local transport links help keep business and leisure stays straightforward."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {["Free Wi-Fi Broadband 24/7", "Daily room servicing", "Central Auckland access", "Onsite parking subject to availability"].map((item) => (
                <div key={item} className="ui-box-soft border-l-2 border-[var(--gold)] bg-[var(--page-bg)] p-4 text-sm font-medium">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
