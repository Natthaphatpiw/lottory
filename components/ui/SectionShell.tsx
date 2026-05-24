import type { ReactNode } from "react";

type Background = "default" | "white" | "cream" | "dark";
type Width = "page" | "wide";

type Props = {
  id?: string;
  background?: Background;
  width?: Width;
  className?: string;
  children: ReactNode;
};

const bgClasses: Record<Background, string> = {
  default: "bg-cream",
  white: "bg-white",
  cream: "bg-cream-100",
  dark: "bg-darkbg dark-section text-ink-100",
};

export function SectionShell({
  id,
  background = "default",
  width = "page",
  className = "",
  children,
}: Props) {
  return (
    <section
      id={id}
      className={`relative py-20 lg:py-24 ${bgClasses[background]} ${className}`}
    >
      <div className={width === "wide" ? "container-wide" : "container-page"}>
        {children}
      </div>
    </section>
  );
}
