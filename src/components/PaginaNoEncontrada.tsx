import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getDiccionario, rutaLocal, type Locale } from "@/i18n";
import { AREA_ICONOS } from "@/lib/site";

/** 404 en el idioma de la URL solicitada: /en/... en inglés, el resto en español. */
export default function PaginaNoEncontrada({ lang }: { lang: Locale }) {
  const t = getDiccionario(lang);
  const n = t.noEncontrada;
  const inicio = rutaLocal(lang);

  return (
    <div className="flex min-h-full flex-1 flex-col bg-paper">
      <header className="border-b border-rule">
        <div className="mx-auto flex h-20 max-w-6xl items-center px-5 sm:px-8">
          <Link href={inicio} className="py-2" aria-label={t.comun.irInicio}>
            <span className="block font-serif text-lg leading-none tracking-tight text-ink sm:text-xl">
              Luisa Salazar Pérez
            </span>
            <span className="folio mt-1.5 block text-[10px] text-brass">
              {t.comun.profesion}
            </span>
          </Link>
        </div>
      </header>

      <main className="mx-auto grid w-full max-w-6xl flex-1 content-center gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-20">
        <div className="animate-rise border-b border-rule pb-8 lg:border-r lg:border-b-0 lg:pr-16 lg:pb-0">
          <p
            aria-hidden="true"
            className="font-serif text-[7.5rem] leading-[0.8] tracking-tight text-brass sm:text-[11rem] lg:text-[13rem]"
          >
            404
          </p>
          <p className="folio mt-8 text-[10px] text-brass">{n.rotulo}</p>
        </div>

        <div className="animate-rise lg:self-center">
          <h1 className="font-serif text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
            {n.titulo}
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-soft">
            {n.texto}
          </p>

          <Link
            href={inicio}
            className="mt-8 inline-flex min-h-11 items-center gap-2.5 bg-forest px-7 py-3 text-[13px] font-bold tracking-[0.16em] text-paper uppercase transition-colors duration-200 hover:bg-forest-mid"
          >
            {n.volver}
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>

          <p className="folio mt-12 text-[10px] text-brass">{n.areas}</p>
          <ul className="mt-4 border-t border-rule">
            {t.areas.lista.map((area) => {
              const Icon = AREA_ICONOS[area.clave];
              return (
                <li key={area.clave} className="border-b border-rule">
                  <Link
                    href={rutaLocal(lang, `/${area.slug}`)}
                    className="group flex min-h-12 items-center gap-3.5 py-3 font-serif text-xl text-ink transition-colors duration-200 hover:text-brass"
                  >
                    <Icon className="size-4 shrink-0 text-brass" aria-hidden="true" />
                    {area.titulo}
                    <ArrowRight
                      className="ml-auto size-4 text-brass transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </div>
  );
}
