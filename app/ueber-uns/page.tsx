import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { values } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Lernen Sie L.M. Hauswartung aus Rümlang kennen: persönliche Betreuung, Fachkompetenz und zuverlässige Hauswartung in Zürich sowie schweizweit auf Anfrage."
};

export default function AboutPage() {
  return (
    <>
      <section className="section alt about-intro-section">
        <div className="container split">
          <div className="image-stack">
            <p className="eyebrow">Über uns</p>
            <div className="image-panel">
              <Image
                src="/images/ueber-uns.jpg"
                alt="Gepflegte Wohnliegenschaft als Beispiel für professionelle Hauswartung"
                fill
                sizes="(max-width: 1080px) 100vw, 48vw"
              />
            </div>
          </div>
          <div>
            <h2>Ein erreichbarer Partner für Eigentümer und Verwaltungen.</h2>
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
                <span>In Rümlang verankert, schweizweit auf Anfrage unterwegs</span>
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
          </div>
          <div className="value-timeline">
            {values.map((value, index) => (
              <article className="value-card" key={value.title}>
                <span className="service-number">{String(index + 1).padStart(2, "0")}</span>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container cta-panel">
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
