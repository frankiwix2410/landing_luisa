import { Plus } from "lucide-react";
import { PREGUNTAS } from "@/lib/site";
import SeccionTitulo from "./SeccionTitulo";
import WhatsAppCTA from "./WhatsAppCTA";

/**
 * Acordeón con <details>/<summary> nativos: accesible por teclado sin JS y con
 * las respuestas siempre presentes en el HTML para buscadores.
 */
export default function Preguntas() {
  return (
    <section
      id="preguntas"
      aria-labelledby="preguntas-titulo"
      className="border-b border-rule bg-paper-alt py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SeccionTitulo
            folio="07"
            rotulo="Preguntas frecuentes"
            titulo="Antes de escribir"
            id="preguntas-titulo"
          />
          <WhatsAppCTA
            variant="enlace"
            mensaje="Hola, Dra. Luisa. Tengo una pregunta que no aparece en la página."
            className="mt-8"
          >
            Mi pregunta no está aquí
          </WhatsAppCTA>
        </div>

        <div className="border-t border-ink/15">
          {PREGUNTAS.map(({ pregunta, respuesta }) => (
            <details
              key={pregunta}
              className="group border-b border-ink/15 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-left transition-colors duration-200 hover:text-brass">
                <h3 className="font-serif text-xl text-ink transition-colors duration-200 group-hover:text-brass sm:text-2xl">
                  {pregunta}
                </h3>
                <Plus
                  className="mt-1 size-5 shrink-0 text-brass transition-transform duration-200 group-open:rotate-45"
                  aria-hidden="true"
                />
              </summary>
              <p className="pb-7 text-lg leading-relaxed text-ink-soft">
                {respuesta}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
