import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import {
  LOCALES,
  getDiccionario,
  hasLocale,
  rutaLocal,
  type Locale,
} from "@/i18n";
import { garamond, lato } from "@/lib/fuentes";
import {
  SITE,
  WHATSAPP_NUMBER_E164,
  WHATSAPP_URL,
  absoluteUrl,
  serializarJsonLd,
} from "@/lib/site";

// Solo existen los idiomas declarados; /fr o cualquier otro prefijo es 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = getDiccionario(lang);

  return {
    // Sin esto Next no puede construir las URL absolutas que exigen Open Graph,
    // hreflang y la URL canónica; WhatsApp descarta una imagen relativa.
    metadataBase: new URL(SITE.url),
    title: {
      default: t.meta.titulo,
      // Las páginas de área ponen solo su título; la marca se agrega aquí.
      template: `%s | ${t.comun.nombre}`,
    },
    description: t.meta.descripcion,
    keywords: t.meta.keywords,
    authors: [{ name: SITE.titular, url: SITE.url }],
    creator: SITE.titular,
    applicationName: t.comun.nombre,
    category: "legal",
    manifest: "/site.webmanifest",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#12281f",
};

/**
 * Grafo de identidad para buscadores: quién es la titular, qué servicios presta
 * y cómo contactarla. Los @id son los mismos en ambos idiomas porque describen
 * a la misma persona. Sin dirección física: la atención es virtual e inventar
 * una se penaliza.
 */
function grafoIdentidad(lang: Locale) {
  const t = getDiccionario(lang);
  const despacho = absoluteUrl("/#despacho");
  const titular = absoluteUrl("/#luisa-salazar-perez");
  const telefono = `+${WHATSAPP_NUMBER_E164}`;
  const inicio = absoluteUrl(rutaLocal(lang));
  const areas = t.areas.lista;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LegalService",
        "@id": despacho,
        name: `${t.comun.nombre} — ${t.comun.profesion}`,
        url: inicio,
        description: t.meta.descripcion,
        slogan: t.comun.lema,
        image: absoluteUrl(SITE.imagen),
        logo: absoluteUrl(SITE.logo),
        telephone: telefono,
        knowsLanguage: "es",
        areaServed: [
          { "@type": "Country", name: t.jsonLd.colombia },
          { "@type": "Country", name: t.jsonLd.estadosUnidos },
          { "@type": "City", name: "Miami" },
        ],
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "18:00",
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: t.jsonLd.contacto,
          telephone: telefono,
          url: WHATSAPP_URL,
          availableLanguage: "Spanish",
          areaServed: ["CO", "US"],
        },
        founder: { "@id": titular },
        knowsAbout: areas.map((area) => area.titulo),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: t.jsonLd.catalogo,
          itemListElement: areas.map((area) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: area.titulo,
              description: area.metaDescripcion,
              url: absoluteUrl(rutaLocal(lang, `/${area.slug}`)),
            },
          })),
        },
      },
      {
        "@type": "Person",
        "@id": titular,
        name: SITE.titular,
        honorificPrefix: t.comun.tratamiento,
        jobTitle: t.comun.profesion,
        description: t.perfil.parrafos[0],
        url: inicio,
        telephone: telefono,
        knowsLanguage: "es",
        worksFor: { "@id": despacho },
        knowsAbout: [...areas.map((area) => area.titulo), ...t.jsonLd.saberes],
        alumniOf: [
          { "@type": "CollegeOrUniversity", name: "Universidad Libre de Barranquilla" },
          { "@type": "CollegeOrUniversity", name: "Universidad URBE de Venezuela" },
        ],
        hasCredential: t.perfil.formacion.map(({ titulo, detalle }) => ({
          "@type": "EducationalOccupationalCredential",
          name: titulo,
          description: detalle,
        })),
      },
      {
        "@type": "WebSite",
        "@id": absoluteUrl("/#sitio"),
        url: SITE.url,
        name: t.comun.nombre,
        inLanguage: [...LOCALES],
        publisher: { "@id": despacho },
      },
    ],
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <html
      lang={lang}
      data-scroll-behavior="smooth"
      className={`${garamond.variable} ${lato.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-paper font-sans text-ink">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: serializarJsonLd(grafoIdentidad(lang)) }}
        />
        {children}
      </body>
    </html>
  );
}
