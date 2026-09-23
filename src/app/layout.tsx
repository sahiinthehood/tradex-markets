import type { Metadata } from "next";
import { Figtree, JetBrains_Mono, Syne } from "next/font/google";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "TradeX Markets",
    template: "%s · TradeX Markets",
  },
  description:
    "TradeX Markets — bootstrap CFD broker path for South Africa, Namibia, and an international allowlist. Partner / white-label first; Mauritius licence when funded.",
  openGraph: {
    title: "TradeX Markets",
    description:
      "Credible broker front door for Southern Africa. Demo and waitlist now; live under a licensed partner before own Mauritius FSC licence.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${figtree.variable} ${jetbrains.variable} antialiased`}>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
