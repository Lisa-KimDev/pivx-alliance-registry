import Link from "next/link";

export function DisavowalBanner({ opened, trigger }: { opened: string; trigger: string }) {
  return (
    <div className="disavow rise">
      <p className="mono font-semibold" style={{ color: "var(--stamp-red)", letterSpacing: "0.14em" }}>
        UNDER REVIEW — UNVERIFIED PARTNERSHIP CLAIM
      </p>
      <p className="mt-1 text-[0.95rem]">
        The following entry has no ratifying proposal in PIVX governance. A public
        &ldquo;official partnership&rdquo; claim exists; the register says otherwise.
        Under registry rules the banner goes up <strong>immediately</strong> — no waiting on a
        governance cycle.
      </p>
      <p className="mono mt-2" style={{ color: "var(--ink-soft)" }}>
        Review opened {opened} — {trigger}
      </p>
    </div>
  );
}

export function SiteHeader() {
  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{ background: "var(--paper)", borderColor: "var(--rule)" }}
    >
      <div className="mx-auto flex h-14 max-w-[1100px] items-center justify-between px-6 lg:px-12">
        <Link href="/" className="mono flex items-center gap-2.5 font-semibold tracking-[0.18em] text-[0.8rem]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/seal-512.png" alt="PIVX Alliance Registry seal" width={28} height={28} />
          PIVX ALLIANCE REGISTRY
        </Link>
        <nav className="site-nav flex items-center gap-5">
          <Link href="/#registry">Registry</Link>
          <Link href="/protocol">Protocol</Link>
          <Link href="/submit">Submit</Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t" style={{ borderColor: "var(--rule)" }}>
      <div className="mx-auto max-w-[1100px] px-6 py-10 lg:px-12">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/seal-ink.png" alt="" width={36} height={36} className="mb-4 opacity-80" />
        <p className="mono" style={{ color: "var(--ink-soft)" }}>
          PIVX ALLIANCE REGISTRY — a public service built for the PIVX DAO. Not an
          official publication of the PIVX Project. Alliances are official only when a
          specific alliance proposal has passed masternode governance.
        </p>
      </div>
    </footer>
  );
}
