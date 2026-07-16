import Link from "next/link";
import { AmenityIcon } from "@/src/components/AmenityIcon";
import { ButtonLink } from "@/src/components/ButtonLink";
import { PageHero } from "@/src/components/PageHero";
import { SectionIntro } from "@/src/components/SectionIntro";
import { contactDetails } from "@/src/lib/site";
import { createMetadata, seoPages } from "@/src/lib/seo";

export const metadata = createMetadata(seoPages.privacy);

const policySections = [
  {
    title: "Information we collect",
    body: [
      "When you contact Alexander Inn through this website, we collect the details you choose to provide, such as your name, email address, phone number, enquiry topic, message, and any booking or arrival information you include.",
      "We also receive technical information needed to operate and protect the website, such as basic device, browser, security, and usage signals from services including Google reCAPTCHA, Google Analytics, Google Maps, and our hosting provider.",
    ],
  },
  {
    title: "How we use information",
    body: [
      "We use personal information to respond to enquiries, support direct booking conversations, manage arrival or parking questions, protect the contact form from spam and abuse, maintain website performance, and improve the information shown on the site.",
      "We do not sell personal information. We only use it for hotel, guest support, security, website operation, and legal or administrative purposes that are reasonably connected with your enquiry or visit.",
    ],
  },
  {
    title: "Who may receive information",
    body: [
      "Contact form submissions are sent to Alexander Inn reception email recipients using our email provider, Resend. Google services may process technical information when reCAPTCHA, Analytics, or Maps are loaded or used.",
      "If you follow an online booking link, you may leave this website and use a third-party booking service. Information you provide to that service is handled under that provider's own terms and privacy policy.",
    ],
  },
  {
    title: "Storage, security, and retention",
    body: [
      "We take reasonable steps to keep personal information secure and limit access to staff or service providers who need it for the purposes described in this policy.",
      "We keep enquiry information only for as long as it is reasonably needed for guest communication, booking support, business records, dispute handling, legal obligations, and website security.",
    ],
  },
  {
    title: "Access and correction",
    body: [
      "You may ask us to confirm whether we hold personal information about you, request access to that information, or ask us to correct it if it is inaccurate.",
      "To make a privacy request, contact Alexander Inn using the contact page, phone numbers, or postal address listed on this website. We may need to verify your identity before responding.",
    ],
  },
  {
    title: "Policy updates",
    body: [
      "We may update this policy when our website, service providers, booking process, or privacy obligations change. The latest version will be published on this page.",
    ],
  },
];

const thirdPartyLinks = [
  {
    label: "Google Privacy & Terms",
    href: "https://policies.google.com/privacy",
  },
  {
    label: "Resend Privacy Policy",
    href: "https://resend.com/legal/privacy-policy",
  },
];

export default function Privacy() {
  return (
    <main>
      <PageHero
        eyebrow="Privacy"
        title="Privacy Policy."
        subtitle="How website information is handled."
        body="This policy explains how Alexander Inn collects, uses, stores, and protects personal information submitted through this website."
        image="/images/5.jpg"
        imageAlt="Alexander Inn guest room"
      />

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <aside className="lg:sticky lg:top-36">
            <SectionIntro
              eyebrow="Last updated"
              title="15 July 2026."
              body="Alexander Inn is based in Newmarket, Auckland, New Zealand. This policy is intended for guests and website visitors."
            />
            <div className="ui-box-soft mt-8 border-l-2 border-[var(--gold)] bg-white p-5 text-sm leading-6 text-black/68" data-reveal>
              <div className="flex gap-3">
                <AmenityIcon label={contactDetails.address} />
                <p>
                  {contactDetails.name}
                  <br />
                  {contactDetails.address}
                </p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/contact" variant="secondary">
                Contact Us
              </ButtonLink>
            </div>
          </aside>

          <div className="grid gap-5">
            {policySections.map((section) => (
              <article key={section.title} className="ui-box bg-white p-6 md:p-8" data-reveal>
                <h2 className="text-2xl font-semibold">{section.title}</h2>
                <div className="mt-5 space-y-4 text-sm leading-7 text-black/68">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}

            <article className="ui-box bg-black p-6 text-white md:p-8" data-reveal>
              <h2 className="text-2xl font-semibold">Related privacy links</h2>
              <div className="mt-5 grid gap-3 text-sm text-white/68 sm:grid-cols-2">
                {thirdPartyLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-lg border border-white/10 px-4 py-3 transition hover:border-[var(--gold)] hover:text-white"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
