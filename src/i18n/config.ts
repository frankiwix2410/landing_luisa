/**
 * Idiomas del sitio. El español vive sin prefijo (/derecho-de-familia) porque
 * es el idioma principal y sus URL no deben cambiar; el inglés vive bajo /en.
 * Internamente todas las rutas cuelgan de app/[lang] y el proxy traduce.
 *
 * Este archivo no importa diccionarios, para que los componentes de cliente
 * puedan usarlo sin cargar todos los textos en el navegador.
 */
export const LOCALES = ["es", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const LOCALE_PREDETERMINADO: Locale = "es";

export function hasLocale(valor: string): valor is Locale {
  return (LOCALES as readonly string[]).includes(valor);
}

/** Ruta pública en un idioma: "/" es "/" en español y "/en" en inglés. */
export function rutaLocal(lang: Locale, ruta = "/"): string {
  if (lang === LOCALE_PREDETERMINADO) return ruta;
  return ruta === "/" ? `/${lang}` : `/${lang}${ruta}`;
}

/** La misma página en cada idioma: alimenta hreflang, el sitemap y el selector. */
export type RutasAlternas = Record<Locale, string>;

export const OG_LOCALE: Record<Locale, string> = { es: "es_CO", en: "en_US" };

/** Cabecera en la que el proxy informa el idioma de la URL a las páginas sin params (la 404). */
export const CABECERA_IDIOMA = "x-idioma";

/** Aviso para lectores de pantalla en los enlaces que abren WhatsApp. */
export const AVISO_PESTANA: Record<Locale, string> = {
  es: "(se abre en una pestaña nueva)",
  en: "(opens in a new tab)",
};
