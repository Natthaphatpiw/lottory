import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionShell } from "@/components/ui/SectionShell";

export function Context() {
  return (
    <SectionShell id="context" background="white" width="wide">
      <AnimatedSection>
        <SectionHeader
          sectionTag="Section 4.2 · Solution Context"
          title="ภาพรวมบริบทระบบ — System Context (C4 Level 1)"
          lede="Context diagram ตามมาตรฐาน C4 Model Level 1 แสดงความสัมพันธ์ของ TrustFlow Platform กับ external actors (ประชาชน · ตัวแทน · เจ้าหน้าที่ · ผู้บริหาร · auditor) · interaction channels · governance frameworks ที่บังคับใช้ · และ existing GLO core systems ที่เชื่อมต่อด้วย API"
        />
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <figure className="border border-ink-200 bg-white p-6 shadow">
          <header className="mb-5 flex items-center justify-between border-b border-ink-200 pb-4">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-widest text-gold-500">
                Figure 2.0 · TRF-ARCH-002
              </div>
              <div className="mt-1 text-[16px] font-bold text-navy-700">
                System Context Diagram — TrustFlow Ecosystem View
              </div>
            </div>
            <div className="text-[11px] font-semibold uppercase tracking-widest text-tag">
              Section 3.3.2
            </div>
          </header>

          <div className="figure-svg-host">
            <img
              src="/glo-trustflow-context-diagram.svg"
              alt="GLO TrustFlow AI System Context Diagram (C4 Level 1)"
              className="block h-auto w-full"
              loading="lazy"
            />
          </div>

          <figcaption className="mt-4 border-t border-ink-200 pt-3 text-[12px] italic text-ink-500">
            ภาพแสดง 5 actors (primary &amp; secondary) ด้านบน, 5 interaction channels ฝั่งซ้าย, TrustFlow Platform (system under design) ตรงกลาง, 5 governance frameworks ฝั่งขวาที่ทำหน้าที่บังคับใช้ compliance, และ 5 existing GLO core systems ด้านล่างที่เชื่อมต่อแบบ preserved / integrated ไม่ใช่ replaced
          </figcaption>
        </figure>
      </AnimatedSection>
    </SectionShell>
  );
}
