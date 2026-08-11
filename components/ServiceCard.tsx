import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { services } from "@/lib/site-data";

type Service = (typeof services)[number];

export function ServiceCard({ service, index = 0, className = "" }: { service: Service; index?: number; className?: string }) {
  return (
    <article className={`service-card ${className}`}>
      <Link href={`/dienstleistungen/${service.slug}`} aria-label={`${service.title} ansehen`}>
        <div className="service-card-image">
          <Image src={service.image} alt={service.alt} fill sizes="(max-width: 720px) 100vw, 25vw" />
        </div>
        <div className="service-card-body">
          <span className="service-number">{String(index + 1).padStart(2, "0")}</span>
          <h3>{service.title}</h3>
          <p>{service.summary}</p>
          <span className="text-link">
            Mehr erfahren <ArrowRight aria-hidden="true" size={18} />
          </span>
        </div>
      </Link>
    </article>
  );
}
