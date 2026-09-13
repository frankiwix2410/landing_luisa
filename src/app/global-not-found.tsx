import type { Metadata } from "next";
import "./globals.css";
import PaginaNoEncontrada from "@/components/PaginaNoEncontrada";
import { getDiccionario } from "@/i18n";
import { idiomaDePeticion } from "@/i18n/servidor";
import { garamond, lato } from "@/lib/fuentes";

export const metadata: Metadata = {
  robots: { index: false, follow: true },
};

/* Esta página no pasa por app/[lang]/layout: por eso carga aquí sus propios
   estilos, fuentes y etiquetas <html> y <body>, y toma el idioma de la
   cabecera que pone el proxy. */
export default async function GlobalNotFound() {
  const lang = await idiomaDePeticion();
  const t = getDiccionario(lang);

  return (
    <html
      lang={lang}
      className={`${garamond.variable} ${lato.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-paper font-sans text-ink">
        <title>{`${t.noEncontrada.metaTitulo} | ${t.comun.nombre}`}</title>
        <PaginaNoEncontrada lang={lang} />
      </body>
    </html>
  );
}
