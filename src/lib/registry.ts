export type AllianceStatus = "active" | "expired" | "review";

export interface Alliance {
  slug: string;
  name: string;
  status: AllianceStatus;
  counterparty: string;
  counterpartyUrl: string;
  filed: string; // ISO date the alliance proposal was filed
  term: string;
  proposer: string;
  treasury?: { total: string; cycles: string; receiver: string; address: string };
  voteHash?: string;
  summary: string;
  deliverables: { party: "pivx" | "partner" | "joint"; text: string }[];
  links: { label: string; url: string }[];
  note?: string;
  demo?: boolean;
  review?: { opened: string; trigger: string };
}

export const REGISTRY_VERSION = "2026-10-30";

export const ALLIANCES: Alliance[] = [
  {
    slug: "allnodes-2018",
    name: "PIVX × Allnodes",
    status: "expired",
    counterparty: "Allnodes",
    counterpartyUrl: "https://www.allnodes.com",
    filed: "2018-02-05",
    term: "Defined duration (v1 era — pre-registry)",
    proposer: "Crypto S.I · CryptoHB",
    summary:
      "The founding example. Ten days after the AriseBank scandal, community members drafted the PIVX Alliance Protocol and filled its first vetting template with the Allnodes hosting alliance: declared purpose, named envoys, scope, risk notes, and a strict no-payments-either-way clause. Allnodes remains the second-largest host of PIVX cold staking — a load-bearing relationship that, to this day, has no formal status under any ratified framework.",
    deliverables: [
      { party: "joint", text: "Masternode and cold-staking hosting for the PIVX network" },
      { party: "joint", text: "The vetting-template precedent: purpose, envoys, scope, risks declared before ratification" },
      { party: "joint", text: "No payments in either direction — cooperation, not commerce" },
    ],
    links: [
      {
        label: "Alliance Protocol LitePaper (immutable Steemit copy)",
        url: "https://steemit.com/pivx/@cryptosi/pivx-alliance-protocol-immutable-steemit-copy",
      },
    ],
    note: "Ratified under the 2018 protocol's spirit, before the protocol was ever hosted or maintained. Listed here as history, not as a live alliance. The door to formal re-engagement under Protocol v2 is open.",
  },
  {
    slug: "ark-io-2021",
    name: "PIVX × ARK.io",
    status: "expired",
    counterparty: "ARK.io (ARK Ecosystem, SCIC)",
    counterpartyUrl: "https://ark.io",
    filed: "2021-02-19",
    term: "1 budget cycle",
    proposer: "Snappy",
    treasury: {
      total: "50 PIV",
      cycles: "1",
      receiver: "Snappy",
      address: "D5A6AcuADKEuTAdtu672utU6ZaVf32dLE3",
    },
    voteHash: undefined,
    summary:
      "A human-layer-first alliance: cross-promotion and mutual visibility between two proof-of-stake communities, with a path toward deeper integration — PIVX as a user data-protection and privacy layer in ARK's ecosystem, and PIVX listing on ARK platforms. Passed masternode governance and completed its single-cycle term.",
    deliverables: [
      { party: "joint", text: "Cross-promotion of both projects across social media and community platforms" },
      { party: "partner", text: "Management of the ARK-ALLIANCE Discord channel" },
      { party: "partner", text: "Addition of PIVX to ARK's new crypto platform" },
      { party: "pivx", text: "Introduction of ARK to the PIVX community and networks; shared networking & business development" },
    ],
    links: [
      {
        label: "Alliance proposal thread (PIVX Forum #870)",
        url: "https://forum.pivx.org/threads/pivx-ark-io-alliance.870/",
      },
    ],
  },
  {
    slug: "blockdx-2022",
    name: "PIVX × BlockDX",
    status: "expired",
    counterparty: "BlockDX",
    counterpartyUrl: "https://blockdx.com",
    filed: "2022-08-15",
    term: "3 cycles",
    proposer: "Eric Stanek",
    treasury: {
      total: "6000 PIV",
      cycles: "3 × 2000 PIV",
      receiver: "Arlyn Culwick",
      address: "DCvr2rZ11wPGsZvt1mui9Cwsi4opCGDpdY",
    },
    voteHash: "e9494daf205e58037717136ab0446988699013815cc6f6769b7ff1375abfd0b4",
    summary:
      "A technology alliance with a true DEX: PIVX treasury support for BlockDX development in exchange for a radically simpler, more user-friendly tool set and priority PIVX integration — strategic hedging for the day PIVX is pushed off centralized exchanges. Passed masternode governance; completed its three-cycle term.",
    deliverables: [
      { party: "partner", text: "Phased development plan with estimates, presented to PIVX governance" },
      { party: "partner", text: "Major UX simplification of the BlockDX suite (limit orders, charts, XLite multi-wallet, browser UI, mobile)" },
      { party: "partner", text: "Priority support and integration for PIVX on the BlockDX exchange" },
      { party: "pivx", text: "2000 PIV per cycle for 3 cycles from the PIVX treasury" },
    ],
    links: [
      {
        label: "Alliance proposal thread (PIVX Forum #1192)",
        url: "https://forum.pivx.org/threads/blockdx-alliance-v1.1192/",
      },
    ],
  },
  {
    slug: "degenswap-labs",
    name: "DegenSwap Labs",
    status: "review",
    counterparty: "DegenSwap Labs",
    counterpartyUrl: "",
    filed: "2026-09-12",
    term: "—",
    proposer: "—",
    demo: true,
    summary:
      "DEMO ENTRY — shows the disavowal mechanism. This entity published a 'PIVX partnership' announcement on social media. No ratifying proposal exists anywhere in PIVX governance. Under the registry's standing rule, the review banner goes up immediately — no waiting on a governance cycle. This is the exact mechanism January 2018 lacked.",
    deliverables: [],
    links: [],
    review: {
      opened: "2026-09-14",
      trigger:
        "Automatic: public 'official partnership' claim detected with no matching proposal in PIVX governance. Any PIVX community member can open a review; the banner stays up until governance resolves it.",
    },
    note: "Fictional entity included deliberately to demonstrate the disavowal banner. It will be removed once the first real review case arrives.",
  },
];

export interface VettingField {
  field: string;
  requirement: string;
}

export const VETTING_SHEET: VettingField[] = [
  { field: "Legal name", requirement: "Full registered legal name of the entity" },
  { field: "Jurisdiction", requirement: "Country/region of incorporation and governing law" },
  { field: "Entity registration", requirement: "Registration number and public registry link" },
  { field: "Litigation history", requirement: "Material litigation, regulatory actions, sanctions screening" },
  { field: "Purpose", requirement: "Specific, deliverable-scoped purpose of the cooperation" },
  { field: "Envoys", requirement: "Named individuals responsible on both sides" },
  { field: "Deliverables", requirement: "Itemized commitments per party, with dates" },
  { field: "Duration", requirement: "Hard expiry at 12 months maximum; renewal by fresh governance proposal" },
  { field: "Financial terms", requirement: "Declared payments either way; 'no payments' must be explicit if that is the term" },
  { field: "Reversibility", requirement: "How the alliance is wound down; what happens to shared assets" },
];

export const PROTOCOL_RULES = [
  {
    n: 1,
    title: "Governance is the only handshake",
    text: "An alliance is official only when a specific alliance proposal passes masternode governance. Blog posts, tweets, and press releases are not ratification.",
  },
  {
    n: 2,
    title: "Declared, itemized, dated",
    text: "Every alliance declares its purpose, envoys, deliverables, and duration — recorded in the registry before or at ratification, not reconstructed afterwards.",
  },
  {
    n: 3,
    title: "Twelve months, no exceptions",
    text: "A hard expiry at 12 months. Continuation requires a fresh proposal and a fresh vote. Nothing runs quietly forever.",
  },
  {
    n: 4,
    title: "Vetting before voting",
    text: "A completed vetting sheet — legal name, jurisdiction, entity registration, litigation history — accompanies every proposal. The 2018 Allnodes template, made mandatory.",
  },
  {
    n: 5,
    title: "Cooperation, never endorsement",
    text: "An alliance is a cooperation instrument. It is never an endorsement, an investment, a custody arrangement, or a promise of returns — in either direction.",
  },
  {
    n: 6,
    title: "The disavowal banner",
    text: "If a claimed 'partner' goes rogue or no ratifying record exists, a review notice goes up on the registry immediately — no waiting on a governance cycle. This is the exact mechanism January 2018 lacked.",
  },
];

export const OPEN_QUESTIONS = [
  {
    q: "Disavowal banner governance",
    detail: "Who flips and clears the banner: a maintenance multisig, or an elected steward re-approved annually?",
  },
  {
    q: "Own-project alliances",
    detail: "Is an independent envoy plus author abstention sufficient, or must the alliance proposal come from a separate proposer?",
  },
  {
    q: "Archive policy",
    detail: "Should expired alliances auto-archive, or must even dormant cooperation renew by vote?",
  },
  {
    q: "Registry scope",
    detail: "Should the registry list unofficial, expired, or dissolved alliances (clearly labelled, disavowal-ready), or track only currently-ratified ones? This build lists all, clearly labelled.",
  },
];
