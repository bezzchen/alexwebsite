type SectionIntroProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
};

export function SectionIntro({
  eyebrow,
  title,
  body,
  align = "left",
}: SectionIntroProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} data-reveal-group>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold-dark)]" data-reveal>
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-4xl font-semibold leading-tight text-black md:text-5xl" data-reveal>
        {title}
      </h2>
      {body ? (
        <p className="mt-5 text-base leading-8 text-black/68 md:text-lg" data-reveal>{body}</p>
      ) : null}
    </div>
  );
}
