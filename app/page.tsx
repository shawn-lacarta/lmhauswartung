import Image from "next/image";
import { ArrowRight, CheckCircle2, MapPin, Phone } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { company, serviceAreas, services, trustItems, values } from "@/lib/site-data";

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
    areaServed: ["Rümlang", "Zürich", "Zürich Umgebung"],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="hero">
        <div className="hero-image">
          <Image
            src="/images/hero-zuerich.jpeg"
            alt="Wohnliegenschaft in Zürich als Symbol für professionelle Hauswartung"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="hero-content">
          <p className="eyebrow">
            <MapPin aria-hidden="true" size={16} /> Hauswartung aus Rümlang / Zürich
          </p>
          <h1>Zuverlässige Hauswartung in Zürich - persönlich, sauber, unkompliziert.</h1>
          <p className="lead">
            L.M. Hauswartung betreut Liegenschaften mit Reinigung, Unterhalt, Gartenpflege,
            Solardachpflege und Kleinreparaturen. Direkt erreichbar, sorgfältig ausgeführt und lokal
            verankert.
          </p>
          <div className="hero-actions">
            <ButtonLink href="/kontakt" icon={ArrowRight}>
              Offerte anfragen
            </ButtonLink>
            <ButtonLink href="/dienstleistungen" icon={CheckCircle2} variant="secondary">
              Unsere Dienstleistungen
            </ButtonLink>
          </div>
          <div className="hero-meta">
            <span>Mo - Fr 08:00 - 17:00</span>
            <span>Samstag nach Vereinbarung</span>
            <span>{company.phone}</span>
          </div>
        </div>
      </section>

      <section className="section compact">
        <div className="container trust-grid">
          {trustItems.map((item) => (
            <div className="trust-item" key={item.title}>
              <item.icon aria-hidden="true" size={26} />
              <strong>{item.title}</strong>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SectionHeader
            eyebrow="Leistungen"
            title="Alles Wichtige rund um Ihre Liegenschaft."
            text="Klare Zuständigkeiten, verlässliche Ausführung und kurze Wege für Eigentümer, Verwaltungen und Bewohner."
          />
          <div className="services-grid">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">Warum L.M. Hauswartung?</p>
            <h2>Klein genug für persönlichen Kontakt, professionell genug für verlässliche Abläufe.</h2>
            <p className="muted">
              Wir kümmern uns um Aufgaben, die im Alltag einer Liegenschaft schnell liegen bleiben:
              Reinigung, Pflege, Kontrolle und kleinere Unterhaltsarbeiten. Eigentümer,
              Verwaltungen und Bewohner erhalten einen Ansprechpartner, der zuhört und anpackt.
            </p>
            <div className="section-actions">
              <ButtonLink href="/ueber-uns" icon={ArrowRight} variant="light">
                Mehr über uns
              </ButtonLink>
            </div>
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

      <section className="section alt">
        <div className="container area-band">
          <div>
            <p className="eyebrow">Regional</p>
            <h2>Ihre Hauswartung aus der Region Zürich.</h2>
            <p className="muted">
              L.M. Hauswartung ist in Rümlang zuhause und betreut Kundinnen und Kunden in Zürich und
              Umgebung. Weitere Einsätze werden nach Absprache geplant.
            </p>
            <ul className="area-list">
              {serviceAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>
          <div className="stat-stack">
            <div className="stat">
              <strong>Rümlang</strong>
              <span>Adresse: {company.address}</span>
            </div>
            <div className="stat">
              <strong>Zürich & Umgebung</strong>
              <span>Lokale Betreuung für Liegenschaften und Aussenbereiche</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="image-panel">
            <Image src="/images/ueber-uns.jpg" alt="Gepflegte Wohnanlage mit Terrassen und Aussenbereich" width={1100} height={900} />
          </div>
          <div>
            <p className="eyebrow">Über uns</p>
            <h2>Ein engagiertes Team für gepflegte Immobilien.</h2>
            <p className="muted">
              Bei L.M. Hauswartung stehen Zuverlässigkeit, persönliche Betreuung und eine saubere
              Ausführung im Mittelpunkt. Wir arbeiten bodenständig, direkt und mit dem Anspruch,
              dass Ihre Liegenschaft jederzeit einen guten Eindruck macht.
            </p>
            <div className="section-actions">
              <ButtonLink href="/ueber-uns" icon={ArrowRight} variant="light">
                Das Team kennenlernen
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section deep">
        <div className="container cta-band">
          <div>
            <h2>Sie suchen eine zuverlässige Betreuung für Ihre Liegenschaft?</h2>
            <p>Gerne besprechen wir Ihre Situation und erstellen eine unverbindliche Offerte.</p>
          </div>
          <div className="section-actions">
            <ButtonLink href="/kontakt" icon={ArrowRight}>
              Offerte anfragen
            </ButtonLink>
            <a className="button-secondary" href={company.phoneHref}>
              <Phone aria-hidden="true" size={18} />
              Anrufen
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
