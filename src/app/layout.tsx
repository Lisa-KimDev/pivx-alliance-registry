import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "PIVX Alliance Registry",
    template: "%s · PIVX Alliance Registry",
  },
  description:
    "The official public register of PIVX alliances: ratified cooperations, their terms, envoys, and expiry dates — plus the vetting framework and disavowal mechanism that keep them honest.",
  openGraph: {
    title: "PIVX Alliance Registry",
    description:
      "The official public register of PIVX alliances — visible, dated, revocable.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Source+Sans+3:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
