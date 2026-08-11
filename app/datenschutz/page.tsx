import type { Metadata } from "next";
import { company } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung von L.M. Hauswartung."
};

const sections = [
  {
    title: "Verantwortliche Stelle",
    text: `${company.name}, ${company.owner}, ${company.address}, ${company.phone}, ${company.email}.`
  },
  {
    title: "Erhebung und Verarbeitung von Daten",
    text:
      "Beim Besuch dieser Website können technische Daten wie IP-Adresse, Datum und Uhrzeit des Zugriffs, Browser, Betriebssystem und besuchte Seiten verarbeitet werden. Zusätzlich verarbeiten wir Daten, die Sie uns freiwillig per Kontaktformular, Telefon oder E-Mail mitteilen."
  },
  {
    title: "Zweck der Verarbeitung",
    text:
      "Wir verwenden personenbezogene Daten, um die Website bereitzustellen, Anfragen zu beantworten und unsere Dienstleistungen zu erbringen."
  },
  {
    title: "Kontakt",
    text:
      "Bei Fragen zum Datenschutz können Sie uns jederzeit telefonisch oder per E-Mail kontaktieren."
  }
];

export default function PrivacyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <p className="eyebrow">Datenschutz</p>
          <h1>Datenschutzerklärung</h1>
          <p>Der Schutz Ihrer persönlichen Daten ist uns wichtig.</p>
        </div>
      </section>
      <section className="section alt">
        <div className="container legal-grid">
          {sections.map((section) => (
            <section className="legal-section" key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.text}</p>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
