import type { ReactNode } from "react";

type Props = {
  label?: string;
  children: ReactNode;
};

export function Callout({ label, children }: Props) {
  return (
    <aside className="my-8 border-l-4 border-gold-500 bg-cream-100 px-6 py-5 text-[14px] leading-relaxed text-navy-700">
      {label && (
        <span className="font-bold text-navy-700">{label}: </span>
      )}
      <span className="text-ink-700">{children}</span>
    </aside>
  );
}
