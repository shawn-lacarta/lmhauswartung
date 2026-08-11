import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { company } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktieren Sie L.M. Hauswartung in Rümlang für Hauswartung, Reinigung, Gartenpflege, Solardachpflege und Kleinreparaturen im Raum Zürich."
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <p className="eyebrow">Kontakt</p>
          <h1>Unverbindliche Anfrage für Ihre Liegenschaft.</h1>
          <p>
            Schreiben Sie uns kurz, worum es geht. Wir melden uns persönlich und klären die nächsten
            Schritte unkompliziert.
          </p>
        </div>
      </section>

      <section className="section alt">
        <div className="container contact-layout">
          <ContactForm />

          <aside className="contact-panel" aria-label="Kontaktdaten">
            <h2>Direkt erreichbar</h2>
            <p>Für schnelle Abklärungen erreichen Sie L.M. Hauswartung telefonisch oder per E-Mail.</p>
            <a href={company.phoneHref} className="contact-line">
              <Phone aria-hidden="true" size={22} />
              <span>
                Telefon
                <strong>{company.phone}</strong>
              </span>
            </a>
            <a href={company.emailHref} className="contact-line">
              <Mail aria-hidden="true" size={22} />
              <span>
                E-Mail
                <strong>{company.email}</strong>
              </span>
            </a>
            <p className="contact-line">
              <MapPin aria-hidden="true" size={22} />
              <span>
                Adresse
                <strong>{company.address}</strong>
              </span>
            </p>
            <p>
              Öffnungszeiten: Montag bis Freitag 08:00 - 17:00. Samstag nach Vereinbarung.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
