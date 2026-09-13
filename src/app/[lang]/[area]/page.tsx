import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import BotonWhatsAppFlotante from "@/components/BotonWhatsAppFlotante";
import MigasDePan, { migasJsonLd, type Miga } from "@/components/MigasDePan";
import Navbar from "@/components/Navbar";
import PieDePagina from "@/components/PieDePagina";
import SeccionTitulo from "@/components/SeccionTitulo";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import {
  LOCALES,
  enlacesAreas,
  getAreaPorSlug,
  getDiccionario,
  hasLocale,
  metadatosPagina,
  rutaLocal,
  rutasArea,
} from "@/i18n";
import {
  AREA_ICONOS,
  WHATSAPP_URL,
  absoluteUrl,
  serializarJsonLd,
} from "@/lib/site";

/* Página propia por área: una URL que Google puede posicionar para cada
   búsqueda ("abogada de familia en Colombia", "Colombian family law lawyer"),
   algo que un ancla dentro de la portada no consigue. Solo existen las áreas
   de cada diccionario; cualquier otra ruta responde 404. */
export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.flatMap((lang) =>
    getDiccionario(lang).areas.lista.map((area) => ({ lang, area: area.slug })),
  );
}

type Params = { params: Promise<{ lang: string; area: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { lang, area: slug } = await params;
  if (!hasLocale(lang)) return {};
  const area = getAreaPorSlug(lang, slug);
  if (!area) return {};

  return metadatosPagina({
    lang,
    rutas: rutasArea(area.clave),
    titulo: area.metaTitulo,
    descripcion: area.metaDescripcion,
  });
}

export default async function AreaPage({ params }: PageProps<"/[lang]/[area]">) {
  const { lang, area: slug } = await params;
  if (!hasLocale(lang)) notFound();
  const area = getAreaPorSlug(lang, slug);
  if (!area) notFound();

  const t = getDiccionario(lang);
  const p = t.paginaArea;
  const Icon = AREA_ICONOS[area.clave];
  const rutas = rutasArea(area.clave);
  const ruta = rutas[lang];
  const inicio = rutaLocal(lang);
  const otras = t.areas.lista.filter((otra) => otra.clave !== area.clave);

  const migas: Miga[] = [
    { label: p.inicio, href: inicio },
    { label: p.areas, href: `${inicio}#areas` },
    { label: area.titulo, href: ruta },
  ];

  const servicioJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": absoluteUrl(`${ruta}#servicio`),
    name: area.metaTitulo,
    serviceType: area.titulo,
    description: area.metaDescripcion,
    url: absoluteUrl(ruta),
    inLanguage: lang,
    provider: { "@id": absoluteUrl("/#despacho") },
    areaServed: [
      { "@type": "Country", name: t.jsonLd.colombia },
      { "@type": "Country", name: t.jsonLd.estadosUnidos },
    ],
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: WHATSAPP_URL,
      availableLanguage: "Spanish",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: area.titulo,
      itemListElement: area.servicios.map((servicio) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: servicio },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializarJsonLd([servicioJsonLd, migasJsonLd(migas)]),
        }}
      />

      <a
        href="#servicios"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-forest focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-paper"
      >
        {t.comun.saltar}
      </a>

      <Navbar
        lang={lang}
        comun={t.comun}
        nav={t.nav}
        menu={t.menu}
        areas={enlacesAreas(lang)}
        alternas={rutas}
      />

      <main className="flex-1">
        {/* Cabecera del área */}
        <section className="border-b border-rule bg-paper">
          <div className="animate-rise mx-auto max-w-6xl px-5 pt-32 pb-16 sm:px-8 sm:pt-40 sm:pb-20 lg:pt-44 lg:pb-24">
            <MigasDePan items={migas} etiqueta={t.comun.rutaNavegacion} />

            <p className="folio flex items-center gap-3 text-brass">
              <Icon className="size-4 shrink-0" aria-hidden="true" />
              <span>
                <span aria-hidden="true">{area.folio}</span>
                <span aria-hidden="true" className="mx-2.5 opacity-60">
                  —
                </span>
                {t.comun.nombre} · {t.comun.profesion}
              </span>
            </p>

            <h1 className="mt-8 font-serif text-[2.75rem] leading-[0.98] tracking-tight text-ink sm:text-[4.25rem] lg:text-[5.25rem]">
              {area.titulo}
              <span className="block text-brass italic">{p.enPais}</span>
            </h1>

            <div className="mt-12 grid gap-10 border-t border-rule pt-10 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
              <p className="font-serif text-xl leading-[1.6] text-ink sm:text-[1.5rem]">
                {area.entrada}
              </p>

              <div className="flex flex-col items-start gap-5">
                <WhatsAppCTA lang={lang} mensaje={t.areas.mensaje(area.titulo)}>
                  {p.cta}
                </WhatsAppCTA>
                <p className="text-sm text-ink-soft">{t.comun.horario}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Servicios del área */}
        <section
          id="servicios"
          aria-labelledby="servicios-titulo"
          className="border-b border-rule bg-paper-alt py-20 sm:py-24 lg:py-28"
        >
          <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SeccionTitulo
                folio="01"
                seccion={t.comun.seccion}
                rotulo={p.serviciosRotulo}
                titulo={p.serviciosTitulo(area.titulo)}
                id="servicios-titulo"
              />
            </div>

            <div>
              <p className="text-lg leading-relaxed text-ink-soft">{area.intro}</p>

              <ul className="mt-6 sm:columns-2 sm:gap-x-10">
                {area.servicios.map((servicio) => (
                  <li
                    key={servicio}
                    className="flex break-inside-avoid items-start gap-3 border-b border-rule py-2.5 text-base text-ink"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2.5 size-1 shrink-0 bg-brass"
                    />
                    {servicio}
                  </li>
                ))}
              </ul>

              <p className="mt-8 font-serif text-lg leading-relaxed text-ink-soft italic">
                {area.cierre}
              </p>
            </div>
          </div>
        </section>

        {/* Atención desde el exterior */}
        <section
          aria-labelledby="exterior-titulo"
          className="bg-forest py-20 sm:py-24 lg:py-28"
        >
          <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-20">
            <SeccionTitulo
              folio="02"
              seccion={t.comun.seccion}
              rotulo={p.exteriorRotulo}
              titulo={p.exteriorTitulo}
              tono="oscuro"
              id="exterior-titulo"
            />

            <div>
              {t.exterior.parrafos.slice(0, 2).map((parrafo, i) => (
                <p
                  key={parrafo}
                  className={
                    i === 0
                      ? "font-serif text-xl leading-[1.6] text-paper sm:text-[1.5rem]"
                      : "mt-6 text-lg leading-relaxed text-paper/75"
                  }
                >
                  {parrafo}
                </p>
              ))}

              <WhatsAppCTA
                lang={lang}
                variant="contornoClaro"
                mensaje={p.mensajeExterior(area.titulo)}
                className="mt-10"
              >
                {p.exteriorCta}
              </WhatsAppCTA>
            </div>
          </div>
        </section>

        {/* Otras áreas: enlaces internos entre las páginas de área */}
        <section
          aria-labelledby="otras-areas-titulo"
          className="border-b border-rule bg-paper py-20 sm:py-24 lg:py-28"
        >
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <SeccionTitulo
              folio="03"
              seccion={t.comun.seccion}
              rotulo={p.otrasRotulo}
              titulo={p.otrasTitulo}
              id="otras-areas-titulo"
            />

            <ul className="mt-14 grid gap-px border border-rule bg-rule md:grid-cols-2">
              {otras.map((otra) => {
                const OtraIcon = AREA_ICONOS[otra.clave];
                return (
                  <li key={otra.clave} className="bg-paper">
                    <Link
                      href={rutaLocal(lang, `/${otra.slug}`)}
                      className="group flex h-full flex-col px-7 py-9 transition-colors duration-200 hover:bg-paper-alt"
                    >
                      <span className="flex items-center gap-3 text-brass">
                        <OtraIcon className="size-5" aria-hidden="true" />
                        <span
                          aria-hidden="true"
                          className="font-serif text-2xl leading-none"
                        >
                          {otra.folio}
                        </span>
                      </span>
                      <span className="mt-5 font-serif text-2xl text-ink sm:text-[1.75rem]">
                        {otra.titulo}
                      </span>
                      <span className="mt-3 text-base leading-relaxed text-ink-soft">
                        {otra.entrada}
                      </span>
                      <span className="mt-6 inline-flex items-center gap-2 text-[13px] font-bold tracking-[0.16em] text-brass uppercase">
                        {p.verArea}
                        <ArrowRight
                          className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </main>

      <PieDePagina t={t} lang={lang} alternas={rutas} />
      <BotonWhatsAppFlotante t={t} lang={lang} />
    </>
  );
}
