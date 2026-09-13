import {
  Building2,
  Gavel,
  HeartHandshake,
  type LucideIcon,
} from "lucide-react";

/* ----------------------------------------------------------------- IDENTIDAD
   Fuente única para todo lo que necesita una URL absoluta: metadatos, URL
   canónica, hreflang, sitemap, robots y datos estructurados. Cambiar de
   dominio es cambiar esta línea (o definir NEXT_PUBLIC_SITE_URL al construir).
   Los textos traducibles viven en src/i18n. */
export const SITE = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://abogadaluizasalazar.com",
  titular: "Luisa Salazar Pérez",
  /** Servidas desde public/ para que su URL sea estable en el JSON-LD. */
  imagen: "/og.jpg",
  logo: "/icon-512.png",
} as const;

/** Vista previa al compartir el enlace (WhatsApp, Facebook, LinkedIn, X). */
export const IMAGEN_COMPARTIR = {
  url: SITE.imagen,
  width: 1200,
  height: 630,
};

/** URL absoluta: las relativas rompen Open Graph y los datos estructurados. */
export function absoluteUrl(path = "/"): string {
  return new URL(path, SITE.url).toString();
}

/** JSON.stringify no escapa `<`; sin esto un texto con `</script>` rompería la página. */
export function serializarJsonLd(datos: unknown): string {
  return JSON.stringify(datos).replace(/</g, "\\u003c");
}

/* ------------------------------------------------------------------ CONTACTO
   Canal único: WhatsApp. El correo facilitado por la titular NO se publica
   (decisión expresa); tampoco hay formularios en el sitio. */
export const WHATSAPP_NUMBER_E164 = "17867604449";
export const WHATSAPP_NUMBER_DISPLAY = "786-760-4449";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER_E164}`;

export function whatsappLink(mensaje?: string): string {
  if (!mensaje) return WHATSAPP_URL;
  return `${WHATSAPP_URL}?text=${encodeURIComponent(mensaje)}`;
}

/* --------------------------------------------------------------------- ÁREAS
   Los iconos son iguales en todos los idiomas, así que viven fuera de los
   diccionarios, indexados por la clave estable de cada área. */
export const AREA_ICONOS: Record<string, LucideIcon> = {
  familia: HeartHandshake,
  administrativo: Building2,
  penal: Gavel,
};
