"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  chart: string;
  id: string;
};

let mermaidInitPromise: Promise<typeof import("mermaid").default> | null = null;

function loadMermaid() {
  if (!mermaidInitPromise) {
    mermaidInitPromise = import("mermaid").then((mod) => {
      const m = mod.default;
      m.initialize({
        startOnLoad: false,
        securityLevel: "loose",
        theme: "base",
        themeVariables: {
          fontFamily:
            "'IBM Plex Sans Thai', 'IBM Plex Sans', system-ui, sans-serif",
          fontSize: "14px",
          background: "#131F33",
          primaryColor: "#1F2937",
          primaryTextColor: "#F1F5F9",
          primaryBorderColor: "#475569",
          lineColor: "#94A3B8",
          secondaryColor: "#13315C",
          tertiaryColor: "#0F1E33",
          actorBkg: "#1F2937",
          actorBorder: "#475569",
          actorTextColor: "#F1F5F9",
          actorLineColor: "#94A3B8",
          signalColor: "#CBD5E0",
          signalTextColor: "#F1F5F9",
          labelBoxBkgColor: "#13315C",
          labelBoxBorderColor: "#475569",
          labelTextColor: "#FFFFFF",
          loopTextColor: "#F1F5F9",
          noteBkgColor: "#374151",
          noteTextColor: "#F1F5F9",
          noteBorderColor: "#6B7280",
          altBackground: "#1A2D45",
          activationBkgColor: "#475569",
          activationBorderColor: "#94A3B8",
        },
        sequence: {
          diagramMarginX: 36,
          diagramMarginY: 20,
          actorMargin: 56,
          width: 160,
          height: 50,
          boxMargin: 12,
          boxTextMargin: 8,
          noteMargin: 12,
          messageMargin: 36,
          mirrorActors: true,
          bottomMarginAdj: 4,
          useMaxWidth: true,
        },
      });
      return m;
    });
  }
  return mermaidInitPromise;
}

export function MermaidDiagram({ chart, id }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>("");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    let mounted = true;
    loadMermaid()
      .then(async (mermaid) => {
        try {
          const { svg } = await mermaid.render(`m-${id}`, chart);
          if (mounted) setSvg(svg);
        } catch (e) {
          if (mounted) setError(e instanceof Error ? e.message : String(e));
        }
      })
      .catch((e) => {
        if (mounted) setError(e instanceof Error ? e.message : String(e));
      });
    return () => {
      mounted = false;
    };
  }, [chart, id]);

  if (error) {
    return (
      <div className="rounded-sm border border-maroon-700 bg-maroon-700/20 p-4 text-xs text-maroon-100">
        Mermaid render error: {error}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="mermaid-host w-full overflow-x-auto"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
