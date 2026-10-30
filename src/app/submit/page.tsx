import type { Metadata } from "next";
import { SiteHeader, SiteFooter } from "@/components/chrome";

export const metadata: Metadata = {
  title: "Submitting an alliance",
  description:
    "The proposal path: vetting sheet, forum proposal, masternode vote, registry entry. What happens when a claim has no record — the disavowal banner.",
};

export default function SubmitPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-[1100px] px-6 lg:px-12">
        <section className="rise pt-12 pb-4">
          <p className="mono" style={{ color: "var(--purple)" }}>PROCESS</p>
          <h1 className="mt-3 text-[2.1rem] font-bold leading-tight md:text-[2.4rem]">
            How an alliance becomes official
          </h1>
          <p className="mt-4 max-w-[68ch] text-[1.05rem]" style={{ color: "var(--ink-soft)" }}>
            There is exactly one path, and it runs through PIVX governance. No
            announcement, press release, or tweet ratifies anything.
          </p>
        </section>

        <section className="rise rise-1 pt-8">
          {[
            {
              n: "01",
              t: "Prepare the vetting sheet",
              d: "Complete all ten fields — legal name, jurisdiction, entity registration, litigation history, purpose, envoys, deliverables, duration, financial terms, reversibility. Incomplete sheets do not reach a vote.",
            },
            {
              n: "02",
              t: "Post the alliance proposal",
              d: "Propose it in Budget & Governance Proposals on the PIVX forum with the sheet attached. The proposal names its envoys, itemizes deliverables per party, and declares its term — twelve months maximum.",
            },
            {
              n: "03",
              t: "Win the masternode vote",
              d: "Masternode owners decide. A passed vote is the only signature a DAO can give, and the vote record becomes the alliance's birth certificate.",
            },
            {
              n: "04",
              t: "Registry entry",
              d: "On ratification the alliance is entered in the register with its term, envoys, deliverables, and expiry date. Quarterly status reports keep the entry current until it expires.",
            },
            {
              n: "05",
              t: "Renew by fresh vote",
              d: "Continuation past expiry requires a brand-new proposal and a brand-new vote. Nothing runs quietly forever.",
            },
          ].map((s) => (
            <div key={s.n} className="grid grid-cols-[56px_1fr] gap-4 border-b py-5" style={{ borderColor: "var(--rule)" }}>
              <p className="mono text-[1.4rem] font-semibold" style={{ color: "var(--purple)" }}>{s.n}</p>
              <div>
                <h2 className="font-semibold text-[1.1rem]">{s.t}</h2>
                <p className="mt-1 max-w-[70ch] text-[0.98rem]" style={{ color: "var(--ink-soft)" }}>{s.d}</p>
              </div>
            </div>
          ))}
        </section>

        <section className="rise rise-2 pt-12 pb-16">
          <h2 className="text-[1.5rem] font-bold">If a claim has no record</h2>
          <div className="disavow mt-5">
            <p className="mono font-semibold" style={{ color: "var(--stamp-red)", letterSpacing: "0.14em" }}>
              THE DISAVOWAL BANNER
            </p>
            <p className="mt-2 max-w-[70ch] text-[0.98rem]">
              When an entity publicly claims a PIVX partnership and no ratifying
              proposal exists in governance, the registry puts an{" "}
              <strong>UNDER REVIEW</strong> banner on the entry immediately — the review
              is opened by any community member and resolved only by governance. No
              waiting on a cycle, no quiet ambiguity. This is the mechanism January 2018
              lacked: the answer to &ldquo;is this partnership real?&rdquo; is always
              one public page away.
            </p>
          </div>
          <p className="mt-6 max-w-[68ch] text-[0.95rem]" style={{ color: "var(--ink-soft)" }}>
            Registry maintenance (adding ratified entries, opening reviews, publishing
            quarterly status reports) is funded by the{" "}
            <a
              href="https://forum.pivx.org"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
              style={{ color: "var(--purple)" }}
            >
              alliance registry proposal
            </a>{" "}
            — partners receive no treasury funds; any partner seeking funding files its
            own proposal.
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
