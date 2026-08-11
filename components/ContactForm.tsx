"use client";

import { Send } from "lucide-react";
import { company, services } from "@/lib/site-data";

export function ContactForm() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const body = [
      `Name: ${form.get("name")}`,
      `Firma: ${form.get("company") || "-"}`,
      `E-Mail: ${form.get("email")}`,
      `Telefon: ${form.get("phone") || "-"}`,
      `Dienstleistung: ${form.get("service")}`,
      "",
      "Nachricht:",
      `${form.get("message")}`
    ].join("\n");

    const subject = encodeURIComponent("Anfrage über lm-hauswartung.ch");
    window.location.href = `${company.emailHref}?subject=${subject}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" autoComplete="name" required />
        </div>
        <div className="field">
          <label htmlFor="company">Firma optional</label>
          <input id="company" name="company" autoComplete="organization" />
        </div>
        <div className="field">
          <label htmlFor="email">E-Mail</label>
          <input id="email" name="email" type="email" autoComplete="email" required />
        </div>
        <div className="field">
          <label htmlFor="phone">Telefon</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" />
        </div>
        <div className="field full">
          <label htmlFor="service">Gewünschte Dienstleistung</label>
          <select id="service" name="service" defaultValue="Reinigung & Unterhalt">
            {services.map((service) => (
              <option key={service.slug}>{service.title}</option>
            ))}
            <option>Allgemeine Anfrage</option>
          </select>
        </div>
        <div className="field full">
          <label htmlFor="message">Nachricht</label>
          <textarea
            id="message"
            name="message"
            required
            placeholder="Worum geht es bei Ihrer Liegenschaft?"
          />
        </div>
      </div>
      <button className="button" type="submit">
        <Send aria-hidden="true" size={18} />
        Anfrage senden
      </button>
      <p className="small-text">
        Das Formular öffnet Ihre E-Mail-App mit einer vorbereiteten Anfrage an {company.email}.
      </p>
    </form>
  );
}
