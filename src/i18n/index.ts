import type { Metadata } from "next";
import { IMAGEN_COMPARTIR, absoluteUrl } from "@/lib/site";
import {
  LOCALES,
  LOCALE_PREDETERMINADO,
  OG_LOCALE,
  rutaLocal,
  type Locale,
  type RutasAlternas,
} from "./config";
import { en } from "./en";
import { es, type Diccionario } from "./es";

export * from "./config";
export type { Diccionario };

const DICCIONARIOS: Record<Locale, Diccionario> = { es, en };

export function getDiccionario(lang: Locale): Diccionario {
  return DICCIONARIOS[lang];
}

export type AreaTraducida = Diccionario["areas"]["lista"][number];

export function getAreaPorSlug(
  lang: Locale,
  slug: string,
): AreaTraducida | undefined {
  return DICCIONARIOS[lang].areas.lista.find((area) => area.slug === slug);
}

export const RUTAS_INICIO: RutasAlternas = {
  es: rutaLocal("es"),
  en: rutaLocal("en"),
};

/** Enlace de un área para los menús: solo datos planos, aptos para el cliente. */
export type EnlaceArea = {
  clave: string;
  folio: string;
  titulo: string;
  href: string;
};

export function enlacesAreas(lang: Locale): EnlaceArea[] {
  return DICCIONARIOS[lang].areas.lista.map(({ clave, folio, titulo, slug }) => ({
    clave,
    folio,
    titulo,
    href: rutaLocal(lang, `/${slug}`),
  }));
}

/** La misma área en cada idioma, emparejada por clave: los slugs se traducen. */
export function rutasArea(clave: string): RutasAlternas {
  const rutas = {} as RutasAlternas;
  for (const lang of LOCALES) {
    const area = DICCIONARIOS[lang].areas.lista.find((a) => a.clave === clave);
    if (!area) throw new Error(`Falta el área "${clave}" en el diccionario "${lang}"`);
    rutas[lang] = rutaLocal(lang, `/${area.slug}`);
  }
  return rutas;
}

/**
 * Mapa hreflang de una página: cada idioma apunta a su versión y x-default al
 * español, que es lo que ve quien no coincide con ningún idioma declarado.
 */
export function idiomasAlternos(
  rutas: RutasAlternas,
  convertir: (ruta: string) => string = (ruta) => ruta,
): Record<string, string> {
  return {
    ...Object.fromEntries(LOCALES.map((lang) => [lang, convertir(rutas[lang])])),
    "x-default": convertir(rutas[LOCALE_PREDETERMINADO]),
  };
}

/**
 * Metadatos de una página traducida. Cada versión declara su propia URL
 * canónica y enlaza a sus equivalentes con hreflang; sin eso Google puede
 * tratar la versión en inglés como un duplicado de la española y descartarla.
 */
export function metadatosPagina({
  lang,
  rutas,
  titulo,
  descripcion,
  tituloCompleto = false,
}: {
  lang: Locale;
  rutas: RutasAlternas;
  titulo: string;
  descripcion: string;
  /** La portada ya incluye la marca y no debe pasar por la plantilla del layout. */
  tituloCompleto?: boolean;
}): Metadata {
  const t = DICCIONARIOS[lang];
  const tituloCompartir = tituloCompleto ? titulo : `${titulo} | ${t.comun.nombre}`;
  const imagen = { ...IMAGEN_COMPARTIR, alt: t.meta.imagenAlt };

  return {
    title: tituloCompleto ? { absolute: titulo } : titulo,
    description: descripcion,
    alternates: {
      canonical: rutas[lang],
      languages: idiomasAlternos(rutas),
    },
    // Declarar openGraph en la página reemplaza por completo el del layout, así
    // que la imagen se repite aquí o WhatsApp se queda sin vista previa.
    openGraph: {
      title: tituloCompartir,
      description: descripcion,
      url: rutas[lang],
      siteName: t.comun.nombre,
      locale: OG_LOCALE[lang],
      alternateLocale: LOCALES.filter((otro) => otro !== lang).map(
        (otro) => OG_LOCALE[otro],
      ),
      type: "website",
      images: [imagen],
    },
    twitter: {
      card: "summary_large_image",
      title: tituloCompartir,
      description: descripcion,
      images: [imagen.url],
    },
  };
}

export { absoluteUrl };
