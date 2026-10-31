import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "PIVX Alliance Registry",
    template: "%s · PIVX Alliance Registry",
  },
  description:
    "The official public register of PIVX alliances: ratified cooperations, their terms, envoys, and expiry dates — plus the vetting framework and disavowal mechanism that keep them honest.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x32x16" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "PIVX Alliance Registry",
    description:
      "The official public register of PIVX alliances — visible, dated, revocable.",
    type: "website",
    images: [{ url: "/og-card.png", width: 1200, height: 630 }],
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
