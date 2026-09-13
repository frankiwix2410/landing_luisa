import { headers } from "next/headers";
import {
  CABECERA_IDIOMA,
  LOCALE_PREDETERMINADO,
  hasLocale,
  type Locale,
} from "./config";

/**
 * Idioma de la URL solicitada, tal como lo detectó el proxy. Para páginas que
 * no reciben `params`, como la 404: /en/... responde en inglés y el resto en
 * español.
 */
export async function idiomaDePeticion(): Promise<Locale> {
  const valor = (await headers()).get(CABECERA_IDIOMA) ?? "";
  return hasLocale(valor) ? valor : LOCALE_PREDETERMINADO;
}
