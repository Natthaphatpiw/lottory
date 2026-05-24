import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionShell } from "@/components/ui/SectionShell";

export function Architecture() {
  return (
    <SectionShell id="architecture" width="wide">
      <AnimatedSection>
        <SectionHeader
          sectionTag="Section 4 · Solution Architecture"
          title="สถาปัตยกรรมระบบ — Layered View"
          lede="TrustFlow ประกอบด้วย 4 layer หลักที่เรียงตามลำดับการประมวลผลของเคส และ Trust Stack ที่เป็น cross-cutting concern ครอบทุกชั้น — ออกแบบแบบ non-invasive overlay ให้เชื่อมต่อกับระบบเดิมของ GLO ผ่าน API contract มาตรฐาน"
        />
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <figure className="border border-ink-200 bg-white p-6 shadow">
          <header className="mb-5 flex items-center justify-between border-b border-ink-200 pb-4">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-widest text-gold-500">
                Figure 1.0 · TRF-ARCH-001
              </div>
              <div className="mt-1 text-[16px] font-bold text-navy-700">
                Solution Architecture — 5-Layer Platform with Cross-Cutting Trust Stack
              </div>
            </div>
            <div className="text-[11px] font-semibold uppercase tracking-widest text-tag">
              Section 3.3
            </div>
          </header>

          <div className="figure-svg-host">
            {/* Using img for the SVG keeps the document portable */}
            <img
              src="/glo-trustflow-architecture.svg"
              alt="GLO TrustFlow AI Solution Architecture — 5 Layer with Trust Stack"
              className="block h-auto w-full"
              loading="lazy"
            />
          </div>

          <figcaption className="mt-4 border-t border-ink-200 pt-3 text-[12px] italic text-ink-500">
            แผนภาพแสดง 5 ชั้นของ TrustFlow Platform — User Channels ด้านบน · Layer 1 Multimodal Intake · Layer 2 AI Reasoning · Layer 3 Case Orchestration · Layer 4 Process Mining + Ledger · Trust Stack เป็น vertical column ทางขวาที่บังคับใช้ในทุกชั้น · GLO Core Systems ด้านล่างที่เชื่อมต่อแบบ non-invasive
          </figcaption>
        </figure>
      </AnimatedSection>
    </SectionShell>
  );
}
