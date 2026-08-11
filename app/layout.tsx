import type { Metadata } from "next";
import { Montserrat, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { company } from "@/lib/site-data";

const headingFont = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap"
});

const bodyFont = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: "L.M. Hauswartung | Hauswartung Zürich & Rümlang",
    template: "%s | L.M. Hauswartung"
  },
  description:
    "Professionelle Hauswartung, Reinigung, Gartenpflege, Solardachpflege und Kleinreparaturen in Zürich, Rümlang und Umgebung.",
  keywords: [
    "Hauswartung Zürich",
    "Hauswartungsfirma Zürich",
    "Hauswartung Rümlang",
    "Liegenschaftsunterhalt Zürich",
    "Gebäudereinigung Zürich",
    "Gartenpflege Zürich"
  ],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: "/apple-touch-icon.png"
  },
  openGraph: {
    title: "L.M. Hauswartung | Hauswartung Zürich & Rümlang",
    description:
      "Persönliche und zuverlässige Betreuung für Liegenschaften, Wohnhäuser und Aussenbereiche im Raum Zürich.",
    url: company.url,
    siteName: "L.M. Hauswartung",
    locale: "de_CH",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de-CH">
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
