import Link from "next/link";
import {
  rutaLocal,
  type Diccionario,
  type Locale,
  type RutasAlternas,
} from "@/i18n";
import { whatsappLink } from "@/lib/site";

export default function PieDePagina({
  t,
  lang,
  alternas,
}: {
  t: Diccionario;
  lang: Locale;
  /** Esta misma página en cada idioma, para el enlace de cambio de idioma. */
  alternas: RutasAlternas;
}) {
  const inicio = rutaLocal(lang);
  const otro: Locale = lang === "es" ? "en" : "es";
  const enlace =
    "inline-flex min-h-11 items-center text-[13px] text-paper/70 transition-colors duration-200 hover:text-gold";

  return (
    <footer className="border-t border-rule-dark bg-forest">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 pt-10 pb-24 sm:px-8 sm:pb-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <Link href={inicio} className="shrink-0" aria-label={t.comun.volverInicio}>
            <span className="block font-serif text-lg leading-none text-paper">
              {t.comun.nombre}
            </span>
            <span className="folio mt-1.5 block text-[10px] text-gold">
              {t.comun.profesion}
            </span>
          </Link>

          <nav aria-label={t.comun.navPie}>
            <ul className="flex flex-wrap items-center gap-x-7">
              {t.nav.map((link) => (
                <li key={link.ancla}>
                  <Link href={`${inicio}#${link.ancla}`} className={enlace}>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={whatsappLink(t.contacto.mensaje)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center text-[13px] text-gold transition-colors duration-200 hover:text-paper"
                >
                  WhatsApp
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Enlaces a cada área en todas las páginas: rastreo y autoridad interna */}
        <div className="flex flex-col gap-4 border-t border-rule-dark pt-6 lg:flex-row lg:items-center lg:justify-between">
          <nav aria-label={t.areas.rotulo}>
            <ul className="flex flex-wrap items-center gap-x-7">
              {t.areas.lista.map((area) => (
                <li key={area.clave}>
                  <Link href={rutaLocal(lang, `/${area.slug}`)} className={enlace}>
                    {area.titulo}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={alternas[otro]}
                  hrefLang={otro}
                  lang={otro}
                  className="inline-flex min-h-11 items-center text-[13px] text-gold transition-colors duration-200 hover:text-paper"
                >
                  {t.comun.idioma.etiqueta}
                </Link>
              </li>
            </ul>
          </nav>

          <p className="text-xs leading-relaxed text-paper/60">
            © {new Date().getFullYear()} {t.comun.nombre}.
            <span className="block sm:inline sm:before:mx-1.5 sm:before:content-['·']">
              {t.comun.derechos}
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
