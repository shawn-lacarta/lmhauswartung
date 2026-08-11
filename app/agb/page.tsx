import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AGB",
  description: "Allgemeine Geschäftsbedingungen von L.M. Hauswartung."
};

const terms = [
  {
    title: "Geltungsbereich",
    text:
      "Diese Allgemeinen Geschäftsbedingungen gelten für alle Dienstleistungen, die von L.M. Hauswartung erbracht werden. Abweichende Bedingungen des Kunden haben keine Gültigkeit, es sei denn, sie wurden ausdrücklich schriftlich vereinbart."
  },
  {
    title: "Leistungen",
    text:
      "L.M. Hauswartung erbringt Dienstleistungen in den Bereichen Hauswartung, Reinigung, Gartenpflege, Unterhalt und Kleinreparaturen. Der genaue Leistungsumfang wird individuell vereinbart."
  },
  {
    title: "Offerten und Preise",
    text:
      "Alle Offerten sind unverbindlich. Preise verstehen sich in Schweizer Franken, sofern nichts anderes vereinbart wurde. Preisänderungen sind jederzeit möglich, betreffen jedoch nicht bereits bestätigte Aufträge."
  },
  {
    title: "Vertragsabschluss",
    text: "Ein Vertrag kommt durch schriftliche oder mündliche Bestätigung des Kunden zustande."
  },
  {
    title: "Zahlungsbedingungen",
    text:
      "Sofern nichts anderes vereinbart wurde, ist der Rechnungsbetrag innerhalb von 14 Tagen ab Rechnungsdatum ohne Abzüge zu begleichen."
  },
  {
    title: "Pflichten des Kunden",
    text:
      "Der Kunde ermöglicht L.M. Hauswartung den Zugang zu den vereinbarten Arbeitsbereichen und stellt notwendige Informationen bereit."
  },
  {
    title: "Haftung",
    text:
      "L.M. Hauswartung haftet für Schäden nur bei grober Fahrlässigkeit oder Vorsatz. Eine Haftung für Folgeschäden oder entgangenen Gewinn ist ausgeschlossen."
  },
  {
    title: "Gewährleistung",
    text:
      "Beanstandungen sind unverzüglich, spätestens jedoch innerhalb von 5 Werktagen nach Leistungserbringung, schriftlich mitzuteilen."
  },
  {
    title: "Kündigung und Stornierung",
    text:
      "Vereinbarte Termine können bis 48 Stunden vor Arbeitsbeginn kostenlos storniert werden. Bei kurzfristigeren Absagen kann ein Ausfallersatz berechnet werden."
  },
  {
    title: "Anwendbares Recht und Gerichtsstand",
    text:
      "Es gilt schweizerisches Recht. Gerichtsstand ist der Sitz von L.M. Hauswartung, sofern keine zwingenden gesetzlichen Bestimmungen entgegenstehen."
  }
];

export default function TermsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <div>
            <p className="eyebrow">AGB</p>
            <h1>Allgemeine Geschäftsbedingungen</h1>
          </div>
          <p>Die wichtigsten Rahmenbedingungen für Dienstleistungen von L.M. Hauswartung.</p>
        </div>
      </section>
      <section className="section alt">
        <div className="container legal-grid">
          {terms.map((term) => (
            <section className="legal-section" key={term.title}>
              <h2>{term.title}</h2>
              <p>{term.text}</p>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
