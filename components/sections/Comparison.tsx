import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionShell } from "@/components/ui/SectionShell";

type Status = "yes" | "partial" | "no";

type Row = {
  feature: string;
  cells: Array<{ status: Status; label?: string }>;
};

const COLUMNS = [
  "Chatbot รัฐทั่วไป",
  "IDP / Document AI",
  "Salesforce Gov Cloud",
  "GLO TrustFlow AI",
];

const ROWS: Row[] = [
  {
    feature: "Multimodal Intake (ภาพ/เสียง/วิดีโอ)",
    cells: [
      { status: "partial", label: "เฉพาะ chat" },
      { status: "partial", label: "เน้นเอกสาร" },
      { status: "partial", label: "ต้อง add-on" },
      { status: "yes", label: "ครบ" },
    ],
  },
  {
    feature: "End-to-end Case Lifecycle",
    cells: [
      { status: "no" },
      { status: "no" },
      { status: "yes", label: "มี" },
      { status: "yes", label: "มี" },
    ],
  },
  {
    feature: "Process Mining ในระบบ",
    cells: [
      { status: "no" },
      { status: "no" },
      { status: "partial", label: "ต้อง partner" },
      { status: "yes", label: "in-box" },
    ],
  },
  {
    feature: "WLA-RGF Risk Awareness",
    cells: [
      { status: "no" },
      { status: "no" },
      { status: "no" },
      { status: "yes", label: "first-class" },
    ],
  },
  {
    feature: "Thai-First (NLP / OCR / Voice)",
    cells: [
      { status: "partial", label: "retrofitted" },
      { status: "partial", label: "retrofitted" },
      { status: "partial", label: "retrofitted" },
      { status: "yes", label: "purpose-built" },
    ],
  },
  {
    feature: "Accessibility-First Lane",
    cells: [
      { status: "no" },
      { status: "no" },
      { status: "partial", label: "optional" },
      { status: "yes", label: "equal channel" },
    ],
  },
  {
    feature: "Public-Facing Impact Ledger",
    cells: [
      { status: "no" },
      { status: "no" },
      { status: "no" },
      { status: "yes", label: "open API" },
    ],
  },
  {
    feature: "Trust Stack เห็นในสถาปัตยกรรม",
    cells: [
      { status: "partial", label: "implicit" },
      { status: "partial", label: "implicit" },
      { status: "partial", label: "implicit" },
      { status: "yes", label: "visible layer" },
    ],
  },
  {
    feature: "Auto-Clear with Measured Autonomy",
    cells: [
      { status: "no" },
      { status: "partial", label: "thresholds" },
      { status: "partial", label: "rule-based" },
      { status: "yes", label: "confidence + risk hybrid" },
    ],
  },
];

function StatusCell({ status, label, isUs }: { status: Status; label?: string; isUs?: boolean }) {
  const baseCls = "inline-flex items-center justify-center gap-1.5 text-[12px]";
  if (status === "yes") {
    return (
      <span className={`${baseCls} font-bold ${isUs ? "text-navy-700" : "text-emerald-700"}`}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
          <polyline points="20 6 9 17 4 12" />
        </svg>
        {label}
      </span>
    );
  }
  if (status === "partial") {
    return (
      <span className={`${baseCls} font-semibold text-gold-600`}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="6" />
        </svg>
        {label}
      </span>
    );
  }
  return (
    <span className={`${baseCls} text-ink-400`}>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="5" y1="12" x2="19" y2="12" />
      </svg>
    </span>
  );
}

export function Comparison() {
  return (
    <SectionShell id="comparison">
      <AnimatedSection>
        <SectionHeader
          sectionTag="Section 7.1 · Competitive Comparison"
          title="เปรียบเทียบกับสิ่งที่มีอยู่ในปัจจุบัน"
        />
      </AnimatedSection>

      <AnimatedSection delay={0.05}>
        <div className="overflow-hidden border border-ink-200 bg-white shadow">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] border-collapse text-[13px]">
              <thead>
                <tr>
                  <th className="bg-navy-700 px-4 py-4 text-left text-[12px] font-semibold uppercase tracking-wide text-white">
                    มิติเปรียบเทียบ
                  </th>
                  {COLUMNS.map((col, i) => {
                    const isUs = i === COLUMNS.length - 1;
                    return (
                      <th
                        key={col}
                        className={`px-3 py-4 text-center text-[12px] font-semibold ${
                          isUs
                            ? "border-l-[3px] border-gold-500 bg-navy-700 text-white"
                            : "border-l border-ink-200 bg-cream-100 text-navy-700"
                        }`}
                      >
                        {col}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row, ri) => (
                  <tr
                    key={row.feature}
                    className={ri % 2 === 0 ? "bg-cream/40" : "bg-white"}
                  >
                    <td className="border-t border-ink-200 bg-cream-100/50 px-4 py-3 font-medium text-navy-700">
                      {row.feature}
                    </td>
                    {row.cells.map((cell, ci) => {
                      const isUs = ci === row.cells.length - 1;
                      return (
                        <td
                          key={ci}
                          className={`border-t border-ink-200 px-3 py-3 text-center ${
                            isUs
                              ? "border-l-[3px] border-l-gold-500 bg-navy-50/50 font-semibold"
                              : "border-l border-ink-200"
                          }`}
                        >
                          <StatusCell status={cell.status} label={cell.label} isUs={isUs} />
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Legend */}
          <div className="flex flex-wrap gap-5 border-t border-ink-200 bg-cream-100 px-4 py-3 text-[11px] text-ink-600">
            <span className="flex items-center gap-1.5">
              <span className="text-emerald-700">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              ทำได้ครบ
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-gold-600">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="6" />
                </svg>
              </span>
              ทำได้บางส่วน / ต้องเสริม
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-ink-400">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </span>
              ไม่รองรับ
            </span>
          </div>
        </div>
      </AnimatedSection>
    </SectionShell>
  );
}
