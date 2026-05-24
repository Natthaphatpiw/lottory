import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const PILLARS = [
  { label: "Pillar หลัก · Process Automation", variant: "primary" as const },
  { label: "Smart Work Automation", variant: "default" as const },
  { label: "Sustainable Eco-Automation", variant: "default" as const },
  { label: "MVP · 2 Workflows · 3 Screens · Trust Stack", variant: "accent" as const },
];

const STATS = [
  { num: "10–12", unit: "ล้าน", label: "ประชาชนผู้ซื้อต่องวด", cite: "GLO public statement" },
  { num: "27", unit: "ล้านใบ", label: "สลากดิจิทัล Paotang", cite: "2025 reported scale" },
  { num: "≥ 88", unit: "%", label: "AI Accuracy Target", cite: "เทียบ GOV.UK Chat" },
  { num: "30–40", unit: "%", label: "ลดต้นทุน Processing", cite: "IDP industry benchmark" },
  { num: "~2,500", unit: "kg", label: "CO₂ ลดต่อปี (เริ่มต้น)", cite: "100K cases × 5 pages" },
];

const DOC_CONTROL = [
  { k: "Reference", v: "TRF-DOC-001" },
  { k: "Revision", v: "v1.0" },
  { k: "Issued", v: "24 พฤษภาคม 2569" },
  { k: "Status", v: "Draft for Review" },
  { k: "Classification", v: "For Internal Review", maroon: true },
  { k: "Owner", v: "Solution Architect" },
];

export function Hero() {
  return (
    <section id="overview" className="relative overflow-hidden border-b border-ink-200 bg-cream pt-16 pb-16 lg:pt-20 lg:pb-20">
      {/* Decorative ornament */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 90% 10%, #0B2545 0%, transparent 40%), radial-gradient(circle at 10% 90%, #B8860B 0%, transparent 40%)",
        }}
      />

      <div className="container-page relative">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_360px] lg:gap-16">
          <AnimatedSection>
            <div className="eyebrow">
              GLO Innovation Challenge 2026 · Solution Reference Document
            </div>
            <h1 className="mt-3 text-balance text-[2.75rem] font-bold leading-[1.05] tracking-tight text-navy-700 md:text-[3.5rem]">
              GLO TrustFlow AI
            </h1>
            <p className="mt-5 max-w-[680px] text-pretty text-[1.2rem] leading-relaxed text-ink-600">
              แพลตฟอร์มจัดการเคสอัจฉริยะของสำนักงานสลากกินแบ่งรัฐบาล — เปลี่ยนเรื่องร้องเรียน คำขอ และเอกสารกระจัดกระจาย ให้กลายเป็นเคสที่ตรวจสอบได้ จัดการอัตโนมัติ และโปร่งใสตั้งแต่บรรทัดแรก
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {PILLARS.map((p) => (
                <span
                  key={p.label}
                  className={`rounded-sm px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide ${
                    p.variant === "primary"
                      ? "border border-navy-700 bg-navy-700 text-white"
                      : p.variant === "accent"
                      ? "border border-gold-500 bg-gold-500 text-navy-700"
                      : "border border-ink-300 bg-white text-navy-700"
                  }`}
                >
                  {p.label}
                </span>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <aside className="border border-ink-200 border-t-[3px] border-t-gold-500 bg-white p-6 text-[12.5px]">
              <div className="mb-4 border-b border-ink-200 pb-3 text-[10px] font-bold uppercase tracking-widest text-tag">
                Document Control
              </div>
              <dl className="space-y-2">
                {DOC_CONTROL.map((row) => (
                  <div
                    key={row.k}
                    className="flex items-center justify-between border-b border-ink-100 pb-1.5 last:border-0"
                  >
                    <dt className="text-ink-500">{row.k}</dt>
                    <dd
                      className={`font-semibold ${
                        row.maroon ? "text-maroon-600" : "text-navy-700"
                      }`}
                    >
                      {row.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </aside>
          </AnimatedSection>
        </div>

        {/* Stat strip */}
        <StaggerContainer className="mt-12 grid grid-cols-2 gap-px overflow-hidden border border-ink-200 bg-ink-200 sm:grid-cols-3 lg:grid-cols-5">
          {STATS.map((s) => (
            <StaggerItem key={s.label}>
              <div className="flex h-full flex-col items-center justify-center bg-white px-4 py-6 text-center transition-colors hover:bg-cream-100">
                <div className="text-[1.875rem] font-bold leading-none tracking-tight text-navy-700">
                  {s.num}
                  {s.unit && (
                    <span className="ml-1 text-gold-500">{s.unit}</span>
                  )}
                </div>
                <div className="mt-2.5 text-[10.5px] font-semibold uppercase tracking-wide text-tag">
                  {s.label}
                </div>
                <div className="mt-1 text-[10px] italic text-ink-500">
                  {s.cite}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
