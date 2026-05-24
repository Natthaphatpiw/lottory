import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionShell } from "@/components/ui/SectionShell";

const INNOVATIONS = [
  {
    n: "INNOVATION 01",
    t: "Lottery-Aware Responsible-by-Design",
    d: "ฝัง WLA-RGF risk pattern detector เป็น first-class component ในทุก layer — Salesforce Gov Cloud, Microsoft Power Platform, ServiceNow ไม่ทำ เพราะออกแบบเป็น horizontal product",
  },
  {
    n: "INNOVATION 02",
    t: "Accessibility-First Lane",
    d: 'Voice-first ภาษาไทย, audio status update, proxy submitter สำหรับผู้ดูแล — เป็น "ช่องทางเทียบเท่า" ไม่ใช่ "feature เสริม" รองรับผู้พิการ ผู้สูงอายุ low digital literacy',
  },
  {
    n: "INNOVATION 03",
    t: "Process Mining Live Twin",
    d: 'X-ray เส้นทางจริงของเคส — Accenture ค้นพบ 14,000 path ของ requisition ใน SAP Ariba ผ่านวิธีนี้ GLO จะเห็นได้ว่า "เคสตั๋วเสีย" จริง ๆ เดินกี่ทาง',
  },
  {
    n: "INNOVATION 04",
    t: "Public People-Planet Ledger",
    d: 'Publish impact metrics เป็น real-time public dashboard ต่อยอดแนวคิดจาก Allwyn report "Future of Lottery: A Game for Change" สำหรับ operational sustainability',
  },
  {
    n: "INNOVATION 05",
    t: "Auto-Clear with Measured Autonomy",
    d: "เคสง่ายอนุมัติอัตโนมัติเมื่อ confidence สูง risk ต่ำ เคสยากส่ง officer พร้อม AI assist — Ireland MyWelfare ทำได้ 83% (illness) และ 98% (treatment)",
  },
  {
    n: "INNOVATION 06",
    t: "Thai-First Architecture",
    d: "Thai NLP + Thai OCR + Thai voice เป็นแกนการออกแบบ ไม่ใช่ระบบอังกฤษที่แปลไทย — เหมือนที่ Thailand Post พิสูจน์ใน CPTA Digital Post (Tech for Gov 2025)",
  },
];

export function Innovation() {
  return (
    <SectionShell id="innovation" background="white">
      <AnimatedSection>
        <SectionHeader
          sectionTag="Section 7 · Innovation"
          title="นวัตกรรม 7 จุดที่ยังไม่มีคู่แข่งทำพร้อมกัน"
          lede='เทคโนโลยี LLM, OCR, process mining, workflow engine มีคนใช้แล้วทั่วโลก — สิ่งที่ทำให้ TrustFlow ล้ำหน้าคือ "วิธีประกอบเข้าด้วยกันในบริบทเฉพาะของ national lottery ที่ Trust สำคัญที่สุด"'
        />
      </AnimatedSection>

      <StaggerContainer className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {INNOVATIONS.map((i) => (
          <StaggerItem key={i.n}>
            <Card
              number={i.n}
              title={i.t}
              description={i.d}
              variant="gold"
              className="h-full"
            />
          </StaggerItem>
        ))}
      </StaggerContainer>

      <AnimatedSection delay={0.15}>
        <div className="mt-5 relative overflow-hidden border border-maroon-200 border-l-4 border-l-maroon-600 bg-gradient-to-br from-maroon-50 to-white p-7 transition-shadow duration-200 hover:shadow-xl">
          <div className="mb-2 text-[11px] font-bold uppercase tracking-widest text-maroon-600">
            Innovation 07 · Key Differentiator
          </div>
          <h3 className="mb-3 text-xl font-bold leading-snug text-navy-700">
            Trust Stack เป็น Architecture Citizen ไม่ใช่ Add-on
          </h3>
          <p className="text-[15px] leading-relaxed text-ink-700">
            Confidence threshold, human override, signed audit trail, PII masking, red-team test เป็น layer แนวตั้งที่เห็นในสถาปัตยกรรมตั้งแต่หน้าแรก ไม่ใช่ "ติดความปลอดภัยตอนเดือนสุดท้าย" — สอดคล้องกับแนวทาง GOV.UK Chat ที่ใช้ LLM-as-a-judge + red teaming ร่วมกับ AI Security Institute และ NIST AI Risk Management Framework
          </p>
        </div>
      </AnimatedSection>
    </SectionShell>
  );
}
