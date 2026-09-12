import { FORMACION, PERFIL_PARRAFOS } from "@/lib/site";
import SeccionTitulo from "./SeccionTitulo";

export default function Perfil() {
  const [apertura, ...resto] = PERFIL_PARRAFOS;

  return (
    <section
      id="perfil"
      aria-labelledby="perfil-titulo"
      className="border-b border-rule bg-paper py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SeccionTitulo
            folio="01"
            rotulo="Perfil profesional"
            titulo="Más de veinte años de ejercicio del Derecho"
            id="perfil-titulo"
          />
        </div>

        <div>
          <p className="capitular font-serif text-xl leading-[1.65] text-ink sm:text-[1.375rem]">
            {apertura}
          </p>

          {resto.map((parrafo) => (
            <p
              key={parrafo}
              className="mt-6 text-lg leading-relaxed text-ink-soft"
            >
              {parrafo}
            </p>
          ))}

          {/* Formación académica */}
          <h3 className="folio mt-14 text-brass">Formación académica</h3>

          <ol className="mt-6 border-t border-rule">
            {FORMACION.map(({ titulo, detalle }, i) => (
              <li
                key={titulo}
                className="flex flex-col gap-1 border-b border-rule py-5 sm:flex-row sm:gap-6"
              >
                <span
                  aria-hidden="true"
                  className="font-sans text-[11px] font-bold tracking-[0.2em] text-brass sm:pt-1.5 sm:w-8"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1">
                  <span className="block font-serif text-xl text-ink">
                    {titulo}
                  </span>
                  <span className="mt-1 block text-base text-ink-soft">
                    {detalle}
                  </span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
