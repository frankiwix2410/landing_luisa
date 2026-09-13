import { NextResponse, type NextRequest } from "next/server";
import { CABECERA_IDIOMA } from "@/i18n/config";

/**
 * Todas las páginas viven en app/[lang], pero el español —idioma principal—
 * se publica sin prefijo. Este proxy reescribe /derecho-de-familia a
 * /es/derecho-de-familia sin cambiar la URL visible.
 *
 * /es/... es la ruta interna y se deja pasar tal cual: en la build standalone
 * (la de Docker) el proxy vuelve a ejecutarse sobre la URL ya reescrita, y
 * redirigir aquí /es → / crearía un bucle infinito. La redirección pública de
 * /es a su versión sin prefijo vive en next.config.ts.
 *
 * No redirige según el idioma del navegador a propósito: Googlebot rastrea sin
 * Accept-Language y dejaría de ver una de las dos versiones. El visitante
 * cambia de idioma con el selector y Google empareja las versiones con hreflang.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const ingles = pathname === "/en" || pathname.startsWith("/en/");
  const interna = pathname === "/es" || pathname.startsWith("/es/");

  // El idioma viaja en una cabecera para las páginas que no reciben params,
  // como la 404. Se sobrescribe siempre: el cliente no puede imponer otro.
  const cabeceras = new Headers(request.headers);
  cabeceras.set(CABECERA_IDIOMA, ingles ? "en" : "es");
  const peticion = { request: { headers: cabeceras } };

  // Inglés, rutas ya reescritas y archivos con extensión (sitemap.xml, og.jpg,
  // iconos) siguen su camino; los archivos no tienen versión por idioma.
  if (ingles || interna || /\.[^/]+$/.test(pathname)) {
    return NextResponse.next(peticion);
  }

  const url = request.nextUrl.clone();
  url.pathname = pathname === "/" ? "/es" : `/es${pathname}`;
  return NextResponse.rewrite(url, peticion);
}

export const config = {
  // Solo quedan fuera los recursos internos de Next.
  matcher: ["/((?!_next/).*)"],
};
