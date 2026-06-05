import Image from "next/image";
import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  body?: string;
  image: string;
  imageAlt: string;
  priority?: boolean;
  children?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  subtitle,
  body,
  image,
  imageAlt,
  priority = false,
  children,
}: PageHeroProps) {
  return (
    <section className="relative isolate min-h-[560px] overflow-hidden bg-black text-white md:min-h-[690px]">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/78 via-black/42 to-black/8" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/55 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[560px] w-full max-w-7xl flex-col justify-end px-5 pb-8 pt-28 md:min-h-[690px] md:px-8 md:pb-10">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--gold)]">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="max-w-full break-words text-[2.65rem] font-semibold leading-[1.02] sm:text-5xl md:max-w-4xl md:text-7xl">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-5 text-xl font-medium text-white/90 md:text-3xl">
              {subtitle}
            </p>
          ) : null}
          {body ? (
            <p className="mt-5 max-w-[20rem] break-words text-base leading-8 text-white/82 sm:max-w-full md:max-w-2xl md:text-lg">
              {body}
            </p>
          ) : null}
        </div>
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}
