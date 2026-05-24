export function Footer() {
  return (
    <footer className="border-t-4 border-gold-500 bg-navy-700 px-0 py-14 text-ink-200">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <div className="text-2xl font-bold text-white">GLO TrustFlow AI</div>
            <div className="mt-2 text-[14px] text-ink-300">
              ระบบจัดการเคสอัจฉริยะของสำนักงานสลากกินแบ่งรัฐบาล
            </div>
            <p className="mt-4 max-w-[520px] text-[13px] leading-relaxed text-ink-400">
              เอกสารฉบับนี้จัดทำขึ้นสำหรับการประกวด{" "}
              <strong className="text-white">GLO Innovation Challenge 2026</strong>{" "}
              ภายใต้ Pillar "ระบบจัดการงานอัจฉริยะ (Process Automation)" — สอดคล้องกับมาตรฐาน C4 Model (Simon Brown), TOGAF 9.2 Architecture Content Framework และ ISO/IEC/IEEE 42010:2022
            </p>
          </div>

          <div>
            <h5 className="mb-3 text-[11px] font-bold uppercase tracking-widest text-white">
              Companion Documents
            </h5>
            <ul className="space-y-1.5 text-[13px] text-ink-300">
              <li>TRF-ARCH-001 · Layered Architecture (Fig. 1)</li>
              <li>TRF-ARCH-002 · System Context (Fig. 2)</li>
              <li>TRF-SEQ-001 to 005 · Sequence Flows</li>
              <li>TRF-MERMAID · Editable Mermaid Source</li>
              <li>TRF-UI-001 / 002 / 003 · UI Mockups (forthcoming)</li>
            </ul>
          </div>

          <div>
            <h5 className="mb-3 text-[11px] font-bold uppercase tracking-widest text-white">
              Document Control
            </h5>
            <ul className="space-y-1.5 text-[13px] text-ink-300">
              <li>Reference: TRF-DOC-001</li>
              <li>Revision: v1.0</li>
              <li>Issued: 24 พฤษภาคม 2569</li>
              <li>Status: Draft for Review</li>
              <li>Classification: Internal</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-navy-500 pt-5 text-[12px] text-ink-400 md:flex-row md:items-center">
          <span>© สำนักงานสลากกินแบ่งรัฐบาล · 2569 BE</span>
          <span>Solution Reference Document · Page 1 of 1</span>
        </div>
      </div>
    </footer>
  );
}
