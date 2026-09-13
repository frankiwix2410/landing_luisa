import type { Diccionario, Locale } from "@/i18n";
import SeccionTitulo from "./SeccionTitulo";
import WhatsAppCTA from "./WhatsAppCTA";

export default function Asesoria({ t, lang }: { t: Diccionario; lang: Locale }) {
  const { asesoria } = t;

  return (
    <section
      id="asesoria"
      aria-labelledby="asesoria-titulo"
      className="border-b border-rule bg-paper-alt py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SeccionTitulo
            folio="04"
            seccion={t.comun.seccion}
            rotulo={asesoria.rotulo}
            titulo={asesoria.titulo}
            entrada={asesoria.entrada}
            id="asesoria-titulo"
          />
        </div>

        <div>
          <p className="text-lg leading-relaxed text-ink-soft">{asesoria.intro}</p>

          <ol className="mt-8 grid gap-px bg-rule sm:grid-cols-2">
            {asesoria.puntos.map((punto, i) => (
              <li
                key={punto}
                className="flex items-baseline gap-4 bg-paper-alt px-5 py-5"
              >
                <span
                  aria-hidden="true"
                  className="font-sans text-[11px] font-bold tracking-[0.2em] text-brass"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-serif text-lg text-ink">{punto}</span>
              </li>
            ))}
          </ol>

          <WhatsAppCTA
            lang={lang}
            variant="contorno"
            mensaje={asesoria.mensaje}
            className="mt-10"
          >
            {asesoria.cta}
          </WhatsAppCTA>
        </div>
      </div>
    </section>
  );
}
