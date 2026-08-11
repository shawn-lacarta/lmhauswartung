import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Dienstleistungen",
  description:
    "Reinigung & Unterhalt, Solardachpflege, Gartenpflege und Kleinreparaturen von L.M. Hauswartung in Zürich und Rümlang."
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <p className="eyebrow">Dienstleistungen</p>
          <h1>Hauswartung, Reinigung und Unterhalt aus einer Hand.</h1>
          <p>
            L.M. Hauswartung kombiniert persönliches Engagement mit fachgerechter Ausführung. Die
            Leistungen werden passend zur Liegenschaft und nach Absprache geplant.
          </p>
        </div>
      </section>

      <section className="section alt">
        <div className="container services-grid">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container detail-list">
          {services.map((service) => (
            <article className="service-detail" id={service.slug} key={service.slug}>
              <div className="image-panel">
                <Image src={service.image} alt={service.alt} width={900} height={640} />
              </div>
              <div>
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
                    Unverbindlich anfragen
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
