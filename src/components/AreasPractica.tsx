import Link from "next/link";
import { rutaLocal, type Diccionario, type Locale } from "@/i18n";
import { AREA_ICONOS } from "@/lib/site";
import SeccionTitulo from "./SeccionTitulo";
import WhatsAppCTA from "./WhatsAppCTA";

/** Servicios que se muestran en la portada; la lista completa está en cada área. */
const SERVICIOS_EN_RESUMEN = 4;

/**
 * Resumen de cada área en la portada. El detalle completo vive en su página
 * propia: así las dos URL no compiten en Google con el mismo texto y la
 * portada pasa autoridad a cada área con un enlace descriptivo.
 *
 * Toda la tarjeta es clicable sin anidar enlaces (HTML inválido): el enlace
 * del título se estira sobre la tarjeta con un ::after, y el botón de WhatsApp
 * queda por encima de esa capa con `relative z-10`.
 */
export default function AreasPractica({
  t,
  lang,
}: {
  t: Diccionario;
  lang: Locale;
}) {
  const { areas } = t;

  return (
    <section
      id="areas"
      aria-labelledby="areas-titulo"
      className="border-b border-rule bg-paper py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SeccionTitulo
          folio="03"
          seccion={t.comun.seccion}
          rotulo={areas.rotulo}
          titulo={areas.titulo}
          entrada={areas.entrada}
          id="areas-titulo"
        />

        <div className="mt-16 grid gap-px border border-rule bg-rule lg:grid-cols-3">
          {areas.lista.map((area) => {
            const Icon = AREA_ICONOS[area.clave];

            return (
              <article
                key={area.clave}
                id={area.slug}
                className="group relative flex flex-col bg-paper px-7 py-10 transition-colors duration-300 hover:bg-paper-alt sm:px-9"
              >
                <div className="flex items-center gap-4">
                  <span
                    aria-hidden="true"
                    className="font-serif text-3xl leading-none text-brass"
                  >
                    {area.folio}
                  </span>
                  <span className="h-px flex-1 bg-rule transition-colors duration-300 group-hover:bg-brass/40" />
                  <Icon
                    className="size-6 shrink-0 text-brass transition-transform duration-300 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="mt-6 font-serif text-[1.75rem] leading-tight text-ink sm:text-[2rem]">
                  <Link
                    href={rutaLocal(lang, `/${area.slug}`)}
                    className="transition-colors duration-200 group-hover:text-brass after:absolute after:inset-0 after:content-[''] focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:-outline-offset-4 focus-visible:after:outline-brass focus-visible:after:outline-solid"
                  >
                    {area.titulo}
                  </Link>
                </h3>

                <p className="mt-4 text-base leading-relaxed text-ink-soft">
                  {area.entrada}
                </p>

                <ul className="mt-6 border-t border-rule">
                  {area.servicios.slice(0, SERVICIOS_EN_RESUMEN).map((servicio) => (
                    <li
                      key={servicio}
                      className="flex items-start gap-3 border-b border-rule py-2.5 text-[15px] text-ink"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2.5 size-1 shrink-0 bg-brass"
                      />
                      {servicio}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-8">
                  <WhatsAppCTA
                    lang={lang}
                    variant="enlace"
                    mensaje={areas.mensaje(area.titulo)}
                    className="relative z-10"
                  >
                    {areas.consultar}
                  </WhatsAppCTA>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
