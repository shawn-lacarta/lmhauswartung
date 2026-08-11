import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { company } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktieren Sie L.M. Hauswartung in Rümlang für Hauswartung, Reinigung, Gartenpflege, Solardachpflege und Kleinreparaturen. Einsätze in Zürich und schweizweit auf Anfrage."
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <div>
            <p className="eyebrow">Kontakt</p>
            <h1>Direkt erreichbar für Ihre Liegenschaft.</h1>
          </div>
          <p>
            Rufen Sie uns an oder schreiben Sie per E-Mail. Wir melden uns persönlich und klären die
            nächsten Schritte unkompliziert.
          </p>
        </div>
      </section>

      <section className="section alt">
        <div className="container contact-page">
          <div className="contact-options" aria-label="Kontaktmöglichkeiten">
            <a href={company.phoneHref} className="contact-card primary">
              <span className="contact-card-icon">
                <Phone aria-hidden="true" size={24} />
              </span>
              <span>
                <span>Telefon</span>
                <strong>{company.phone}</strong>
              </span>
            </a>

            <a href={company.emailHref} className="contact-card">
              <span className="contact-card-icon">
                <Mail aria-hidden="true" size={24} />
              </span>
              <span>
                <span>E-Mail</span>
                <strong>{company.email}</strong>
              </span>
            </a>
          </div>

          <div className="contact-info-grid">
            <div className="contact-info-card">
              <MapPin aria-hidden="true" size={24} />
              <div>
                Adresse
                <strong>{company.address}</strong>
              </div>
            </div>

            <div className="contact-info-card">
              <Clock aria-hidden="true" size={24} />
              <div>
                Öffnungszeiten
                <strong>{company.hours}</strong>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
