import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SiteHeader, SiteFooter, DisavowalBanner } from "@/components/chrome";
import { ALLIANCES } from "@/lib/registry";

export function generateStaticParams() {
  return ALLIANCES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = ALLIANCES.find((x) => x.slug === slug);
  if (!a) return { title: "Not found" };
  return { title: a.name, description: a.summary.slice(0, 155) };
}

function Chip({ status }: { status: string }) {
  const cls: Record<string, string> = {
    active: "chip chip-active",
    expired: "chip chip-expired",
    review: "chip chip-review",
  };
  const label: Record<string, string> = {
    active: "Active",
    expired: "Expired",
    review: "Under review",
  };
  return (
    <span className={cls[status]}>
      <span className="dot" />
      {label[status]}
    </span>
  );
}

const PARTY_LABEL: Record<string, string> = {
  pivx: "PIVX delivers",
  partner: "Partner delivers",
  joint: "Joint",
};

export default async function AlliancePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = ALLIANCES.find((x) => x.slug === slug);
  if (!a) notFound();

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-[1100px] px-6 lg:px-12">
        <div className="pt-10">
          <Link href="/#registry" className="mono" style={{ color: "var(--purple)" }}>
            ← Back to the register
          </Link>
        </div>

        {a.status === "review" && a.review && (
          <div className="mt-6">
            <DisavowalBanner opened={a.review.opened} trigger={a.review.trigger} />
          </div>
        )}

        <section className="rise pt-8">
          <div className="flex flex-wrap items-center gap-4">
            <h1 className="text-[2rem] font-bold leading-tight">{a.name}</h1>
            <Chip status={a.status} />
            {a.demo && (
              <span className="mono border px-2 py-0.5 text-[0.65rem] tracking-[0.1em]" style={{ borderColor: "var(--ink-soft)", color: "var(--ink-soft)" }}>
                DEMO ENTRY
              </span>
            )}
          </div>
          <p className="mt-4 max-w-[68ch] text-[1.02rem]">{a.summary}</p>
        </section>

        <section className="rise rise-1 mt-8 grid gap-10 md:grid-cols-[1fr_320px]">
          {/* Deliverables */}
          <div>
            <h2 className="text-[1.35rem] font-bold">Deliverables on record</h2>
            {a.deliverables.length > 0 ? (
              <ul className="mt-4 space-y-3">
                {a.deliverables.map((d, i) => (
                  <li key={i} className="border-b pb-3" style={{ borderColor: "var(--rule)" }}>
                    <span className="mono text-[0.65rem] tracking-[0.1em]" style={{ color: "var(--purple)" }}>
                      {PARTY_LABEL[d.party]}
                    </span>
                    <p className="text-[0.98rem]">{d.text}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-3 text-[0.98rem]" style={{ color: "var(--ink-soft)" }}>
                None on record — and that absence is the finding. No declared
                deliverables exist because no ratifying proposal exists.
              </p>
            )}

            {a.note && (
              <div className="mt-6 border-l-2 pl-4" style={{ borderColor: "var(--purple)" }}>
                <p className="mono text-[0.65rem] tracking-[0.1em]" style={{ color: "var(--purple)" }}>
                  REGISTRAR'S NOTE
                </p>
                <p className="text-[0.95rem]" style={{ color: "var(--ink-soft)" }}>{a.note}</p>
              </div>
            )}

            {a.links.length > 0 && (
              <div className="mt-8">
                <h2 className="text-[1.35rem] font-bold">Primary sources</h2>
                <ul className="mt-3 space-y-2">
                  {a.links.map((l) => (
                    <li key={l.url}>
                      <a
                        href={l.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mono underline"
                        style={{ color: "var(--purple)" }}
                      >
                        {l.label} ↗
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Fact box */}
          <aside>
            <div className="border p-5" style={{ borderColor: "var(--ink)" }}>
              <p className="mono text-[0.65rem] tracking-[0.14em]" style={{ color: "var(--ink-soft)" }}>
                REGISTRY RECORD
              </p>
              <dl className="fact-list mt-2">
                <dt>Counterparty</dt>
                <dd>
                  {a.counterpartyUrl ? (
                    <a href={a.counterpartyUrl} target="_blank" rel="noopener noreferrer" style={{ color: "var(--purple)" }}>
                      {a.counterparty} ↗
                    </a>
                  ) : (
                    a.counterparty
                  )}
                </dd>
                <dt>Proposal filed</dt>
                <dd>{a.filed}</dd>
                <dt>Term</dt>
                <dd>{a.term}</dd>
                {a.proposer && a.proposer !== "—" && (
                  <>
                    <dt>Proposer</dt>
                    <dd>{a.proposer}</dd>
                  </>
                )}
                {a.treasury && (
                  <>
                    <dt>Treasury</dt>
                    <dd>{a.treasury.total} ({a.treasury.cycles})</dd>
                    <dt>Receiver</dt>
                    <dd>{a.treasury.receiver}</dd>
                    <dt>Address</dt>
                    <dd>{a.treasury.address}</dd>
                  </>
                )}
                {a.voteHash && (
                  <>
                    <dt>Vote hash</dt>
                    <dd>{a.voteHash}</dd>
                  </>
                )}
              </dl>
            </div>
          </aside>
        </section>

        <div className="h-16" />
      </main>
      <SiteFooter />
    </>
  );
}
