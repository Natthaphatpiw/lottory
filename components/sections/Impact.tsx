import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionShell } from "@/components/ui/SectionShell";

const IMPACTS = [
  {
    label: "Time · ลดเวลา",
    num: "60–80%",
    desc: 'Lead time ลดลงในเคสที่เข้าเกณฑ์ auto-clear — จาก "ครึ่งวันถึงหนึ่งวัน" เหลือ "ไม่กี่นาที" ผ่านมือถือ',
    bench: "Benchmark: Ireland MyWelfare 83-98% auto-approve",
  },
  {
    label: "Cost · ลดต้นทุน",
    num: "30–40%",
    desc: "Processing cost ลดลงตามมาตรฐาน IDP — ~3 ล้านบาท/ปี เป็นจุดเริ่มต้นที่ 100K เคส/ปี (เพิ่มเมื่อรวม call center)",
    bench: "Benchmark: IDP industry · payback 12-24 เดือน",
  },
  {
    label: "Efficiency · ประสิทธิภาพ",
    num: "≥ 88%",
    desc: "AI Triage Accuracy ตั้งแต่ MVP · เจ้าหน้าที่จัดการเคสได้ 2-3 เท่าของเดิม · ผู้บริหารเห็น bottleneck แบบวินาที",
    bench: "Benchmark: GOV.UK Chat 88-90% accuracy",
  },
  {
    label: "People · ประโยชน์ต่อสังคม",
    num: "≥ 95%",
    desc: "เคสจากกลุ่มเปราะบางผ่านระบบสำเร็จโดยไม่ต้องเดินทาง · เปิด Accessibility-First Lane สำหรับผู้พิการ ผู้สูงอายุ และ low digital literacy",
    bench: "Benchmark: EY guidance + Estonia model",
  },
  {
    label: "Planet · ลด CO₂",
    num: "~2,500 kg",
    desc: "CO₂ ลดต่อปี (เริ่มต้น) จาก 100K เคส × 5 หน้า/เคส = 500,000 หน้า ลดลง — เมื่อขยาย scale ไปทุก workflow จะเป็นหลักหมื่น",
    bench: "UNCTAD Vanuatu: 2 procedures = 5,827 kg CO₂",
  },
  {
    label: "Trust · ป้องกันทุจริต",
    num: "+ 30%",
    desc: "Detection rate ของเคสที่อาจเป็น fraud หรือผิดปกติ พร้อม signed audit trail ครบทุก decision · Public People-Planet Ledger สิ่งแรกในประเภทนี้สำหรับ national lottery ใน ASEAN",
    bench: "Anomaly detection industry benchmark",
  },
];

export function Impact() {
  return (
    <SectionShell id="impact" background="cream">
      <AnimatedSection>
        <SectionHeader
          sectionTag="Section 10 · Impact & Value"
          title="ผลกระทบและคุณค่าที่วัดได้"
          lede='ทุกตัวเลขมี proof-of-concept จาก deployment ของรัฐบาลชั้นนำของโลกรองรับ ทำให้ผลลัพธ์เหล่านี้ไม่ใช่ "เคลม" แต่เป็น "เป้าหมายที่มีหลักฐานสนับสนุน"'
        />
      </AnimatedSection>

      <StaggerContainer className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {IMPACTS.map((imp) => (
          <StaggerItem key={imp.label}>
            <div className="group relative h-full overflow-hidden border border-ink-200 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg lg:p-7">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-navy-700 via-gold-500 to-maroon-600"
              />
              <div className="text-[11px] font-bold uppercase tracking-widest text-tag">
                {imp.label}
              </div>
              <div className="mt-2 text-[2.125rem] font-bold leading-none tracking-tight text-navy-700">
                {imp.num}
              </div>
              <p className="mt-3 text-[14px] leading-relaxed text-ink-700">
                {imp.desc}
              </p>
              <div className="mt-4 border-t border-ink-200 pt-3 text-[11px] italic text-ink-500">
                {imp.bench}
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionShell>
  );
}
