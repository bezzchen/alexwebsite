"use client";

import { FormEvent, useState } from "react";
import Script from "next/script";

const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
const recaptchaAction = "contact_form";

type Grecaptcha = {
  ready(callback: () => void): void;
  execute(siteKey: string, options: { action: string }): Promise<string>;
};

declare global {
  interface Window {
    grecaptcha?: Grecaptcha;
  }
}

type FormStatus =
  | { state: "idle"; message: "" }
  | { state: "submitting"; message: string }
  | { state: "success"; message: string }
  | { state: "error"; message: string };

const fieldClassName =
  "min-h-12 border border-black/15 bg-stone-50 px-3 outline-none focus:border-black disabled:cursor-not-allowed disabled:opacity-60";

async function getRecaptchaToken() {
  if (!recaptchaSiteKey) {
    throw new Error("Contact form verification is not configured.");
  }

  const grecaptcha = window.grecaptcha;

  if (!grecaptcha) {
    throw new Error("Contact form verification is still loading. Please try again.");
  }

  return new Promise<string>((resolve, reject) => {
    grecaptcha.ready(() => {
      grecaptcha
        .execute(recaptchaSiteKey, { action: recaptchaAction })
        .then(resolve)
        .catch(() => {
          reject(new Error("Contact form verification failed. Please try again."));
        });
    });
  });
}

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>({
    state: "idle",
    message: "",
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus({
      state: "submitting",
      message: "Sending your enquiry…",
    });

    try {
      const recaptchaToken = await getRecaptchaToken();
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          topic: formData.get("topic"),
          message: formData.get("message"),
          website: formData.get("website"),
          recaptchaToken,
        }),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(
          result.message ?? "We could not send your enquiry. Please try again.",
        );
      }

      form.reset();
      setStatus({
        state: "success",
        message:
          result.message ??
          "Your enquiry has been sent. Alexander Inn will reply as soon as possible.",
      });
    } catch (error) {
      setStatus({
        state: "error",
        message:
          error instanceof Error
            ? error.message
            : "We could not send your enquiry. Please try again.",
      });
    }
  }

  const isSubmitting = status.state === "submitting";

  return (
    <>
      {recaptchaSiteKey ? (
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`}
          strategy="afterInteractive"
        />
      ) : null}

      <form
        className="ui-box relative bg-white p-6 md:p-8"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-semibold">Send an enquiry</h2>
        <p className="mt-3 text-sm leading-6 text-black/65">
          Complete the form and reception will reply directly to the email
          address you provide.
        </p>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-[10000px] top-auto h-px w-px overflow-hidden"
        >
          <label>
            Website
            <input
              autoComplete="off"
              name="website"
              tabIndex={-1}
              type="text"
            />
          </label>
        </div>

        <fieldset disabled={isSubmitting}>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium">
              Name
              <input
                autoComplete="name"
                className={fieldClassName}
                maxLength={100}
                minLength={2}
                name="name"
                required
              />
            </label>
            <label className="grid gap-2 text-sm font-medium">
              Email
              <input
                autoComplete="email"
                className={fieldClassName}
                maxLength={254}
                name="email"
                required
                type="email"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium">
              Phone
              <input
                autoComplete="tel"
                className={fieldClassName}
                maxLength={50}
                name="phone"
                type="tel"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium">
              Topic
              <select
                className={fieldClassName}
                defaultValue="booking"
                name="topic"
              >
                <option value="booking">Booking</option>
                <option value="parking">Parking</option>
                <option value="arrival">Arrival</option>
                <option value="general">General enquiry</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm font-medium sm:col-span-2">
              Message
              <textarea
                className={`${fieldClassName} min-h-36 p-3`}
                maxLength={5000}
                minLength={10}
                name="message"
                required
              />
            </label>
          </div>

          <button
            className="mt-6 inline-flex min-h-11 items-center justify-center rounded-lg bg-[var(--gold)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-black shadow-[0_10px_22px_rgba(0,0,0,0.12)] transition hover:bg-[var(--gold-dark)] disabled:cursor-wait disabled:opacity-60"
            type="submit"
          >
            {isSubmitting ? "Sending…" : "Send enquiry"}
          </button>
        </fieldset>

        {status.message ? (
          <p
            aria-live="polite"
            className={`mt-5 rounded-lg px-4 py-3 text-sm ${
              status.state === "error"
                ? "bg-red-50 text-red-800"
                : status.state === "success"
                  ? "bg-green-50 text-green-800"
                  : "bg-stone-100 text-black/70"
            }`}
            role={status.state === "error" ? "alert" : "status"}
          >
            {status.message}
          </p>
        ) : null}
      </form>
    </>
  );
}
