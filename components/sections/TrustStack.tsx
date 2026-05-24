import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionShell } from "@/components/ui/SectionShell";

type Trust = {
  num: string;
  title: string;
  body: string;
  cite: string;
  span?: boolean;
};

const TRUST: Trust[] = [
  {
    num: "TS.01 · CONFIDENCE GATE",
    title: "Confidence Threshold Gates",
    body: "เคสที่ AI confidence ต่ำกว่าเกณฑ์ที่ตั้งไว้ ถูก routed ไปให้เจ้าหน้าที่ทันที — calibrated probability ไม่ใช่แค่ softmax",
    cite: "Pattern reference: Ireland MyWelfare (auto-approve 83–98%)",
  },
  {
    num: "TS.02 · HUMAN OVERRIDE",
    title: "Human Override Always",
    body: "เจ้าหน้าที่สามารถ overrule AI decision ได้ทุกเคส พร้อมเหตุผลที่ถูกบังคับให้ระบุ และถูกบันทึก audit log อย่างสมบูรณ์",
    cite: "Aligned with NIST AI RMF GOVERN-1.2",
  },
  {
    num: "TS.03 · AUDIT TRAIL",
    title: "Immutable Signed Audit Trail",
    body: "ทุก event ถูก sign ดิจิทัลด้วย HSM key และต่อเป็น cryptographic chain — สามารถพิสูจน์ได้ว่าไม่มีการแก้ไขย้อนหลัง",
    cite: "ISO 9001:2015 · WLA-SCS compliant",
  },
  {
    num: "TS.04 · PII MASKING",
    title: "PII Masking Layer",
    body: "เลขประจำตัวประชาชน เลขบัญชี ที่อยู่ ถูก mask ก่อนเข้า LLM ใช้ token-based replacement ที่ reversible ใน secure context",
    cite: "พ.ร.บ. PDPA · Microsoft Presidio / AWS Comprehend",
  },
  {
    num: "TS.05 · RED TEAM",
    title: "Red-Team Test Harness",
    body: "Pre-deployment battery สำหรับ jailbreak + prompt injection + adversarial input — รัน automated ทุก deploy",
    cite: "GOV.UK Chat blocked 508 / 508 attempts · Garak / PyRIT",
  },
  {
    num: "TS.06 · LLM JUDGE",
    title: "LLM-as-a-Judge Monitoring",
    body: "Continuous quality assurance — สุ่ม sample AI response แล้วใช้ second LLM ประเมินคุณภาพเทียบกับ rubric ที่ calibrated กับ human reviewer",
    cite: "Industry best practice · calibrated drift detection",
  },
  {
    num: "TS.07 · WLA-RGF AWARENESS",
    title: "WLA Responsible Gaming Framework Pattern Detector",
    body: "ระบบรู้จัก pattern ที่อาจเข้าข่ายความรับผิดชอบของ lottery operator (self-exclusion, vulnerable user signals, problem gambling indicators) เป็น first-class component ของสถาปัตยกรรม ไม่ใช่ add-on ที่เติมทีหลัง — สถิติของ WLA ปี 2025 ระบุว่า lottery operator ที่ certify WLA-RGF Level 2–4 ขยับจาก 65% (2022) เป็น 84% (2025) สัญญาณว่า operator ที่ไม่ขยับด้านความรับผิดชอบจะกลายเป็นกลุ่มน้อยในไม่ช้า",
    cite: "WLA Responsible Gaming Framework Level 2–4 certification path",
    span: true,
  },
];

export function TrustStack() {
  return (
    <SectionShell id="trust">
      <AnimatedSection>
        <SectionHeader
          sectionTag="Section 6 · Trust Stack Detail"
          title={
            <>
              Trust Stack — 7 องค์ประกอบที่ครอบทุก Layer
            </>
          }
          lede='Trust Stack ไม่ใช่ "ฟีเจอร์ความปลอดภัย" ที่เติมในขั้นตอน production แต่เป็น layer แนวตั้งที่ปรากฏในผังสถาปัตยกรรมตั้งแต่บรรทัดแรกของโค้ด — สอดคล้องกับแนวทาง GOV.UK Chat ที่ใช้ LLM-as-a-judge + manual evaluation + red teaming ร่วมกับ AI Security Institute (AISI) และ NIST AI Risk Management Framework'
        />
      </AnimatedSection>

      <StaggerContainer className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {TRUST.map((t) => (
          <StaggerItem
            key={t.num}
            className={t.span ? "md:col-span-2" : ""}
          >
            <div className="group h-full border border-maroon-200 border-l-4 border-l-maroon-600 bg-maroon-50 p-6 transition-all duration-200 hover:border-l-maroon-700 hover:shadow-lg lg:p-7">
              <div className="mb-2 text-[11px] font-bold uppercase tracking-widest text-maroon-600">
                {t.num}
              </div>
              <h3 className="mb-2 text-[1.05rem] font-bold leading-snug text-navy-700">
                {t.title}
              </h3>
              <p className="text-sm leading-relaxed text-ink-600">{t.body}</p>
              <div className="mt-3 border-t border-dashed border-maroon-200 pt-3 text-[11px] italic text-maroon-600">
                {t.cite}
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionShell>
  );
}
