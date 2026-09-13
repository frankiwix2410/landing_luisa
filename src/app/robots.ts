import type { MetadataRoute } from "next";
import { SITE, absoluteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: absoluteUrl("/sitemap.xml"),
    // Declara el dominio real, para que un despliegue accesible por IP o por
    // la URL de Dokploy no compita como copia del sitio.
    host: SITE.url,
  };
}
