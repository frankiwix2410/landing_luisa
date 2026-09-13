import Link from "next/link";
import { absoluteUrl } from "@/lib/site";

export type Miga = {
  label: string;
  /** Cada miga lleva su ruta; la última se muestra como texto, sin enlace. */
  href: string;
};

/** Ruta visible. Úsala junto a `migasJsonLd` para que ambas digan lo mismo. */
export default function MigasDePan({
  items,
  etiqueta,
}: {
  items: Miga[];
  /** Nombre accesible del bloque, en el idioma de la página. */
  etiqueta: string;
}) {
  return (
    <nav aria-label={etiqueta} className="mb-10">
      <ol className="folio flex flex-wrap items-center gap-2.5 text-[10px] text-ink-soft">
        {items.map((miga, i) => {
          const actual = i === items.length - 1;
          return (
            <li key={miga.href} className="flex items-center gap-2.5">
              {i > 0 && (
                <span aria-hidden="true" className="text-brass">
                  /
                </span>
              )}
              {actual ? (
                <span aria-current="page" className="text-brass">
                  {miga.label}
                </span>
              ) : (
                <Link
                  href={miga.href}
                  className="transition-colors duration-200 hover:text-brass"
                >
                  {miga.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

/** BreadcrumbList construido con el mismo arreglo, para que no se contradigan. */
export function migasJsonLd(items: Miga[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((miga, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: miga.label,
      item: absoluteUrl(miga.href),
    })),
  };
}
