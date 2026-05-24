import type { ReactNode } from "react";

type Variant = "navy" | "gold" | "maroon" | "slate";

type Props = {
  number?: string;
  title: ReactNode;
  description?: ReactNode;
  tags?: string[];
  variant?: Variant;
  children?: ReactNode;
  className?: string;
};

const barColors: Record<Variant, string> = {
  navy: "bg-navy-700",
  gold: "bg-gold-500",
  maroon: "bg-maroon-600",
  slate: "bg-navy-400",
};

export function Card({
  number,
  title,
  description,
  tags,
  variant = "navy",
  children,
  className = "",
}: Props) {
  return (
    <article
      className={`relative overflow-hidden border border-ink-200 bg-white p-7 transition-shadow duration-200 hover:shadow-lg ${className}`}
    >
      <span
        aria-hidden="true"
        className={`absolute inset-y-0 left-0 w-1 ${barColors[variant]}`}
      />
      {number && (
        <div className="mb-2 text-[11px] font-bold uppercase tracking-widest text-tag">
          {number}
        </div>
      )}
      <h3 className="mb-3 text-[1.05rem] font-bold leading-snug text-navy-700">
        {title}
      </h3>
      {description && (
        <p className="text-sm leading-relaxed text-ink-600">{description}</p>
      )}
      {children}
      {tags && tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-sm border border-ink-200 bg-navy-50 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-navy-600"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
