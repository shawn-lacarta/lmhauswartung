import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Dienstleistungen",
  description:
    "Reinigung & Unterhalt, Gartenpflege, Solardachpflege und Kleinreparaturen von L.M. Hauswartung in Zürich und Rümlang."
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <div>
            <p className="eyebrow">Leistungen</p>
            <h1>Alles für gepflegte Liegenschaften.</h1>
          </div>
          <p>
            Klare Leistungen, kurze Abstimmung und zuverlässige Ausführung für Eigentümer,
            Verwaltungen, Vermieter und Privatkunden im Raum Zürich.
          </p>
        </div>
      </section>

      <section className="section alt">
        <div className="container service-bento">
          {services.map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container service-detail-grid">
          {services.map((service) => (
            <article className="service-detail" id={service.slug} key={service.slug}>
              <div className="image-panel">
                <Image src={service.image} alt={service.alt} fill sizes="(max-width: 720px) 100vw, 40vw" />
              </div>
              <div className="service-detail-content">
                <p className="eyebrow">{service.title}</p>
                <h2>{service.title}</h2>
                <p className="muted">{service.description}</p>
                <ul className="check-list">
                  {service.points.map((point) => (
                    <li key={point}>
                      <CheckCircle2 aria-hidden="true" size={18} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="section-actions">
                  <ButtonLink href="/kontakt" icon={ArrowRight} variant="light">
                    Offerte anfragen
                  </ButtonLink>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
