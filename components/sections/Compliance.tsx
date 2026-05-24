import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionShell } from "@/components/ui/SectionShell";

const STANDARDS = [
  { name: "ISO 9001:2015", scope: "Quality Management System", apply: "GLO มีอยู่แล้วในกระบวนการพิมพ์ การจ่ายรางวัล การออกรางวัล — TrustFlow audit trail ขยายขอบเขตให้ครอบคลุมเคสจัดการประจำวัน" },
  { name: "ISO 27001", scope: "Information Security Management", apply: "Role-based access control · encryption at rest & in transit · key management ผ่าน HSM" },
  { name: "ISO 14001", scope: "Environmental Management", apply: "GLO มีอยู่แล้ว — People-Planet Ledger สนับสนุน ESG reporting" },
  { name: "WLA-SCS", scope: "Security Control Standard (World Lottery Association)", apply: "Audit trail + access control + change management ผ่าน Trust Stack TS.02 + TS.03" },
  { name: "WLA-RGF Level 2-4", scope: "Responsible Gaming Framework", apply: "TS.07 WLA-RGF Pattern Detector เป็น first-class — รู้จัก self-exclusion, vulnerable user signals, problem gambling indicators" },
  { name: "NIST AI RMF 1.0", scope: "AI Risk Management Framework", apply: "GOVERN-1.2 (human oversight) ผ่าน TS.02 · MEASURE-2.5 (red teaming) ผ่าน TS.05 · MANAGE-2 (incident response) ใน Trust Stack" },
  { name: "OECD AI Principles", scope: "Trustworthy AI", apply: "Transparency, accountability, robustness ผ่าน Trust Stack ทั้ง 7 องค์ประกอบ" },
  { name: "WCAG 2.1 AA", scope: "Web Content Accessibility Guidelines", apply: "Accessibility-First Lane สำหรับผู้พิการ + audit ของ user-facing UI ทุก release" },
  { name: "พ.ร.บ. PDPA", scope: "การคุ้มครองข้อมูลส่วนบุคคล", apply: "TS.04 PII Masking Layer · ตัวเลือก deploy LLM แบบ on-premise หาก GLO กำหนดให้ข้อมูลห้ามออกนอกราชอาณาจักร" },
];

export function Compliance() {
  return (
    <SectionShell id="compliance" background="white">
      <AnimatedSection>
        <SectionHeader
          sectionTag="Section 11 · Compliance & Standards"
          title="มาตรฐานและ Framework ที่บังคับใช้"
          lede="TrustFlow ออกแบบให้สอดคล้องกับมาตรฐานสากลและกฎหมายไทยตั้งแต่บรรทัดแรก ไม่ใช่ retrofit ภายหลัง"
        />
      </AnimatedSection>

      <AnimatedSection delay={0.05}>
        <div className="overflow-hidden border border-ink-200 bg-white shadow">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-[13px]">
              <thead>
                <tr>
                  <th className="w-[24%] bg-navy-700 px-4 py-3.5 text-left text-[11px] font-semibold uppercase tracking-wide text-white">
                    มาตรฐาน
                  </th>
                  <th className="w-[26%] bg-navy-700 px-4 py-3.5 text-left text-[11px] font-semibold uppercase tracking-wide text-white">
                    ขอบเขต
                  </th>
                  <th className="bg-navy-700 px-4 py-3.5 text-left text-[11px] font-semibold uppercase tracking-wide text-white">
                    การบังคับใช้ใน TrustFlow
                  </th>
                </tr>
              </thead>
              <tbody>
                {STANDARDS.map((s, i) => (
                  <tr
                    key={s.name}
                    className={`border-t border-ink-200 transition-colors hover:bg-cream-100 ${
                      i % 2 === 1 ? "bg-cream/30" : "bg-white"
                    }`}
                  >
                    <td className="px-4 py-3.5 align-top font-bold text-navy-700">
                      {s.name}
                    </td>
                    <td className="px-4 py-3.5 align-top text-ink-600">{s.scope}</td>
                    <td className="px-4 py-3.5 align-top text-ink-700">{s.apply}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </AnimatedSection>
    </SectionShell>
  );
}
