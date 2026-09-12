import Link from "next/link";
import { whatsappLink, WHATSAPP_NUMBER_DISPLAY } from "@/lib/site";
import WhatsAppIcon from "./WhatsAppIcon";

/** Acceso permanente al único canal de contacto, en todas las secciones. */
export default function BotonWhatsAppFlotante() {
  return (
    <Link
      href={whatsappLink(
        "Hola, Dra. Luisa. Vi su página web y quisiera solicitar una consulta.",
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Escribir por WhatsApp al ${WHATSAPP_NUMBER_DISPLAY} (se abre en una pestaña nueva)`}
      className="fixed right-4 bottom-4 z-30 grid size-14 place-items-center rounded-full bg-forest text-gold ring-1 ring-gold/50 shadow-[0_14px_36px_-12px_rgba(0,0,0,0.55)] transition-[transform,background-color] duration-200 hover:scale-105 hover:bg-forest-mid sm:right-7 sm:bottom-7 sm:size-15"
    >
      <WhatsAppIcon className="size-7 sm:size-8" />
    </Link>
  );
}
