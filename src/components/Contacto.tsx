import Link from "next/link";
import { Clock, MapPin, Scale } from "lucide-react";
import {
  HORARIO,
  WHATSAPP_NUMBER_DISPLAY,
  WHATSAPP_URL,
} from "@/lib/site";
import SeccionTitulo from "./SeccionTitulo";
import WhatsAppCTA from "./WhatsAppCTA";

const FICHA = [
  {
    Icon: Scale,
    rotulo: "Áreas de práctica",
    dato: "Derecho de Familia · Derecho Administrativo · Derecho Penal",
  },
  {
    Icon: MapPin,
    rotulo: "Atención",
    dato: "Colombia y clientes en el exterior",
  },
  { Icon: Clock, rotulo: "Horario de atención", dato: HORARIO },
];

export default function Contacto() {
  return (
    <section
      id="contacto"
      aria-labelledby="contacto-titulo"
      className="bg-forest py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-20">
        <SeccionTitulo
          folio="08"
          rotulo="Contacto"
          titulo="Escríbeme por WhatsApp"
          entrada="La atención se coordina únicamente por WhatsApp. No se emplean formularios en este sitio."
          tono="oscuro"
          id="contacto-titulo"
        />

        <div>
          <Link
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Escribir por WhatsApp al ${WHATSAPP_NUMBER_DISPLAY} (se abre en una pestaña nueva)`}
            className="inline-block font-serif text-[2.75rem] leading-none tracking-tight text-gold transition-colors duration-200 hover:text-paper sm:text-6xl lg:text-7xl"
          >
            {WHATSAPP_NUMBER_DISPLAY}
          </Link>

          <div className="mt-10">
            <WhatsAppCTA
              variant="contornoClaro"
              mensaje="Hola, Dra. Luisa. Quisiera solicitar una consulta jurídica."
            >
              Abrir WhatsApp
            </WhatsAppCTA>
          </div>

          <dl className="mt-14 border-t border-rule-dark">
            {FICHA.map(({ Icon, rotulo, dato }) => (
              <div
                key={rotulo}
                className="flex flex-col gap-2 border-b border-rule-dark py-6 sm:flex-row sm:items-baseline sm:gap-8"
              >
                <dt className="folio flex items-center gap-2.5 text-[10px] text-gold sm:w-56 sm:shrink-0">
                  <Icon className="size-4 shrink-0" aria-hidden="true" />
                  {rotulo}
                </dt>
                <dd className="text-lg text-paper">{dato}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-12 font-serif text-2xl leading-snug text-gold italic sm:text-[1.75rem]">
            Experiencia, compromiso y resultados — a tu lado, siempre
          </p>
        </div>
      </div>
    </section>
  );
}
