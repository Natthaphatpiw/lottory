import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionShell } from "@/components/ui/SectionShell";

const TH = [
  { t: "Lert-Na (สำนักงาน ก.พ.ร.)", d: "ชนะ Efficiency Category ของ Tech for Gov 2025 — AI ช่วยคัดกรองเอกสารส่งประกวด" },
  { t: "CPTA Digital Post (ไปรษณีย์ไทย)", d: "ได้รางวัล Experience Category Tech for Gov 2025 — AI Document Intelligence สำหรับเอกสารไทย" },
  { t: "AI-Din (กรมที่ดิน)", d: "Grand Prize Winner ของ Tech for Gov 2025" },
  { t: "DGA Citizen Impact Excellence", d: "ได้รางวัล AWS Public Sector Day 2025" },
];

const INTL = [
  { t: "GOV.UK Chat (UK Government Digital Service)", d: "ใช้ Claude บน AWS Bedrock — 90% accuracy · 88% answer rate · block jailbreak 508/508 · ผู้ใช้ 73% บอกว่ามีประโยชน์ · 64% พอใจ" },
  { t: "Ireland MyWelfare", d: "Auto-approve illness benefit 83% · treatment benefit 98% — pattern หลักของ TrustFlow Auto-Clear" },
  { t: "Estonia e-Government", d: "99% บริการรัฐเป็นดิจิทัล — ประชาชนประหยัดเวลารวม 800 ปี/ปี · บริการรัฐระดับ digital-first" },
  { t: "Vanuatu e-Single Window (UNCTAD)", d: "Paperless trade — ลด 2 procedures = ลด CO₂ 5,827 กิโลกรัม · proof-point สำหรับ People-Planet Ledger" },
];

function PrecedentList({
  title,
  items,
  accent,
}: {
  title: string;
  items: { t: string; d: string }[];
  accent: "navy" | "gold";
}) {
  const accentCls = accent === "gold" ? "bg-gold-500" : "bg-navy-700";
  return (
    <div>
      <h3 className="mb-4 text-base font-bold uppercase tracking-wider text-gold-500">
        {title}
      </h3>
      <ul className="space-y-3">
        {items.map((it) => (
          <li
            key={it.t}
            className="group relative overflow-hidden border border-ink-200 bg-white p-5 transition-all duration-200 hover:border-l-gold-500 hover:shadow-md"
          >
            <span
              aria-hidden="true"
              className={`absolute inset-y-0 left-0 w-1 ${accentCls}`}
            />
            <h4 className="mb-1.5 text-[15px] font-bold text-navy-700">{it.t}</h4>
            <p className="text-[13px] leading-relaxed text-ink-600">{it.d}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Precedents() {
  return (
    <SectionShell id="precedents">
      <AnimatedSection>
        <SectionHeader
          sectionTag="Section 12 · References & Precedents"
          title="Precedent ที่อ้างอิง"
          lede='TrustFlow ไม่ใช่ "นวัตกรรมในห้องวิจัย" — เป็นการประกอบเทคโนโลยีที่มีคนใช้งานจริงระดับ production ทั่วโลก'
        />
      </AnimatedSection>

      <StaggerContainer className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
        <StaggerItem>
          <PrecedentList title="ในประเทศไทย" items={TH} accent="navy" />
        </StaggerItem>
        <StaggerItem>
          <PrecedentList title="ในต่างประเทศ" items={INTL} accent="gold" />
        </StaggerItem>
      </StaggerContainer>
    </SectionShell>
  );
}
