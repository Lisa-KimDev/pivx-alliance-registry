import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader, SiteFooter } from "@/components/chrome";
import { PROTOCOL_RULES, VETTING_SHEET, OPEN_QUESTIONS } from "@/lib/registry";

export const metadata: Metadata = {
  title: "Alliance Protocol v2",
  description:
    "Six rules and a mandatory vetting sheet: how PIVX alliances become official, stay dated, and get disavowed when claims have no record behind them.",
};

export default function ProtocolPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-[1100px] px-6 lg:px-12">
        <section className="rise pt-12 pb-4">
          <p className="mono" style={{ color: "var(--purple)" }}>PROTOCOL V2 · DRAFT FOR GOVERNANCE REVIEW</p>
          <h1 className="mt-3 text-[2.1rem] font-bold leading-tight md:text-[2.4rem]">
            Alliance Protocol v2
          </h1>
          <p className="mt-4 max-w-[68ch] text-[1.05rem]" style={{ color: "var(--ink-soft)" }}>
            Blockchains can't sign contracts — governance votes are the only signature a
            DAO has. The 2018 protocol understood this. V2 keeps its spine and adds the
            one thing eight years of hindsight demands: an alliance is a cooperation
            instrument, never an endorsement, investment, custody arrangement, or
            promise of returns.
          </p>
        </section>

        {/* Rules */}
        <section className="rise rise-1 pt-8">
          <h2 className="text-[1.5rem] font-bold">The six rules</h2>
          <div className="mt-5">
            {PROTOCOL_RULES.map((r) => (
              <div key={r.n} className="grid grid-cols-[48px_1fr] gap-4 border-b py-5" style={{ borderColor: "var(--rule)" }}>
                <p className="mono text-[1.4rem] font-semibold" style={{ color: "var(--purple)" }}>
                  {String(r.n).padStart(2, "0")}
                </p>
                <div>
                  <h3 className="font-semibold text-[1.1rem]">{r.title}</h3>
                  <p className="mt-1 max-w-[70ch] text-[0.98rem]" style={{ color: "var(--ink-soft)" }}>
                    {r.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Vetting sheet */}
        <section className="rise rise-2 pt-12">
          <h2 className="text-[1.5rem] font-bold">The mandatory vetting sheet</h2>
          <p className="mt-2 max-w-[68ch] text-[0.98rem]" style={{ color: "var(--ink-soft)" }}>
            Filled example survives from 2018: the Allnodes alliance — envoys, scope,
            risks, and a no-payments-either-way clause. Every v2 proposal carries a
            completed sheet before the vote.
          </p>
          <div className="overflow-x-auto mt-5">
            <table className="rule-table min-w-[560px]">
              <thead>
                <tr>
                  <th className="w-[30%]">Field</th>
                  <th>Requirement</th>
                </tr>
              </thead>
              <tbody>
                {VETTING_SHEET.map((v) => (
                  <tr key={v.field}>
                    <td className="mono">{v.field}</td>
                    <td className="text-[0.95rem]">{v.requirement}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Open questions */}
        <section id="questions" className="rise rise-3 scroll-mt-20 pt-12 pb-16">
          <h2 className="text-[1.5rem] font-bold">Open questions for governance</h2>
          <p className="mt-2 max-w-[68ch] text-[0.98rem]" style={{ color: "var(--ink-soft)" }}>
            Carried from the pre-proposal discussion. Resolving them is part of the
            proposal's work, not a precondition for it.
          </p>
          <div className="mt-5 space-y-4">
            {OPEN_QUESTIONS.map((q, i) => (
              <div key={q.q} className="border-l-2 pl-4" style={{ borderColor: "var(--purple)" }}>
                <h3 className="font-semibold">
                  <span className="mono mr-2" style={{ color: "var(--purple)" }}>Q{i + 1}</span>
                  {q.q}
                </h3>
                <p className="text-[0.95rem]" style={{ color: "var(--ink-soft)" }}>{q.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 border p-5" style={{ borderColor: "var(--ink)" }}>
            <h3 className="font-semibold">Want to weigh in?</h3>
            <p className="mt-1 text-[0.95rem]" style={{ color: "var(--ink-soft)" }}>
              The pre-proposal discussion is live on the PIVX forum. Read it, then bring
              your answers to the thread.
            </p>
            <Link
              href="/submit"
              className="mono mt-3 inline-block border px-4 py-2 text-[0.75rem] font-semibold tracking-[0.08em]"
              style={{ background: "var(--purple)", borderColor: "var(--purple)", color: "#fff" }}
            >
              HOW TO SUBMIT AN ALLIANCE
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
