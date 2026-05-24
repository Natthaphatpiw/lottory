import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionShell } from "@/components/ui/SectionShell";

const CARDS = [
  {
    number: "01 · PROBLEM",
    title: "กระบวนการตรงกลางยังพึ่งแรงงาน",
    description:
      'ขณะที่ "ปลายทาง" เป็นดิจิทัลแล้ว กระบวนการที่เชื่อมประชาชน → เจ้าหน้าที่ → ผู้บริหาร ยังกระจัดกระจาย ตรวจสลากชำรุดต้องมายื่นที่นนทบุรีก่อน 14:00 น. อายัดสลากต้องก่อนวันออกรางวัล ร้องเรียนกระจายหลายช่องทาง',
    variant: "navy" as const,
  },
  {
    number: "02 · SOLUTION",
    title: "ชั้นบริการ 5 Layer + Trust Stack",
    description:
      "Multimodal Intake · AI Triage & Routing · Accessibility-First Lane · Process Mining Live Twin · Trust Stack ที่ครอบทุกชั้น — non-invasive overlay ที่ไม่กระทบ core system ของ GLO",
    variant: "gold" as const,
  },
  {
    number: "03 · OUTCOME",
    title: "People · Process · Planet · Strategic",
    description:
      "ลดเวลาเดินทาง · ลดเคสวนกลับ · Accessibility สำหรับผู้พิการ · ลดต้นทุน 30-40% · เพิ่มความเร็ว 50-70% · audit trail ครบทุก decision · เสริมจุดยืน WLA Level 2-4",
    variant: "maroon" as const,
  },
];

export function ExecutiveSummary() {
  return (
    <SectionShell background="white" id="executive">
      <AnimatedSection>
        <SectionHeader
          sectionTag="Section 1 · Executive Summary"
          title="สรุปแนวคิดโครงการ"
          lede="GLO มีช่องทางดิจิทัลครอบคลุมแล้ว — my GLO, จองคิว, EMS, ระบบดีลเลอร์ — แต่กระบวนการ high-trust workflows ยังต้องเดินทาง กรอกซ้ำ และรอเจ้าหน้าที่ตรวจด้วยมือ TrustFlow คือชั้นบริการอัจฉริยะที่วางทับระบบเดิมโดยไม่รื้อ core system แปลงทุกเคสจากทุกช่องทางเป็น structured case ที่ตรวจสอบได้ จัดประเภทอัตโนมัติ และติดตามได้โปร่งใส"
        />
      </AnimatedSection>

      <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {CARDS.map((c) => (
          <StaggerItem key={c.number}>
            <Card
              number={c.number}
              title={c.title}
              description={c.description}
              variant={c.variant}
              className="h-full"
            />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionShell>
  );
}
