import type { Diccionario, Locale } from "@/i18n";
import WhatsAppCTA from "./WhatsAppCTA";

export default function Portada({ t, lang }: { t: Diccionario; lang: Locale }) {
  const { portada } = t;
  const [nombre, apellidos] = portada.nombre;

  return (
    <section id="portada" className="border-b border-rule bg-paper">
      <div className="animate-rise mx-auto max-w-6xl px-5 pt-32 pb-16 sm:px-8 sm:pt-40 sm:pb-20 lg:pt-44 lg:pb-24">
        <p className="folio text-brass">{portada.rotulo}</p>

        <h1 className="mt-8 font-serif text-[3rem] leading-[0.95] tracking-tight text-ink sm:text-[5rem] lg:text-[6.5rem]">
          {nombre}
          <span className="block">{apellidos}</span>
        </h1>

        <div className="mt-12 grid gap-10 border-t border-rule pt-10 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
          <div>
            <p className="font-serif text-[1.75rem] leading-snug text-brass italic sm:text-[2.25rem]">
              {t.comun.lema}
            </p>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft">
              {portada.bajada}
            </p>

            <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <WhatsAppCTA lang={lang} mensaje={portada.mensaje}>
                {portada.cta}
              </WhatsAppCTA>
              <p className="text-sm text-ink-soft">{t.comun.horario}</p>
            </div>
          </div>

          {/* Ficha tipo cabecera de publicación, con datos verificados de la titular */}
          <dl className="grid grid-cols-1 gap-px self-start border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-1">
            {portada.ficha.map(({ rotulo, dato }) => (
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
