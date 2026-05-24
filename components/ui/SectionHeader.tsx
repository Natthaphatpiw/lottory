import type { ReactNode } from "react";

type Props = {
  sectionTag: string;
  title: ReactNode;
  lede?: ReactNode;
  dark?: boolean;
};

export function SectionHeader({ sectionTag, title, lede, dark }: Props) {
  return (
    <header className="mb-12 max-w-[920px]">
      <div className="section-tag">{sectionTag}</div>
      <h2
        className={`mt-4 text-3xl font-bold leading-tight tracking-tight md:text-[2rem] ${
          dark ? "text-ink-50" : "text-navy-700"
        }`}
      >
        {title}
      </h2>
      {lede && (
        <p
          className={`mt-4 text-[1.05rem] leading-relaxed ${
            dark ? "text-ink-400" : "text-ink-600"
          }`}
        >
          {lede}
        </p>
      )}
    </header>
  );
}
