import { AnimatedSection } from "@/components/AnimatedSection";
import { MermaidDiagram } from "@/components/MermaidDiagram";
import { SectionHeader } from "@/components/ui/SectionHeader";

type Flow = {
  id: string;
  label: string;
  title: string;
  ref: string;
  desc: string;
  chart: string;
};

const FLOWS: Flow[] = [
  {
    id: "seq-001",
    label: "Figure 3.1 · TRF-SEQ-001",
    title: "Workflow A — สลากชำรุดพรีเช็ก (Auto-Triage End-to-End)",
    ref: "Section 3.2.1",
    desc: "เคสที่ประชาชนส่งภาพสลากชำรุดเข้ามา ระบบจะตรวจความสมบูรณ์ของภาพ สกัดข้อมูล ประเมิน confidence แล้วแยกเส้นทางออกเป็น 2 branch — auto-clear สำหรับเคสง่าย หรือส่งให้เจ้าหน้าที่พิจารณาพร้อม AI Co-pilot Panel",
    chart: `sequenceDiagram
    autonumber
    actor Citizen as ประชาชน
    participant CH as Channel<br/>(my GLO / LINE)
    participant L1 as L1 Multimodal Intake
    participant L2 as L2 AI Reasoning
    participant TS as TS Trust Stack
    participant L3 as L3 Orchestration
    actor Officer as เจ้าหน้าที่ GLO
    participant L4 as L4 Public Ledger

    Citizen->>CH: ส่งภาพสลากชำรุด + เหตุผล
    CH->>L1: forward multimodal input
    L1->>L1: OCR สกัดเลขเซต/งวด<br/>Vision ตรวจความสมบูรณ์

    alt ภาพไม่สมบูรณ์
        L1-->>Citizen: ขอภาพมุมที่ขาดเพิ่ม
        Citizen->>CH: ส่งภาพชุดใหม่
    end

    L1->>L2: structured payload
    L2->>L2: classify case + RAG retrieve<br/>compute confidence score
    L2->>TS: confidence gate check

    alt Confidence ≥ 0.90 + Risk Low
        TS-->>L3: auto-approve
        L3-->>Citizen: แจ้งผล + เลขเคส + ETA
        L3->>L4: log impact metrics
    else Confidence < 0.90 หรือ Risk Mid+
        TS-->>L3: route to officer
        L3->>Officer: queue + AI Co-pilot Panel
        Officer->>Officer: review + decide
        Officer->>TS: log decision + reason
        TS->>L3: signed audit trail
        L3-->>Citizen: แจ้งผล + เลขเคส
        L3->>L4: log impact + accessibility
    end

    Note over L4: Public REST API publishes real-time:<br/>CO₂ saved · time returned · accessibility cases`,
  },
  {
    id: "seq-002",
    label: "Figure 3.2 · TRF-SEQ-002",
    title: "Knowledge Base Ingestion (RAG Setup)",
    ref: "Section 3.3 · L2.02",
    desc: "Pipeline สำหรับสร้าง vector knowledge base จากระเบียบ GLO, FAQ และเคสในอดีต — เอกสารถูก extract, normalize, chunk พร้อม overlap แล้ว embed ก่อนเก็บใน PostgreSQL+pgvector ใช้สำหรับ RAG retrieval ของ L2 AI Reasoning",
    chart: `sequenceDiagram
    autonumber
    actor Admin as Admin (GLO)
    participant API
    participant Loader
    participant Embedder
    participant DB as PostgreSQL+pgvector

    Admin->>API: POST /v1/documents/text or upload<br/>(ระเบียบ · FAQ · past cases)
    API->>Loader: extract text
    Loader-->>API: raw text
    API->>API: normalize + chunk + overlap<br/>(Thai-aware tokenization)
    API->>Embedder: embed chunks
    Embedder-->>API: vectors (1536-dim)
    API->>DB: save document + chunks + vectors
    DB-->>API: indexed ids
    API-->>Admin: ingest summary + chunk count`,
  },
  {
    id: "seq-003",
    label: "Figure 3.3 · TRF-SEQ-003",
    title: "Citizen RAG Chat (Inquiry & FAQ)",
    ref: "Section 3.3 · L2.01 + L2.02",
    desc: "เมื่อประชาชนถามคำถามทั่วไปผ่าน LINE หรือเว็บ — ระบบจะ rate limit, lookup cache, embed คำถาม, vector search top-k chunks จาก knowledge base, สร้าง Thai RAG prompt, แล้วเรียก LLM พร้อมบันทึก trace สำหรับ audit",
    chart: `sequenceDiagram
    autonumber
    actor User as ประชาชน
    participant API
    participant Redis
    participant DB as PostgreSQL+pgvector
    participant LLM as Claude / vLLM

    User->>API: POST /v1/chat + X-Tenant-ID
    API->>Redis: rate limit
    API->>DB: get/create tenant + conversation
    par async
        API->>Redis: response cache lookup
        API->>API: embed user question
    end
    API->>DB: vector search top-k chunks
    API->>API: build Thai RAG prompt<br/>(with PII masking applied)
    API->>LLM: async chat/completions
    LLM-->>API: answer + citations
    API->>DB: save messages + inference trace
    API->>Redis: cache answer (TTL 24h)
    API-->>User: answer + sources`,
  },
  {
    id: "seq-004",
    label: "Figure 3.4 · TRF-SEQ-004",
    title: "Officer Override with Signed Audit Trail",
    ref: "Section 3.3 · TS.02 + TS.03",
    desc: "ในกรณีที่เจ้าหน้าที่ไม่เห็นด้วยกับคำแนะนำของ AI — Trust Stack บังคับให้ต้องระบุเหตุผลก่อน override และทุก decision จะถูก sign แบบ cryptographic chain เพื่อรองรับการตรวจสอบของ ISO 9001 และ WLA-SCS",
    chart: `sequenceDiagram
    autonumber
    actor Officer as เจ้าหน้าที่ GLO
    participant UI as AI Co-pilot Panel
    participant L2 as L2 AI Reasoning
    participant TS as TS Trust Stack
    participant L3 as L3 Orchestration
    participant Audit as Audit Log Service
    participant Manager as ผู้บริหาร / Auditor

    Officer->>UI: เปิดเคส #C-2569-00845
    UI->>L2: fetch AI recommendation
    L2-->>UI: recommendation + confidence 0.72
    UI->>Officer: แสดง extracted data + AI suggestion

    alt เห็นด้วยกับ AI
        Officer->>UI: คลิก "เห็นด้วย"
        UI->>TS: confirm decision (concur)
    else ไม่เห็นด้วย → Override
        Officer->>UI: คลิก "Override"
        UI->>Officer: บังคับใส่เหตุผล (ห้ามว่าง)
        Officer->>UI: ระบุเหตุผล + ทางเลือกอื่น
        UI->>TS: override decision + justification
    end

    TS->>TS: sign event with HSM key<br/>append to immutable chain
    TS->>Audit: signed event log entry
    Audit-->>Manager: real-time audit feed
    TS->>L3: update case state
    L3-->>Officer: action confirmed`,
  },
  {
    id: "seq-005",
    label: "Figure 3.5 · TRF-SEQ-005",
    title: "Anomaly Detection → Manager Alert (Process Mining)",
    ref: "Section 3.3 · L4.02 + L4.03",
    desc: "Layer 4 monitor my GLO data feed อย่างต่อเนื่อง เมื่อพบ pattern ผิดปกติ (เช่น เคลมสลากชำรุดถี่ผิดปกติจากบุคคลเดียวกัน) จะ trigger anomaly alert พร้อมส่งให้ผู้บริหารใน dashboard real-time",
    chart: `sequenceDiagram
    autonumber
    participant MyGLO as my GLO Data Lake
    participant L4a as L4.01 Process Mining
    participant L4b as L4.02 Anomaly Detection
    participant L4c as L4.03 Dashboard
    actor Manager as ผู้บริหาร GLO

    loop ทุก 5 นาที
        MyGLO->>L4a: stream new events
        L4a->>L4a: update process model
        L4a->>L4b: forward event window
        L4b->>L4b: time-series + clustering<br/>(scikit-learn / PyOD)

        alt Anomaly score > threshold
            L4b->>L4c: emit alert<br/>{type, severity, context}
            L4c-->>Manager: push notification + dashboard badge
            Manager->>L4c: เปิด anomaly detail
            L4c-->>Manager: root cause trace + linked cases
        else Normal
            L4b->>L4c: update baseline metrics
        end
    end

    Note over L4c: ทุก alert ถูก log สำหรับ<br/>compliance review ของ auditor`,
  },
];

export function SequenceFlows() {
  return (
    <section
      id="flows"
      className="dark-section relative overflow-hidden bg-darkbg py-20 text-ink-100 lg:py-24"
    >
      {/* Top accent ribbon */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent" />

      <div className="container-wide">
        <AnimatedSection>
          <header className="mb-12 max-w-[920px]">
            <span className="section-tag">Section 5 · Sequence Flows</span>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-ink-50 md:text-[2rem]">
              End-to-End Process Flows
            </h2>
            <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-400">
              Sequence diagrams สำหรับ workflow หลักของ TrustFlow — แสดงการประสานงานของ component ต่าง ๆ ในแต่ละ scenario ตั้งแต่ user action จนถึง output การจัดการ confidence gate, human override, audit trail, และ public ledger update
            </p>
          </header>
        </AnimatedSection>

        <div className="space-y-8">
          {FLOWS.map((f) => (
            <AnimatedSection key={f.id}>
              <article className="rounded-md border border-darkbg-200 bg-darkbg-50 p-6 shadow-xl lg:p-8">
                <header className="mb-4 flex flex-wrap items-baseline justify-between gap-3 border-b border-darkbg-200 pb-4">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-gold-300">
                      {f.label}
                    </div>
                    <div className="mt-1 text-[17px] font-bold text-ink-50">
                      {f.title}
                    </div>
                  </div>
                  <div className="text-[11px] font-semibold uppercase tracking-widest text-ink-400">
                    {f.ref}
                  </div>
                </header>
                <p className="mb-5 max-w-[900px] text-[13px] leading-relaxed text-ink-400">
                  {f.desc}
                </p>
                <MermaidDiagram id={f.id} chart={f.chart} />
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
