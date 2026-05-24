import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Callout } from "@/components/ui/Callout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionShell } from "@/components/ui/SectionShell";

const PHASES = [
  {
    n: "PHASE 01 · DISCOVERY & ALIGNMENT",
    title: "สัมภาษณ์ผู้มีส่วนได้ส่วนเสีย + รวบรวมตัวอย่างจริง",
    body: "สัมภาษณ์ผู้มีส่วนได้ส่วนเสีย 10-15 คน (เจ้าหน้าที่บริการ ตัวแทนจำหน่าย ผู้ซื้อ ผู้พิการ) + รวบรวมเอกสารตัวอย่างจริง (รูปสลากชำรุด ฟอร์มร้องเรียน บันทึก call center) เพื่อใช้เทรน OCR และ classification ทำ workflow mapping ของ Workflow A & B",
  },
  {
    n: "PHASE 02 · ARCHITECTURE & UX DESIGN",
    title: "ออกแบบสถาปัตยกรรม 5 layer + 3 หน้าจอ",
    body: "ออกแบบสถาปัตยกรรมตาม 5 layers · เลือก concrete tech stack (Claude API, OCR provider, vector DB, workflow engine) · ออกแบบ wireframe สำหรับ 3 หน้าจอ (user/staff/manager) · ตั้ง schema ของ event log สำหรับ audit trail · กำหนด contract ของ People-Planet Ledger API",
  },
  {
    n: "PHASE 03 · BUILD CORE STACK",
    title: "สร้าง Layer 1-3 แบบ thin vertical slice",
    body: "Multimodal intake → AI triage → case orchestration ใช้ open-source workflow engine (Camunda / Temporal) และ Claude + RAG สำหรับ AI brain — พัฒนาแบบ vertical slice (Workflow A ครบทั้ง pipeline ก่อน) แล้วค่อยขยายไป Workflow B เพื่อลดความเสี่ยง",
  },
  {
    n: "PHASE 04 · BUILD DASHBOARD & LEDGER",
    title: "Manager dashboard + Public People-Planet Ledger",
    body: 'สร้าง manager dashboard ที่แสดง pipeline สด, SLA, anomaly และ People-Planet Ledger สำหรับ data ใช้แบบผสม (live จาก prototype + synthetic ที่ใกล้เคียง production load) เพื่อให้เห็นภาพ "ระบบเดินที่ scale จริง"',
  },
  {
    n: "PHASE 05 · TRUST STACK INTEGRATION & TESTING",
    title: "เพิ่ม Trust Stack เข้าทุก layer + Red-team test",
    body: "เพิ่ม confidence threshold, human override UI, PII masking, signed audit trail · Red-team test (jailbreak / prompt injection) ตาม pattern GOV.UK Chat (508/508 blocked) · LLM-as-a-judge เพื่อวัด accuracy baseline · Accessibility audit (WCAG 2.1 AA)",
  },
  {
    n: "PHASE 06 · PILOT, REFINE & DEMO PREP",
    title: "ทดสอบกับผู้ใช้จริง + เตรียม demo",
    body: "ทดสอบกับผู้ใช้จริง 5-10 คน (proxy users สำหรับ workflow ที่อ่อนไหว) · เก็บ feedback แล้ว iterate · ทำสคริปต์เดโม่ + อัด backup demo video · ทำ pitch deck ฉบับสุดท้าย · เตรียม Q&A สำหรับกรรมการ",
  },
];

export function Implementation() {
  return (
    <SectionShell id="plan">
      <AnimatedSection>
        <SectionHeader
          sectionTag="Section 9 · Implementation Plan"
          title="แผนการพัฒนาต้นแบบ — 6 เฟส"
          lede='ใช้แนวทาง "Demo-First, Trust-First" — ทุกบรรทัดของโค้ดถามตัวเองว่า "สไลด์เดโม่จะใช้สิ่งนี้ไหม" และ "ผ่าน Trust Stack หรือยัง" เพื่อหลีกเลี่ยงปัญหาที่ MIT NANDA State of AI in Business 2025 ระบุว่ามีเพียง ~5% ของ enterprise GenAI pilots ที่สร้าง impact วัดได้ระดับ operational'
        />
      </AnimatedSection>

      <StaggerContainer>
        <div className="relative pl-10">
          {/* Vertical line */}
          <div
            aria-hidden="true"
            className="absolute left-[14px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-gold-500 via-gold-400 to-gold-300"
          />

          {PHASES.map((phase, idx) => (
            <StaggerItem key={phase.n}>
              <div className="relative pb-8 pl-6">
                {/* Node marker */}
                <div className="absolute -left-[26px] top-3 flex h-7 w-7 items-center justify-center rounded-full border-[3px] border-gold-500 bg-white text-[10px] font-bold text-navy-700 shadow">
                  {String(idx + 1).padStart(2, "0")}
                </div>

                <div className="border border-ink-200 bg-white p-5 shadow-sm transition-all duration-200 hover:border-gold-200 hover:shadow-md lg:p-6">
                  <div className="mb-1.5 text-[11px] font-bold uppercase tracking-widest text-gold-500">
                    {phase.n}
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-navy-700">
                    {phase.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-ink-600">
                    {phase.body}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </div>
      </StaggerContainer>

      <AnimatedSection delay={0.1}>
        <Callout label="หลักการตลอดทุกเฟส">
          Modular &amp; cloud-native (ทุก layer deploy แยกได้บน AWS หรือ private cloud) · Iterate-to-90 mindset (GOV.UK Chat เริ่ม 76% → 90% ผ่านการ iterate) · Mock-first, real-second · Fallback plans สำหรับทุก component สำคัญ
        </Callout>
      </AnimatedSection>
    </SectionShell>
  );
}
