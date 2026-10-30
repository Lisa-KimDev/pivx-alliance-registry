import Link from "next/link";
import type { Metadata } from "next";
import { DisavowalBanner, SiteHeader, SiteFooter } from "@/components/chrome";
import { ALLIANCES, REGISTRY_VERSION } from "@/lib/registry";

export const metadata: Metadata = {
  title: "The public register of PIVX alliances",
};

function Chip({ status }: { status: string }) {
  const map: Record<string, string> = {
    active: "chip chip-active",
    expired: "chip chip-expired",
    review: "chip chip-review",
    pre: "chip chip-pre",
  };
  const label: Record<string, string> = {
    active: "Active",
    expired: "Expired",
    review: "Under review",
    pre: "Pre-proposal",
  };
  return (
    <span className={map[status]}>
      <span className="dot" />
      {label[status]}
    </span>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader />

      {/* Review banner — shown whenever any registry entry is under review */}
      {ALLIANCES.some((a) => a.status === "review") && (
        <div className="mx-auto max-w-[1100px] px-6 pt-6 lg:px-12">
          {ALLIANCES.filter((a) => a.status === "review").map((a) => (
            <DisavowalBanner
              key={a.slug}
              opened={a.review?.opened ?? ""}
              trigger={a.review?.trigger ?? ""}
            />
          ))}
        </div>
      )}

      <main className="mx-auto max-w-[1100px] px-6 lg:px-12">
        {/* Masthead */}
        <section className="rise pt-12 pb-10 md:pt-16">
          <p className="mono" style={{ color: "var(--purple)" }}>
            EST. 2018 · REVIVED 2026 · PRE-PROPOSAL
          </p>
          <h1 className="mt-3 text-[2.1rem] font-bold leading-[1.15] md:text-[2.6rem]">
            Every PIVX alliance, on the public record.
          </h1>
          <p className="mt-4 max-w-[68ch] text-[1.08rem]" style={{ color: "var(--ink-soft)" }}>
            In 2018 a fake &ldquo;official partnership&rdquo; nearly defined what a PIVX
            alliance was. This register exists so that never happens again: every
            alliance is <strong>visible</strong>, <strong>dated</strong>, and
            <strong> revocable</strong> — ratified by masternode governance, recorded
            here, expiring on schedule, and disavowed in public when a claim has no
            record behind it.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/#registry"
              className="mono inline-block border px-5 py-2.5 text-[0.8rem] font-semibold tracking-[0.08em]"
              style={{ background: "var(--purple)", borderColor: "var(--purple)", color: "#fff" }}
            >
              VIEW THE REGISTER
            </Link>
            <Link
              href="/protocol"
              className="mono inline-block border px-5 py-2.5 text-[0.8rem] font-semibold tracking-[0.08em]"
              style={{ borderColor: "var(--ink)", color: "var(--ink)" }}
            >
              READ PROTOCOL V2
            </Link>
          </div>
        </section>

        {/* Stats strip */}
        <section className="rise rise-1 grid grid-cols-3 gap-4 border-y py-5" style={{ borderColor: "var(--rule)" }}>
          {[
            ["3", "historical alliances on record"],
            ["6", "rules in Protocol v2"],
            ["1", "public disavowal mechanism"],
          ].map(([n, label]) => (
            <div key={label}>
              <p className="mono text-[1.6rem] font-semibold" style={{ color: "var(--purple)" }}>{n}</p>
              <p className="text-[0.85rem] leading-snug" style={{ color: "var(--ink-soft)" }}>{label}</p>
            </div>
          ))}
        </section>

        {/* The register */}
        <section id="registry" className="rise rise-2 scroll-mt-20 pt-12">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h2 className="text-[1.5rem] font-bold">The register</h2>
            <p className="mono" style={{ color: "var(--ink-soft)" }}>
              REGISTRY STATE AS OF {REGISTRY_VERSION}
            </p>
          </div>

          {/* Desktop ledger table */}
          <div className="hidden md:block">
            <table className="rule-table mt-4">
              <thead>
                <tr>
                  <th className="w-[26%]">Alliance</th>
                  <th className="w-[12%]">Status</th>
                  <th className="w-[14%]">Filed</th>
                  <th className="w-[18%]">Term</th>
                  <th className="w-[18%]">Treasury</th>
                  <th className="w-[12%]">Record</th>
                </tr>
              </thead>
              <tbody>
                {ALLIANCES.map((a) => (
                  <tr key={a.slug}>
                    <td>
                      <Link href={`/alliance/${a.slug}`} className="font-semibold hover:underline" style={{ color: "var(--ink)" }}>
                        {a.name}
                      </Link>
                      {a.demo && (
                        <span className="mono ml-2 border px-1.5 py-0.5 text-[0.6rem] tracking-[0.1em]" style={{ borderColor: "var(--ink-soft)", color: "var(--ink-soft)" }}>
                          DEMO
                        </span>
                      )}
                    </td>
                    <td><Chip status={a.status} /></td>
                    <td className="mono">{a.filed}</td>
                    <td className="mono">{a.term}</td>
                    <td className="mono">{a.treasury?.total ?? "—"}</td>
                    <td>
                      {a.links.length > 0 ? (
                        <Link href={`/alliance/${a.slug}`} className="mono" style={{ color: "var(--purple)" }}>
                          {a.links.length} source{a.links.length > 1 ? "s" : ""} →
                        </Link>
                      ) : (
                        <span className="mono" style={{ color: "var(--ink-soft)" }}>none</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile: tap-friendly cards (Carl's mobile rule) */}
          <div className="md:hidden mt-2">
            {ALLIANCES.map((a) => (
              <Link
                key={a.slug}
                href={`/alliance/${a.slug}`}
                className="block border-b py-4"
                style={{ borderColor: "var(--rule)" }}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-semibold">
                    {a.name}
                    {a.demo && (
                      <span className="mono ml-2 border px-1.5 py-0.5 text-[0.6rem] tracking-[0.1em]" style={{ borderColor: "var(--ink-soft)", color: "var(--ink-soft)" }}>
                        DEMO
                      </span>
                    )}
                  </span>
                  <Chip status={a.status} />
                </div>
                <p className="mono mt-1" style={{ color: "var(--ink-soft)" }}>
                  Filed {a.filed} · {a.term} · {a.treasury?.total ?? "no treasury items"}
                </p>
              </Link>
            ))}
          </div>

          <p className="mt-4 text-[0.9rem]" style={{ color: "var(--ink-soft)" }}>
            Expired alliances remain listed deliberately: history is part of the record.
            The DegenSwap entry demonstrates the disavowal mechanism and is marked as a
            demo.{" "}
            <Link href="/protocol#questions" className="underline" style={{ color: "var(--purple)" }}>
              Open governance questions
            </Link>{" "}
            are tracked on the protocol page.
          </p>
        </section>

        {/* Why this exists */}
        <section className="rise rise-3 pt-14 pb-16">
          <h2 className="text-[1.5rem] font-bold">Why a register at all</h2>
          <div className="mt-5 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="font-semibold">January 2018: the wound</h3>
              <p className="mt-2 text-[0.98rem]" style={{ color: "var(--ink-soft)" }}>
                AriseBank — a fake &ldquo;decentralized bank&rdquo; — announced an
                &ldquo;official partnership&rdquo; with PIVX. Its founder, Jared Rice
                Sr., was later sentenced to five years in federal prison and ordered to
                pay $4.26M in restitution. PIVX had no framework that defined what an
                <em> official</em> partnership even was, and no register to point to that
                said &ldquo;yes, real&rdquo; or &ldquo;never was&rdquo;.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">February 2018: the draft cure</h3>
              <p className="mt-2 text-[0.98rem]" style={{ color: "var(--ink-soft)" }}>
                Ten days later, community members drafted the PIVX Alliance Protocol:
                alliances are official only by governance vote, term-limited to twelve
                months, and vetted against a standard sheet. It was sound — and it was
                never hosted. Two alliances later passed in its spirit (ARK.io 2021,
                BlockDX 2022). The cure existed on paper only. This registry hosts it.
              </p>
            </div>
          </div>
          <p className="mt-6 text-[0.98rem]" style={{ color: "var(--ink-soft)" }}>
            Sources:{" "}
            <a href="https://www.sec.gov/news/press-release/2018-8" className="underline" style={{ color: "var(--purple)" }} target="_blank" rel="noopener noreferrer">
              SEC press release 2018-8
            </a>{" "}
            ·{" "}
            <a href="https://markets.businessinsider.com/news/currencies/arisecoin-fraud-scheme-jared-rice-sentenced-4-million-doj-crypto-2021-8" className="underline" style={{ color: "var(--purple)" }} target="_blank" rel="noopener noreferrer">
              DOJ sentencing coverage
            </a>{" "}
            ·{" "}
            <a href="https://steemit.com/pivx/@cryptosi/pivx-alliance-protocol-immutable-steemit-copy" className="underline" style={{ color: "var(--purple)" }} target="_blank" rel="noopener noreferrer">
              Alliance Protocol LitePaper
            </a>
          </p>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
