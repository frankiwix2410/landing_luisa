import { HORARIO } from "@/lib/site";
import WhatsAppCTA from "./WhatsAppCTA";

/* Ficha editorial de la cabecera, con los datos verificados de la titular. */
const FICHA = [
  { rotulo: "Ejercicio", dato: "Más de 20 años" },
  { rotulo: "Formación", dato: "Abogada y Doctora en Ciencias Políticas " },
  { rotulo: "Ordenamiento", dato: "Derecho colombiano" },
  { rotulo: "Atención", dato: "Virtual, Colombia y exterior" },
];

export default function Portada() {
  return (
    <section id="portada" className="border-b border-rule bg-paper">
      <div className="animate-rise mx-auto max-w-6xl px-5 pt-32 pb-16 sm:px-8 sm:pt-40 sm:pb-20 lg:pt-44 lg:pb-24">
        <p className="folio text-brass">Abogada · Derecho colombiano</p>

        <h1 className="mt-8 font-serif text-[3rem] leading-[0.95] tracking-tight text-ink sm:text-[5rem] lg:text-[6.5rem]">
          Dra. Luisa
          <span className="block">Salazar Pérez</span>
        </h1>

        <div className="mt-12 grid gap-10 border-t border-rule pt-10 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
          <div>
            <p className="font-serif text-[1.75rem] leading-snug text-brass italic sm:text-[2.25rem]">
              Tu tranquilidad legal, mi compromiso
            </p>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft">
              Asesoría y acompañamiento jurídico en Derecho de Familia, Derecho
              Administrativo y Derecho Penal, para clientes en Colombia y en el
              exterior.
            </p>

            <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <WhatsAppCTA mensaje="Hola, Dra. Luisa. Necesito asesoría jurídica sobre un asunto en Colombia.">
                Solicitar consulta
              </WhatsAppCTA>
              <p className="text-sm text-ink-soft">{HORARIO}</p>
            </div>
          </div>

          {/* Ficha tipo cabecera de publicación */}
          <dl className="grid grid-cols-1 gap-px self-start border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-1">
            {FICHA.map(({ rotulo, dato }) => (
              <div key={rotulo} className="bg-paper px-6 py-5">
                <dt className="folio text-[10px] text-brass">{rotulo}</dt>
                <dd className="mt-2 font-serif text-lg text-ink">{dato}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
