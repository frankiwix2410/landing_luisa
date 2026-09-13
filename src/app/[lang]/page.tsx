import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AreasPractica from "@/components/AreasPractica";
import Asesoria from "@/components/Asesoria";
import AtencionExterior from "@/components/AtencionExterior";
import BotonWhatsAppFlotante from "@/components/BotonWhatsAppFlotante";
import Compromiso from "@/components/Compromiso";
import Contacto from "@/components/Contacto";
import FranjaDistancias from "@/components/FranjaDistancias";
import Manifiesto from "@/components/Manifiesto";
import Navbar from "@/components/Navbar";
import Perfil from "@/components/Perfil";
import PieDePagina from "@/components/PieDePagina";
import Portada from "@/components/Portada";
import Preguntas from "@/components/Preguntas";
import {
  RUTAS_INICIO,
  enlacesAreas,
  getDiccionario,
  hasLocale,
  metadatosPagina,
} from "@/i18n";
import { serializarJsonLd } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = getDiccionario(lang);

  return metadatosPagina({
    lang,
    rutas: RUTAS_INICIO,
    titulo: t.meta.titulo,
    descripcion: t.meta.descripcion,
    tituloCompleto: true,
  });
}

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDiccionario(lang);

  /* Solo en la portada, que es donde las preguntas están visibles: Google
     descarta el marcado FAQ que no corresponde al contenido de la página. */
  const preguntasJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: lang,
    mainEntity: t.preguntas.lista.map(({ pregunta, respuesta }) => ({
      "@type": "Question",
      name: pregunta,
      acceptedAnswer: { "@type": "Answer", text: respuesta },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializarJsonLd(preguntasJsonLd) }}
      />

      <a
        href="#perfil"
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
        alternas={RUTAS_INICIO}
      />

      <main className="flex-1">
        <Portada t={t} lang={lang} />
        <FranjaDistancias t={t} />
        <Perfil t={t} />
        <Manifiesto t={t} />
        <AreasPractica t={t} lang={lang} />
        <Asesoria t={t} lang={lang} />
        <AtencionExterior t={t} lang={lang} />
        <Compromiso t={t} />
        <Preguntas t={t} lang={lang} />
        <Contacto t={t} lang={lang} />
      </main>

      <PieDePagina t={t} lang={lang} alternas={RUTAS_INICIO} />
      <BotonWhatsAppFlotante t={t} lang={lang} />
    </>
  );
}
