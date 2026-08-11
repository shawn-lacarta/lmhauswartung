import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { company, navigation } from "@/lib/site-data";

export function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand" aria-label="L.M. Hauswartung Startseite">
          <Image src="/images/logo.png" alt="Logo von L.M. Hauswartung" width={466} height={186} priority />
        </Link>

        <nav className="nav" aria-label="Hauptnavigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <ButtonLink href="/kontakt" icon={ArrowUpRight}>
            Offerte anfragen
          </ButtonLink>
        </div>

        <details className="mobile-menu">
          <summary className="icon-button" aria-label="Navigation öffnen">
            <Menu aria-hidden="true" size={22} />
          </summary>
          <div className="mobile-menu-panel">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <a href={company.phoneHref}>Jetzt anrufen</a>
            <Link href="/kontakt">Offerte anfragen</Link>
          </div>
        </details>
      </div>
    </header>
  );
}
