import { EB_Garamond, Lato } from "next/font/google";

/* Compartidas por el layout de cada idioma y por la 404 global, que no pasa
   por ningún layout y tiene que cargar sus propias fuentes. */
export const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});
