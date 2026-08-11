import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { services } from "@/lib/site-data";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return {};
  }

  return {
    title: service.title,
    description: `${service.title} von L.M. Hauswartung in Zürich und Rümlang. ${service.summary}`
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <p className="eyebrow">Dienstleistung</p>
          <h1>{service.title}</h1>
          <p>{service.summary}</p>
        </div>
      </section>

      <section className="section alt">
        <div className="container split">
          <div className="image-panel">
            <Image src={service.image} alt={service.alt} width={900} height={640} priority />
          </div>
          <div>
            <h2>Was wir übernehmen</h2>
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
              <ButtonLink href="/dienstleistungen" icon={ArrowRight} variant="light">
                Alle Dienstleistungen
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
