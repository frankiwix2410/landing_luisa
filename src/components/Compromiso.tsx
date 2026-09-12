import { COMPROMISO } from "@/lib/site";
import SeccionTitulo from "./SeccionTitulo";

export default function Compromiso() {
  return (
    <section
      id="compromiso"
      aria-labelledby="compromiso-titulo"
      className="border-b border-rule bg-paper py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SeccionTitulo
          folio="06"
          rotulo="Nuestro compromiso"
          titulo="Cómo se atiende cada asunto"
          id="compromiso-titulo"
        />

        <dl className="mt-14 grid gap-px border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-3">
          {COMPROMISO.map(({ titulo, texto }, i) => (
            <div key={titulo} className="bg-paper px-7 py-9">
              <span
                aria-hidden="true"
                className="font-sans text-[11px] font-bold tracking-[0.2em] text-brass"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <dt className="mt-4 font-serif text-2xl text-ink">{titulo}</dt>
              <dd className="mt-3 text-base leading-relaxed text-ink-soft">
                {texto}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
