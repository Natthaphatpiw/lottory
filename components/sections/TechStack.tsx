import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionShell } from "@/components/ui/SectionShell";

type Row = {
  code: string;
  component: string;
  tech: string;
  license: string;
  rationale: string;
};

const STACK: Row[] = [
  { code: "L1.01", component: "OCR", tech: "Mistral OCR 3, Azure Document Intelligence, Tesseract", license: "Commercial / Hybrid", rationale: "99.2% accuracy ในปี 2026, รองรับเอกสารราชการไทย" },
  { code: "L1.02", component: "Thai NLP", tech: "PyThaiNLP, WangchanBERTa, Hugging Face Thai models", license: "Open Source", rationale: "Thai-native tokenization และ NER" },
  { code: "L1.03", component: "ASR", tech: "OpenAI Whisper, wav2vec 2.0, Azure Speech", license: "Open / Commercial", rationale: "รองรับ Thai voice และภาษาถิ่น" },
  { code: "L1.04", component: "Computer Vision", tech: "YOLOv8, OpenCV, custom CNN", license: "Open Source", rationale: "ตรวจสอบความถูกต้องของภาพสลาก" },
  { code: "L2.01", component: "LLM", tech: "Claude (Anthropic API / AWS Bedrock), Llama 3, Mistral", license: "Commercial / Open", rationale: "GOV.UK Chat ใช้ Claude pattern เดียวกัน 90% accuracy" },
  { code: "L2.02", component: "Vector Database", tech: "pgvector, Pinecone, Weaviate, Qdrant", license: "Open / Commercial", rationale: "pgvector ใช้ PostgreSQL ที่ทีม IT คุ้นเคย" },
  { code: "L2.02", component: "RAG Framework", tech: "LangChain, LlamaIndex", license: "Open Source", rationale: "Industry standard มี ecosystem ใหญ่" },
  { code: "L3.01", component: "Workflow Engine", tech: "Camunda 8, Temporal, Apache Airflow", license: "Open Source", rationale: "Battle-tested in enterprise workflow orchestration" },
  { code: "L4.01", component: "Process Mining", tech: "ProM, Apromore, Celonis", license: "Open / Commercial", rationale: "Accenture-validated สำหรับ enterprise scale" },
  { code: "L4.02", component: "Anomaly Detection", tech: "scikit-learn, PyOD, custom models", license: "Open Source", rationale: "Time-series + clustering บนข้อมูล my GLO" },
  { code: "L4.03", component: "Dashboard", tech: "Grafana, Metabase, Power BI", license: "Open / Commercial", rationale: "Self-service analytics สำหรับผู้บริหาร" },
  { code: "TS.03", component: "Audit Signing", tech: "HashiCorp Vault, AWS KMS, custom HSM", license: "Open / Commercial", rationale: "Cryptographic signing ที่ผ่าน ISO 27001 audit" },
  { code: "TS.04", component: "PII Detection", tech: "Microsoft Presidio, AWS Comprehend", license: "Open / Commercial", rationale: "PDPA-compliant masking ก่อนเข้า LLM" },
  { code: "TS.05", component: "Red-Team Tools", tech: "Garak, PyRIT, custom prompt battery", license: "Open Source", rationale: "Automated jailbreak + injection testing" },
];

export function TechStack() {
  return (
    <SectionShell id="tech" background="white">
      <AnimatedSection>
        <SectionHeader
          sectionTag="Section 8 · Technology Stack"
          title="เทคโนโลยีที่เลือกใช้ในแต่ละ Layer"
          lede="เลือก stack ที่ industry-standard และ proven in production แทน proprietary stack ที่ผูกขาด — ทุก component มี fallback / alternative provider เพื่อลดความเสี่ยง vendor lock-in"
        />
      </AnimatedSection>

      <AnimatedSection delay={0.05}>
        <div className="overflow-hidden border border-ink-200 bg-white shadow">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[860px] border-collapse text-[13px]">
              <thead>
                <tr>
                  <th className="w-[8%] bg-navy-700 px-4 py-3.5 text-left text-[11px] font-semibold uppercase tracking-wide text-white">Layer</th>
                  <th className="w-[20%] bg-navy-700 px-4 py-3.5 text-left text-[11px] font-semibold uppercase tracking-wide text-white">Component</th>
                  <th className="w-[32%] bg-navy-700 px-4 py-3.5 text-left text-[11px] font-semibold uppercase tracking-wide text-white">Technology Options</th>
                  <th className="w-[14%] bg-navy-700 px-4 py-3.5 text-left text-[11px] font-semibold uppercase tracking-wide text-white">Licensing</th>
                  <th className="bg-navy-700 px-4 py-3.5 text-left text-[11px] font-semibold uppercase tracking-wide text-white">Rationale</th>
                </tr>
              </thead>
              <tbody>
                {STACK.map((r, i) => (
                  <tr
                    key={`${r.code}-${r.component}-${i}`}
                    className={`border-t border-ink-200 transition-colors hover:bg-cream-100 ${
                      i % 2 === 1 ? "bg-cream/30" : "bg-white"
                    }`}
                  >
                    <td className="px-4 py-3.5 align-top">
                      <span className="rounded-sm bg-navy-50 px-1.5 py-0.5 font-mono text-[11px] font-medium text-navy-700">
                        {r.code}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 align-top font-semibold text-navy-700">{r.component}</td>
                    <td className="px-4 py-3.5 align-top text-ink-700">{r.tech}</td>
                    <td className="px-4 py-3.5 align-top text-ink-600">{r.license}</td>
                    <td className="px-4 py-3.5 align-top text-ink-600">{r.rationale}</td>
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
