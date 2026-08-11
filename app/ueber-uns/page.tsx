import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { values } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Lernen Sie L.M. Hauswartung aus Rümlang kennen: persönliche Betreuung, Fachkompetenz und zuverlässige Hauswartung in Zürich und Umgebung."
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <p className="eyebrow">Das sind wir</p>
          <h1>Persönliche Hauswartung mit Verantwortung und Sorgfalt.</h1>
          <p>
            Wir sind ein engagiertes Team, das Immobilien zuverlässig betreut und den direkten
            Austausch mit Kundinnen und Kunden schätzt.
          </p>
        </div>
      </section>

      <section className="section alt">
        <div className="container split">
          <div className="image-panel">
            <Image src="/images/ueber-uns.jpg" alt="Gepflegte Wohnliegenschaft in der Region Zürich" width={1100} height={900} />
          </div>
          <div>
            <p className="eyebrow">Wer wir sind</p>
            <h2>Ein erreichbarer Partner für Eigentümer, Verwaltungen und Bewohner.</h2>
            <p className="muted">
              Für uns bedeutet Hauswartung mehr als einzelne Aufgaben abzuarbeiten. Es geht darum,
              Liegenschaften aufmerksam zu betreuen, kleine Dinge früh zu erkennen und Arbeiten
              sauber auszuführen.
            </p>
            <ul className="check-list">
              <li>
                <CheckCircle2 aria-hidden="true" size={18} />
                <span>Direkter persönlicher Kontakt</span>
              </li>
              <li>
                <CheckCircle2 aria-hidden="true" size={18} />
                <span>Sorgfältige Arbeit in Innen- und Aussenbereichen</span>
              </li>
              <li>
                <CheckCircle2 aria-hidden="true" size={18} />
                <span>Regional verankert in Rümlang und Zürich</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div>
              <p className="eyebrow">Arbeitsweise</p>
              <h2>Worauf Sie sich verlassen können.</h2>
            </div>
            <p>
              Wir arbeiten ruhig, verbindlich und mit Blick für die kleinen Dinge, die eine
              gepflegte Liegenschaft ausmachen.
            </p>
          </div>
          <div className="values-grid">
            {values.map((value) => (
              <article className="value-card" key={value.title}>
                <value.icon aria-hidden="true" size={28} />
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section deep">
        <div className="container cta-band">
          <div>
            <h2>Lassen Sie uns über Ihre Liegenschaft sprechen.</h2>
            <p>Wir beraten ehrlich, unkompliziert und passend zum tatsächlichen Bedarf.</p>
          </div>
          <div className="section-actions">
            <ButtonLink href="/kontakt" icon={ArrowRight}>
              Kontakt aufnehmen
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
