import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { company, navigation, services } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Image src="/images/logo.png" alt="Logo von L.M. Hauswartung" width={466} height={186} />
            <p>
              Hauswartung, Reinigung, Gartenpflege und Unterhalt für gepflegte Liegenschaften in
              Rümlang, Zürich und Umgebung.
            </p>
          </div>

          <div className="footer-column">
            <h2>Navigation</h2>
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <Link href="/datenschutz">Datenschutz</Link>
            <Link href="/agb">AGB</Link>
          </div>

          <div className="footer-column">
            <h2>Dienstleistungen</h2>
            {services.map((service) => (
              <Link key={service.slug} href={`/dienstleistungen/${service.slug}`}>
                {service.title}
              </Link>
            ))}
          </div>

          <div className="footer-column">
            <h2>Kontakt</h2>
            <a href={company.phoneHref} className="footer-contact">
              <Phone aria-hidden="true" size={18} />
              <strong>{company.phone}</strong>
            </a>
            <a href={company.emailHref} className="footer-contact">
              <Mail aria-hidden="true" size={18} />
              <strong>{company.email}</strong>
            </a>
            <p className="footer-contact">
              <MapPin aria-hidden="true" size={18} />
              <strong>{company.address}</strong>
            </p>
            <p>{company.hours}</p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>Copyright © 2026 L.M. Hauswartung. Alle Rechte vorbehalten.</span>
          <span>Rümlang / Zürich</span>
        </div>
      </div>
    </footer>
  );
}
