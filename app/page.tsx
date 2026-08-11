import Image from "next/image";
import { ArrowRight, CheckCircle2, MapPin, Phone } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { ServiceCard } from "@/components/ServiceCard";
import { company, serviceAreas, services } from "@/lib/site-data";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: company.name,
    url: company.url,
    telephone: company.phone,
    email: company.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Krummgasse 2A",
      postalCode: "8153",
      addressLocality: "Rümlang",
      addressCountry: "CH"
    },
    areaServed: ["Rümlang", "Zürich", "Zürich Umgebung", "Schweiz nach Absprache"],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00"
      }
    ],
    priceRange: "CHF"
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <section className="home-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <MapPin aria-hidden="true" size={16} /> Hauswartung · Zürich · Schweiz auf Anfrage
            </p>
            <h1>Ihre Liegenschaft. Zuverlässig betreut.</h1>
            <p className="lead">
              L.M. Hauswartung kümmert sich um Reinigung, Gartenpflege, Solardachpflege und
              Kleinreparaturen für gepflegte Wohnliegenschaften in Rümlang, Zürich und auf Anfrage
              in der ganzen Schweiz.
            </p>
            <div className="hero-actions">
              <ButtonLink href="/kontakt" icon={ArrowRight}>
                Offerte anfragen
              </ButtonLink>
              <ButtonLink href="/dienstleistungen" icon={CheckCircle2} variant="light">
                Leistungen ansehen
              </ButtonLink>
            </div>
          </div>

          <div className="hero-visual" aria-label="Bildkomposition Liegenschaftsbetreuung">
            <div className="hero-photo">
              <Image
                src="/images/hero-zuerich.jpeg"
                alt="Zürcher Wohnumfeld als regionaler Bezug für L.M. Hauswartung"
                fill
                priority
                sizes="(max-width: 1080px) 100vw, 48vw"
              />
            </div>
            <div className="hero-card">
              <span>Für Eigentümer und Verwaltungen</span>
              <strong>Hauswartung aus Rümlang</strong>
              <ul className="hero-service-list">
                {services.map((service) => (
                  <li key={service.slug}>
                    {service.title}
                    <a href={`/dienstleistungen/${service.slug}`}>Details</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-header">
            <div>
              <p className="eyebrow">Leistungen</p>
              <h2>Vier Bereiche, ein sauberer Ablauf.</h2>
            </div>
            <p>
              Die wichtigsten Aufgaben rund um Ihre Liegenschaft sind klar gebündelt. So finden Sie
              schnell die passende Unterstützung und können direkt eine Offerte anfragen.
            </p>
          </div>
          <div className="service-bento">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="container story-grid">
          <div>
            <p className="eyebrow">Warum L.M. Hauswartung?</p>
            <h2>Betreuung, die im Alltag funktioniert.</h2>
            <p>
              Eine gute Hauswartung fällt vor allem dann auf, wenn alles zuverlässig erledigt ist:
              saubere Zugänge, gepflegte Aussenbereiche und kleine Arbeiten, die nicht liegen
              bleiben.
            </p>
            <ul className="benefit-list">
              <li>
                <span>01</span>
                <div>
                  <strong>Persönlicher Ansprechpartner</strong>
                  <p>Kurze Wege, klare Rückmeldungen und direkte Abstimmung.</p>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <strong>Sorgfältige Ausführung</strong>
                  <p>Reinigung, Pflege und Unterhalt mit Blick für Details.</p>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <strong>Unkomplizierte Zusammenarbeit</strong>
                  <p>Passende Lösungen für Eigentümer, Verwaltungen und Privatkunden.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="story-image">
            <Image
              src="/images/reinigung-unterhalt.jpg"
              alt="Sauber betreuter Innenbereich einer Wohnliegenschaft"
              fill
              sizes="(max-width: 1080px) 100vw, 44vw"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container region-panel">
          <div>
            <p className="eyebrow">Einsatzgebiet</p>
            <h2>Rümlang als Ausgangspunkt. Einsätze auch schweizweit.</h2>
            <p className="muted">
              L.M. Hauswartung ist in Rümlang zuhause und betreut viele Liegenschaften in Zürich
              und Umgebung. Auf Anfrage planen wir Einsätze auch in anderen Regionen der Schweiz.
            </p>
            <ul className="area-list">
              {serviceAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>
          <div className="map-card" aria-label="Einsatzgebiet Rümlang, Zürich und schweizweit auf Anfrage">
            <div className="map-pin main">
              <strong>Rümlang</strong>
              <span>{company.address}</span>
            </div>
            <div className="map-pin secondary">
              <strong>Schweizweit</strong>
              <span>Auf Anfrage und nach Absprache</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container about-preview">
          <div>
            <p className="eyebrow">Über uns</p>
            <h2>Ein kleines Team, das erreichbar bleibt.</h2>
            <p className="lead">
              L.M. Hauswartung steht für bodenständige Arbeit, persönlichen Kontakt und
              zuverlässige Betreuung. Wir hören zu, klären den Bedarf und packen dort an, wo Ihre
              Liegenschaft Unterstützung braucht.
            </p>
            <div className="section-actions">
              <ButtonLink href="/ueber-uns" icon={ArrowRight} variant="light">
                Mehr über uns
              </ButtonLink>
            </div>
          </div>
          <div className="about-metrics">
            <div className="metric">
              <span>Kontakt</span>
              <strong>{company.phone}</strong>
            </div>
            <div className="metric">
              <span>Öffnungszeiten</span>
              <strong>Mo - Fr 08:00 - 17:00</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container cta-panel">
          <div>
            <h2>Passt L.M. Hauswartung zu Ihrer Liegenschaft?</h2>
            <p>Schreiben Sie kurz, worum es geht. Wir melden uns persönlich und unkompliziert.</p>
          </div>
          <div className="section-actions">
            <ButtonLink href="/kontakt" icon={ArrowRight}>
              Offerte anfragen
            </ButtonLink>
            <a className="button-secondary" href={company.phoneHref}>
              <Phone aria-hidden="true" size={18} />
              Jetzt anrufen
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
