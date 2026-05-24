import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Callout } from "@/components/ui/Callout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionShell } from "@/components/ui/SectionShell";

const PAIN_POINTS = [
  {
    num: "PAIN POINT 01",
    title: "Fragmented Intake — ผู้ใช้ต้องเล่าเรื่องเดียวกันซ้ำหลายครั้ง",
    body: 'ประชาชนต้องค้นหาช่องทางที่ถูกต้องด้วยตนเอง สลากชำรุดอีกช่องทาง การร้องเรียนราคาเกินอีกช่องทาง ปัญหาตัวแทนผู้พิการอีกช่องทาง เจ้าหน้าที่ต้อง "ต่อจิ๊กซอ" จากหลายแหล่ง และผู้ใช้รู้สึก "ถูกโยน" ระหว่างหน่วยงานย่อย',
  },
  {
    num: "PAIN POINT 02",
    title: "Manual High-Trust Workflow — งานสำคัญยังต้องเดินทางและทำด้วยมือ",
    body: "การตรวจสอบสลากชำรุด การอายัดสลากหาย การขึ้นรางวัล ยังต้องเดินทางมายื่นที่สำนักงานนนทบุรีในเวลาราชการ ทำให้ผู้ที่อยู่ต่างจังหวัด ผู้สูงอายุ และผู้พิการเสียเปรียบในการเข้าถึงสิทธิที่ตนเองมี",
  },
  {
    num: "PAIN POINT 03",
    title: "Repetitive Staff Work — เจ้าหน้าที่ติดอยู่กับงานที่ AI ทำได้",
    body: "การคัดกรองเอกสาร จัดประเภทเคส จ่ายงาน ติดตามสถานะ และตอบคำถามซ้ำ ๆ กินเวลาเจ้าหน้าที่ที่ควรได้ใช้กับงานที่ต้องใช้วิจารณญาณ — งานวิจัยภาครัฐทั่วโลกพบว่า AI case management ลด case backlog ได้ 50% และลดภาระงานบริหาร 30%",
  },
  {
    num: "PAIN POINT 04",
    title: "Data-Rich, Insight-Poor — มีข้อมูลแต่ผู้บริหารตัดสินใจแบบเดิม",
    body: 'แอป my GLO เก็บราคาขายจริง พิกัดจุดจำหน่าย พฤติกรรมผู้ซื้อไว้แล้ว แต่ข้อมูลยังไม่ถูกแปลงเป็น actionable insight — "ใครขายเกินราคา ที่ไหน เมื่อไหร่ เคสร้องเรียนประเภทไหนเพิ่มขึ้น ทีมไหน SLA ตก" ยังต้องรอรายงานรายเดือนแทนที่จะเห็นทันที',
  },
];

export function ProblemStatement() {
  return (
    <SectionShell id="problem">
      <AnimatedSection>
        <SectionHeader
          sectionTag="Section 2 · Problem Statement"
          title="หลักการและเหตุผล"
          lede="GLO ดำเนินงานในสองมิติพร้อมกัน — เป็นทั้งหน่วยงานบริการสาธารณะที่ให้บริการประชาชนนับสิบล้านคนต่องวด และเป็น national lottery operator ที่ต้องปฏิบัติตามมาตรฐานสากล WLA-SCS และ WLA-RGF ระบบดิจิทัลที่ลงทุนไปแล้วยังไม่ถูกแปลงเป็นประสบการณ์ที่ดีของประชาชนเต็มที่"
        />
      </AnimatedSection>

      <StaggerContainer className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {PAIN_POINTS.map((p) => (
          <StaggerItem key={p.num}>
            <div className="group relative h-full border border-ink-200 border-l-4 border-l-maroon-600 bg-white p-6 transition-all duration-200 hover:border-l-maroon-700 hover:shadow-lg lg:p-7">
              <div className="mb-2 text-[11px] font-bold uppercase tracking-widest text-maroon-600">
                {p.num}
              </div>
              <h3 className="mb-3 text-[1.05rem] font-bold leading-snug text-navy-700">
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed text-ink-600">{p.body}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <AnimatedSection delay={0.1}>
        <Callout label="ทำไมต้องแก้ตอนนี้">
          ปริมาณ interaction ของ GLO กำลังเร่งขึ้นจากสลากดิจิทัล 27 ล้านใบบน Paotang ภาครัฐไทยมี momentum ที่ชัดเจน (Cloud-First, National AI Strategy, Tech for Gov 2025) และเทคโนโลยีพร้อมแล้ว — GOV.UK Chat บน Claude / AWS Bedrock ทำ 90% accuracy ขณะที่ Ireland MyWelfare อนุมัติเคสสวัสดิการอัตโนมัติได้ 83–98%
        </Callout>
      </AnimatedSection>
    </SectionShell>
  );
}
