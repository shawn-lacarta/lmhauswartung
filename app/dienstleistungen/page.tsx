import type { Metadata } from "next";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Dienstleistungen",
  description:
    "Reinigung & Unterhalt, Gartenpflege, Solardachpflege und Kleinreparaturen von L.M. Hauswartung aus Rümlang. In Zürich und schweizweit auf Anfrage."
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
        </div>
      </section>

      <section className="section alt">
        <div className="container service-bento">
          {services.map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index} />
          ))}
        </div>
      </section>
    </>
  );
}
