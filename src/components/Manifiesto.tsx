import type { Diccionario } from "@/i18n";

export default function Manifiesto({ t }: { t: Diccionario }) {
  const { manifiesto } = t;

  return (
    <section
      id="sobre-mi"
      aria-labelledby="manifiesto-titulo"
      className="border-b border-rule bg-paper-alt py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="folio text-brass">
          <span aria-hidden="true">02</span>
          <span aria-hidden="true" className="mx-2.5 opacity-60">
            —
          </span>
          {manifiesto.rotulo}
        </p>

        <blockquote className="mt-8 max-w-4xl border-l-2 border-brass pl-6 sm:pl-10">
          <p
            id="manifiesto-titulo"
            className="font-serif text-[1.625rem] leading-[1.28] text-ink italic sm:text-4xl lg:text-[2.75rem]"
          >
            {manifiesto.cita}
          </p>
        </blockquote>

        <div className="mt-12 grid gap-8 border-t border-rule pt-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {manifiesto.parrafos.map((parrafo) => (
            <p key={parrafo} className="text-lg leading-relaxed text-ink-soft">
              {parrafo}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
