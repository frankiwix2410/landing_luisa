import { Plane } from "lucide-react";
import { EXTERIOR_PARRAFOS } from "@/lib/site";
import SeccionTitulo from "./SeccionTitulo";
import WhatsAppCTA from "./WhatsAppCTA";

export default function AtencionExterior() {
  const [apertura, ...resto] = EXTERIOR_PARRAFOS;

  return (
    <section
      id="exterior"
      aria-labelledby="exterior-titulo"
      className="bg-forest py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-20">
        <div>
          <Plane className="mb-8 size-7 text-gold" aria-hidden="true" />
          <SeccionTitulo
            folio="05"
            rotulo="Clientes en el exterior"
            titulo="Atención para clientes en Miami"
            tono="oscuro"
            id="exterior-titulo"
          />
        </div>

        <div>
          <p className="font-serif text-xl leading-[1.6] text-paper sm:text-[1.5rem]">
            {apertura}
          </p>

          {resto.map((parrafo) => (
            <p
              key={parrafo}
              className="mt-6 text-lg leading-relaxed text-paper/75"
            >
              {parrafo}
            </p>
          ))}

          <WhatsAppCTA
            variant="contornoClaro"
            mensaje="Hola, Dra. Luisa. Vivo en Estados Unidos y necesito una consulta virtual sobre un asunto en Colombia."
            className="mt-10"
          >
            Solicitar consulta virtual
          </WhatsAppCTA>
        </div>
      </div>
    </section>
  );
}
