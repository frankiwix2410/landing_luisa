import Link from "next/link";
import { Clock, MapPin, Scale } from "lucide-react";
import { AVISO_PESTANA, type Diccionario, type Locale } from "@/i18n";
import { WHATSAPP_NUMBER_DISPLAY, WHATSAPP_URL } from "@/lib/site";
import SeccionTitulo from "./SeccionTitulo";
import WhatsAppCTA from "./WhatsAppCTA";

export default function Contacto({ t, lang }: { t: Diccionario; lang: Locale }) {
  const { contacto } = t;

  const ficha = [
    { Icon: Scale, rotulo: contacto.areasRotulo, dato: contacto.areasDato },
    { Icon: MapPin, rotulo: contacto.atencionRotulo, dato: contacto.atencionDato },
    { Icon: Clock, rotulo: contacto.horarioRotulo, dato: t.comun.horario },
  ];

  return (
    <section
      id="contacto"
      aria-labelledby="contacto-titulo"
      className="bg-forest py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-20">
        <SeccionTitulo
          folio="08"
          seccion={t.comun.seccion}
          rotulo={contacto.rotulo}
          titulo={contacto.titulo}
          entrada={contacto.entrada}
          tono="oscuro"
          id="contacto-titulo"
        />

        <div>
          <Link
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${t.comun.escribirAl} ${WHATSAPP_NUMBER_DISPLAY} ${AVISO_PESTANA[lang]}`}
            className="inline-block font-serif text-[2.75rem] leading-none tracking-tight text-gold transition-colors duration-200 hover:text-paper sm:text-6xl lg:text-7xl"
          >
            {WHATSAPP_NUMBER_DISPLAY}
          </Link>

          <div className="mt-10">
            <WhatsAppCTA
              lang={lang}
              variant="contornoClaro"
              mensaje={contacto.mensaje}
            >
              {contacto.abrir}
            </WhatsAppCTA>
          </div>

          <dl className="mt-14 border-t border-rule-dark">
            {ficha.map(({ Icon, rotulo, dato }) => (
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
            {contacto.cierre}
          </p>
        </div>
      </div>
    </section>
  );
}
