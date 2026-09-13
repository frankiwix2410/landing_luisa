import type { MetadataRoute } from "next";
import {
  LOCALES,
  RUTAS_INICIO,
  getDiccionario,
  idiomasAlternos,
  rutasArea,
} from "@/i18n";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  // Fecha fija en vez de `new Date()`: un lastModified que cambia en cada
  // rastreo es ruido y Google aprende a ignorarlo. Actualízala al editar textos.
  const lastModified = new Date("2026-09-13");

  const paginas = [
    { rutas: RUTAS_INICIO, priority: 1 },
    ...getDiccionario("es").areas.lista.map((area) => ({
      rutas: rutasArea(area.clave),
      priority: 0.8,
    })),
  ];

  // Una entrada por versión de cada página, y cada una declara todas sus
  // equivalentes: es la forma de hreflang que Google acepta en el sitemap.
  return paginas.flatMap(({ rutas, priority }) =>
    LOCALES.map((lang) => ({
      url: absoluteUrl(rutas[lang]),
      lastModified,
      changeFrequency: "monthly" as const,
      priority,
      alternates: { languages: idiomasAlternos(rutas, absoluteUrl) },
    })),
  );
}
