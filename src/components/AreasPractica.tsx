import { AREAS } from "@/lib/site";
import SeccionTitulo from "./SeccionTitulo";
import WhatsAppCTA from "./WhatsAppCTA";

export default function AreasPractica() {
  return (
    <section
      id="areas"
      aria-labelledby="areas-titulo"
      className="border-b border-rule bg-paper py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SeccionTitulo
          folio="03"
          rotulo="Áreas de práctica"
          titulo="Tres áreas del Derecho colombiano"
          entrada="Cada asunto se analiza de forma individual para determinar las actuaciones jurídicas que correspondan."
          id="areas-titulo"
        />

        <div className="mt-16 border-t border-ink/15">
          {AREAS.map(({ id, folio, titulo, entrada, intro, servicios, cierre, Icon }) => (
            <article
              key={id}
              id={id}
              className="grid gap-8 border-b border-ink/15 py-14 lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)] lg:gap-16"
            >
              <div className="lg:sticky lg:top-28 lg:self-start">
                <div className="flex items-center gap-4">
                  <span
                    aria-hidden="true"
                    className="font-serif text-3xl leading-none text-brass"
                  >
                    {folio}
                  </span>
                  <span className="h-px flex-1 bg-rule lg:hidden" />
                  <Icon className="size-6 shrink-0 text-brass" aria-hidden="true" />
                </div>

                <h3 className="mt-5 font-serif text-[1.75rem] leading-tight text-ink sm:text-[2rem]">
                  {titulo}
                </h3>

                <WhatsAppCTA
                  variant="enlace"
                  mensaje={`Hola, Dra. Luisa. Quisiera una consulta sobre ${titulo}.`}
                  className="mt-6"
                >
                  Consultar esta área
                </WhatsAppCTA>
              </div>

              <div>
                <p className="font-serif text-xl leading-[1.6] text-ink sm:text-[1.375rem]">
                  {entrada}
                </p>

                <p className="mt-7 text-lg leading-relaxed text-ink-soft">
                  {intro}
                </p>

                <ul className="mt-6 sm:columns-2 sm:gap-x-10">
                  {servicios.map((servicio) => (
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
                  {cierre}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
