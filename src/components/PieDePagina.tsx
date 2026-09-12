import Link from "next/link";
import { NAV_LINKS, whatsappLink } from "@/lib/site";

export default function PieDePagina() {
  return (
    <footer className="border-t border-rule-dark bg-forest">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 pt-10 pb-24 sm:px-8 sm:pb-10 lg:flex-row lg:items-center lg:justify-between">
        <Link href="#portada" className="shrink-0" aria-label="Volver al inicio">
          <span className="block font-serif text-lg leading-none text-paper">
            Dra. Luisa Salazar Pérez
          </span>
          <span className="folio mt-1.5 block text-[10px] text-gold">
            Abogada
          </span>
        </Link>

        <nav aria-label="Navegación del pie de página">
          <ul className="flex flex-wrap items-center gap-x-7">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex min-h-11 items-center text-[13px] text-paper/70 transition-colors duration-200 hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={whatsappLink(
                  "Hola, Dra. Luisa. Quisiera solicitar una consulta jurídica.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center text-[13px] text-gold transition-colors duration-200 hover:text-paper"
              >
                WhatsApp
              </Link>
            </li>
          </ul>
        </nav>

        <p className="text-xs leading-relaxed text-paper/60">
          © {new Date().getFullYear()} Luisa Salazar Pérez.
          <span className="block sm:inline sm:before:mx-1.5 sm:before:content-['·']">
            Todos los derechos reservados.
          </span>
        </p>
      </div>
    </footer>
  );
}
