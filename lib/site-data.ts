import {
  BadgeCheck,
  Hammer,
  Leaf,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  SunMedium,
  UserRoundCheck,
  Wrench
} from "lucide-react";

export const company = {
  name: "L.M. Hauswartung",
  owner: "Nexhmedin Mustafa",
  address: "Krummgasse 2A, 8153 Rümlang",
  phone: "+41 76 222 02 03",
  phoneHref: "tel:+41762220203",
  email: "lm.hauswart@gmail.com",
  emailHref: "mailto:lm.hauswart@gmail.com",
  hours: "Mo - Fr 08:00 - 17:00, Samstag nach Vereinbarung",
  url: "https://www.lm-hauswartung.ch"
};

export const navigation = [
  { label: "Leistungen", href: "/dienstleistungen" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Kontakt", href: "/kontakt" }
];

export const services = [
  {
    title: "Reinigung & Unterhalt",
    slug: "reinigung-unterhalt",
    image: "/images/reinigung-unterhalt.jpg",
    icon: Sparkles,
    summary:
      "Zuverlässige Hauswartung für innen und aussen, damit Ihre Immobilie sauber, gepflegt und einladend bleibt.",
    description:
      "Wir übernehmen regelmässige Reinigungs- und Unterhaltsarbeiten in Wohnliegenschaften, gemeinschaftlichen Bereichen und rund ums Haus. Sauberkeit, Sorgfalt und ein verlässlicher Ablauf stehen dabei im Mittelpunkt.",
    points: [
      "Treppenhausreinigung",
      "Allgemeine Gebäudereinigung",
      "Unterhaltsarbeiten",
      "Pflege gemeinschaftlicher Flächen"
    ],
    alt: "Professionelle Reinigung und Unterhalt in einer Wohnliegenschaft"
  },
  {
    title: "Solardachpflege",
    slug: "solardachpflege",
    image: "/images/solardachpflege.jpeg",
    icon: SunMedium,
    summary:
      "Professionelle Pflege von Solarmodulen für saubere Flächen, bessere Leistung und eine längere Lebensdauer.",
    description:
      "Verschmutzte Solarmodule können weniger effizient arbeiten. L.M. Hauswartung kümmert sich um die sorgfältige Pflege Ihrer Anlage und achtet auf eine fachgerechte Ausführung.",
    points: [
      "Reinigung von Solarmodulen",
      "Schonende Pflege der Anlagenoberfläche",
      "Unterstützung für dauerhaft gute Leistung",
      "Sorgfältige Ausführung nach Absprache"
    ],
    alt: "Solaranlage auf einem modernen Dach"
  },
  {
    title: "Gartenpflege",
    slug: "gartenpflege",
    image: "/images/gartenpflege.jpg",
    icon: Leaf,
    summary:
      "Regelmässige Pflege von Rasen, Hecken, Beeten und Aussenbereichen für ein gepflegtes Zuhause.",
    description:
      "Wir kümmern uns um die Gartenpflege rund um Ihre Liegenschaft und sorgen dafür, dass Aussenbereiche ordentlich, sauber und angenehm nutzbar bleiben.",
    points: ["Rasenpflege", "Heckenpflege", "Pflege von Beeten", "Ordnung in Aussenbereichen"],
    alt: "Gepflegter Gartenbereich bei einer Wohnliegenschaft"
  },
  {
    title: "Kleinreparaturen",
    slug: "kleinreparaturen",
    image: "/images/kleinreparaturen.jpeg",
    icon: Wrench,
    summary:
      "Schnelle Hilfe bei kleinen Schäden und Unterhaltsarbeiten, zuverlässig und unkompliziert erledigt.",
    description:
      "Kleine Reparaturen und laufende Unterhaltsarbeiten erledigen wir sauber, pragmatisch und fachgerecht. So bleiben Mängel nicht lange liegen und Ihre Liegenschaft macht einen gepflegten Eindruck.",
    points: [
      "Kleine Reparaturarbeiten",
      "Unterhalt rund ums Haus",
      "Unkomplizierte Hilfe nach Absprache",
      "Saubere und fachgerechte Ausführung"
    ],
    alt: "Kleinreparatur und Unterhaltsarbeit in einer Liegenschaft"
  }
];

export const trustItems = [
  {
    title: "Persönlich",
    text: "Ein direkter Ansprechpartner für Ihre Liegenschaft.",
    icon: UserRoundCheck
  },
  {
    title: "Zuverlässig",
    text: "Regelmässige Betreuung mit sauberer Ausführung.",
    icon: ShieldCheck
  },
  {
    title: "Sorgfältig",
    text: "Aufmerksam bei Reinigung, Pflege und Unterhalt.",
    icon: BadgeCheck
  },
  {
    title: "Regional",
    text: "Aus Rümlang, regional stark und schweizweit auf Anfrage.",
    icon: MapPin
  }
];

export const values = [
  {
    title: "Zuverlässigkeit",
    text: "Wir halten Abmachungen ein, arbeiten gewissenhaft und informieren klar, wenn etwas Aufmerksamkeit braucht.",
    icon: ShieldCheck
  },
  {
    title: "Fachkompetenz",
    text: "Erfahrene Fachmänner bringen Wissen, Routine und Sorgfalt in die tägliche Arbeit ein.",
    icon: Hammer
  },
  {
    title: "Persönlicher Service",
    text: "Wir hören zu, beraten ehrlich und kümmern uns individuell um Anliegen von Eigentümern und Verwaltungen.",
    icon: Phone
  }
];
