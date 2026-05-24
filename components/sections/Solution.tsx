import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionShell } from "@/components/ui/SectionShell";

const PERSONAS = [
  {
    number: "PERSONA 01",
    title: "ฝั่งประชาชน / ตัวแทน",
    body: "เข้าผ่านช่องทางใดก็ได้ — เว็บ GLO, my GLO, LINE OA, call center — ระบบทักทายและสอบถามด้วยภาษาไทยธรรมชาติ รับข้อมูล multimodal (ภาพ/เสียง/พิมพ์) ตรวจความสมบูรณ์ทันที ออกเลขเคสและ ETA อัปเดต status real-time",
    variant: "navy" as const,
    tags: ["Mobile-first", "Voice-enabled", "Multimodal"],
  },
  {
    number: "PERSONA 02",
    title: "ฝั่งเจ้าหน้าที่ GLO",
    body: 'เห็นเคสที่จัดลำดับความสำคัญแล้ว พร้อม AI Co-pilot Panel ที่แสดง: ข้อมูลสกัดจากเอกสาร · confidence score ของ AI · คำแนะนำขั้นถัดไป · ปุ่ม "เห็นด้วย / แก้ไข / Escalate" ที่ทุกการกดถูกบันทึก audit log',
    variant: "gold" as const,
    tags: ["AI Co-pilot", "Confidence-aware", "Audited"],
  },
  {
    number: "PERSONA 03",
    title: "ฝั่งผู้บริหาร GLO",
    body: "Dashboard pipeline สดของทุกเคส · Process Mining View ที่โชว์เส้นทางจริง vs ที่ออกแบบไว้ · Anomaly Alerts สำหรับเคสผิดปกติ · People-Planet Ledger ที่เปิดเผยต่อสาธารณะ — กระดาษประหยัด, CO₂ ลด, เวลาคืน",
    variant: "maroon" as const,
    tags: ["Real-time KPI", "Process Mining", "Public Ledger"],
  },
];

export function Solution() {
  return (
    <SectionShell background="cream" id="solution">
      <AnimatedSection>
        <SectionHeader
          sectionTag="Section 3 · Proposed Solution"
          title="รายละเอียดโซลูชันและนวัตกรรม"
          lede='GLO TrustFlow AI คือแพลตฟอร์มจัดการเคสอัจฉริยะแบบ end-to-end ที่ทำหน้าที่เป็น "ชั้นบริการ" (service layer) วางทับระบบเดิมของ GLO โดยไม่ต้องรื้อ core system ต่างจาก chatbot ทั่วไปที่ตอบคำถามได้แต่ไม่จัดการเคสจริง — TrustFlow ทำงานครบวงจรตั้งแต่ผู้ใช้กดส่งเรื่องครั้งแรก จนถึงการปิดเคสและรายงานผลในระดับองค์กร'
        />
      </AnimatedSection>

      <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {PERSONAS.map((p) => (
          <StaggerItem key={p.number}>
            <Card
              number={p.number}
              title={p.title}
              description={p.body}
              variant={p.variant}
              tags={p.tags}
              className="h-full"
            />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionShell>
  );
}
